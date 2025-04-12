<template>
    <div>
        <Select
            v-if="filterItem.type === FilterType.select"
            :filter-item="filterItem as ISelectFilterItem"
        />
        <Range
            v-else-if="filterItem.type === FilterType.range"
            :filter-item="filterItem as IRangeFilterItem"
        />
        <DateRange
            v-else-if="filterItem.type === FilterType.dateRange"
            :filter-item="filterItem as IDateRangeFilterItem"
        />
    </div>
</template>

<script setup lang="ts">

    import { IDateRangeFilterItem, IFilterItem, FilterType, IRangeFilterItem, ISelectFilterItem } from './types.ts';
    import Select from './filter-types/Select.vue';
    import Range from './filter-types/Range.vue';
    import DateRange from './filter-types/DateRange.vue';

    type TProps = {
        filterItem: IFilterItem,
    }

    const { filterItem } = defineProps<TProps>();
</script>

<style>


</style>
