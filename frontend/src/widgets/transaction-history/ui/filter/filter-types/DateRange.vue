<template>
    <div>
        <input :name="filterItem.name" type="date">
        <input :name="filterItem.name" type="date">
    </div>
</template>

<script setup lang="ts">
    import { IDateRangeFilterItem } from '../types.ts';

    type TProps = {
        filterItem: IDateRangeFilterItem,
    }

    const { filterItem } = defineProps<TProps>();
</script>

<style>


</style>
