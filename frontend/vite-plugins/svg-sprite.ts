import { promises as fs } from 'fs';
import path from 'path';
import { Config, optimize } from 'svgo';

interface PluginOptions {
    include: string,
    output: {
        dir: string,
        spriteName: string
    },
    svgo?: Config,
}

export function svgSpritePlugin(options: PluginOptions) {

    async function getSvgContent(svgPath: string) {
        const svgContent = await fs.readFile(svgPath, 'utf8');

        return options.svgo ? optimize(svgContent, options.svgo).data : svgContent;
    }

    async function generateIconSprite() {
        console.info('svgSpritePlugin: generateIconSprite START'); // TODO: remove console.log
        // Read the SVG files in the static/icons folder
        const iconsDir = path.join(process.cwd(), options.include);
        const files = await fs.readdir(iconsDir);
        let symbols = '';

        // Build up the SVG sprite from the SVG files
        for (const file of files) {
            if (!file.endsWith('.svg')) {
                continue;
            }

            let svgContent = await getSvgContent(path.join(iconsDir, file));
            const id = file.replace('.svg', '');
            svgContent = svgContent
                .replace(/id="[^"]+"/, '') // Remove any existing id
                .replace('<svg', `<symbol id="${id}"`) // Change <svg> to <symbol>
                .replace('</svg>', '</symbol>');
            symbols += svgContent + '\n';
        }

        // Write the SVG sprite to a file in the static folder
        const sprite = `<svg>\n\n${symbols}</svg>`;

        console.info('svgSpritePlugin: generateIconSprite END'); // TODO: remove console.log

        const outputDirPath = path.join(process.cwd(), options.output.dir);
        const hasOutputDir = await fs.readdir(outputDirPath);

        if (!hasOutputDir) {
            console.info('svgSpritePlugin: Создает папку для спрайта'); // TODO: remove console.log
            await fs.mkdir(outputDirPath);
        }

        await fs.writeFile(path.join(outputDirPath, options.output.spriteName), sprite);
    }

    return {
        name: 'svg-sprite-plugin',
        buildStart() {
            console.info('svgSpritePlugin: buildStart'); // TODO: remove console.log

            // Generate during build
            return generateIconSprite();
        },
        configureServer(server) {
            console.info('svgSpritePlugin: configureServer'); // TODO: remove console.log
            // Regenerate during development whenever an icon is added
            server.watcher.add(path.join(process.cwd(), options.include, '*.svg'));
            server.watcher.on('change', async (changedPath: string) => {
                if (changedPath.endsWith('.svg')) {
                    console.info('svgSpritePlugin: changed path: ' + changedPath); // TODO: remove console.log

                    return generateIconSprite();
                }
            });
        },
    };
}
