<template>
    <form class="filter">
        <FilterItem
            v-for="item in filterList"
            :key="item.name"
            :filter-item="item"
        />
    </form>
</template>

<script setup lang="ts">

    import { DateTime } from '~/shared/utils';
    import { IDateRangeFilterItem, IFilterItem, FilterType, IRangeFilterItem, ISelectFilterItem } from './types.ts';
    import FilterItem from './FilterItem.vue';
    import { useCashAccountsStore } from '~/entities/cash-account';
    import { storeToRefs } from 'pinia';

    const cashAccountStore = useCashAccountsStore();
    const { cashAccounts } = storeToRefs(cashAccountStore);

    const cashAccountOptions = cashAccounts.value.map(account => ({
        label: account.name,
        value: account.id.toString(),
    }));

    const filterList: IFilterItem[] = [
        {
            type: FilterType.dateRange,
            name: 'created_at',
            max: new DateTime(),
        } as IDateRangeFilterItem,
        {
            type: FilterType.select,
            name: 'cash_account_id',
            multi: true,
            options: cashAccountOptions,
        } as ISelectFilterItem,
        {
            type: FilterType.range,
            name: 'amount',
            min: 0,
            max: 100000,
        } as IRangeFilterItem,
        {
            type: FilterType.select,
            name: 'tags',
            multi: true,
            options: [
                {
                    label: 'kek',
                    value: '123',
                },
            ],
        } as ISelectFilterItem,
    ];
</script>

<style>
.filter {
    display: flex;
    gap: 1rem;
}

</style>
