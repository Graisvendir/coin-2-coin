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
            default:
                return undefined;
        }
    }
</script>

<style>

</style>
