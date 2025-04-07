<template>
    <svg :class="`icon icon--${iconName}`">
        <use :href="`/assets/icon-sprite.svg#${iconName}`" />
    </svg>
</template>

<script setup lang="ts">

    import { IconEnum } from './types.ts';

    // TODO: придумать, как не перезапуская фронтенд, обновлять файлик иконок
    type TProps = {
        iconName: IconEnum;
    }

    const { iconName } = defineProps<TProps>();

</script>

<style>
.icon {
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5em;
}
</style>
