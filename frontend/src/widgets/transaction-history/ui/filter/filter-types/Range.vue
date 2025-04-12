<template>
    <div>
        <input :name="filterItem.name" type="number">
        <input :name="filterItem.name" type="number">
    </div>
</template>

<script setup lang="ts">

    import { IRangeFilterItem } from '../types.ts';

    type TProps = {
        filterItem: IRangeFilterItem,
    }

    const { filterItem } = defineProps<TProps>();
</script>

<style>


</style>
