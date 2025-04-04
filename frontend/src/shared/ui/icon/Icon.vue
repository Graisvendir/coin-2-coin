<template>
    <div class="icon">
        {{ iconContent() }}
    </div>
</template>

<script setup lang="ts">

    import { IconEnum } from './types.ts';

    type TProps = {
        iconName: IconEnum;
    }

    const { iconName } = defineProps<TProps>();

    // TODO: заменить потом все иконки на нормальные, со спрайтом
    function iconContent(): string | undefined {
        switch (iconName) {
            case IconEnum.pencil:
                return '✏️';
            case IconEnum.bin:
                return '🗑';
            case IconEnum.plus:
                return '➕';
            case IconEnum.cross:
                return '❌';
            default:
                return undefined;
        }
    }
</script>

<style>
.icon {
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5em;
}
</style>
