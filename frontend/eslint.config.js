import eslint from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
    { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
    {
        extends: [
            eslint.configs.recommended,
            ...typescriptEslint.configs.recommended,
            ...eslintPluginVue.configs['flat/recommended'],
        ],
        files: ['**/*.{ts,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parserOptions: {
                parser: typescriptEslint.parser,
            },
        },
        rules: {
            // your rules
            "vue/script-indent": ["error", 4, {
                baseIndent: 1,
                switchCase: 1,
                ignores: [],
            }],
            "vue/html-quotes": ["error", "double", {
                avoidEscape: false,
            }],

            "vue/max-attributes-per-line": ["error", {
                singleline: {
                    max: 4,
                },

                multiline: {
                    max: 1,
                },
            }],

            "vue/html-indent": ["error", 4, {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            }],

            "vue/no-v-for-template-key-on-child": "error",
            "vue/no-reserved-keys": "error",
            "vue/require-v-for-key": "error",
            "vue/no-mutating-props": "error",
            "vue/require-component-is": "error",
            "vue/valid-v-bind": "error",
            "vue/valid-v-for": "error",
            "vue/valid-v-if": "error",
            "vue/valid-v-model": "error",
            "vue/valid-v-else-if": "error",
            "vue/multi-word-component-names": "off",

            "vue/first-attribute-linebreak": ["error", {
                singleline: "ignore",
                multiline: "below",
            }],

            "max-lines": ["error", 1000],
            "no-var": 1,
            "no-eval": "error",

            indent: ["error", 4, {
                SwitchCase: 1,
            }],

            quotes: ["error", "single"],

            "space-before-function-paren": ["error", {
                anonymous: "never",
                named: "never",
                asyncArrow: "always",
            }],

            "no-shadow-restricted-names": "error",

            "padding-line-between-statements": ["error", {
                blankLine: "always",
                prev: "*",
                next: "return",
            }, {
                blankLine: "any",
                prev: ["const", "let"],
                next: "*",
            }, {
                blankLine: "any",
                prev: ["const", "let"],
                next: ["const", "let"],
            }, {
                blankLine: "any",
                prev: "*",
                next: ["if", "for", "do", "while"],
            }],

            "keyword-spacing": ["error", {
                before: true,
            }],

            "comma-dangle": ["error", "always-multiline"],
            "default-case": "error",

            "no-use-before-define": ["error", {
                functions: true,
                classes: true,
                variables: false,
            }],

            "max-nested-callbacks": ["error", 3],
            "no-shadow": "off",
            "@typescript-eslint/no-shadow": "error",
            "@typescript-eslint/no-explicit-any": "off",
            semi: "error",

        },
    },
    {
        files: ["**/*.vue"],
        rules: {
            indent: "off",
        },
    },
);
