<template>
    <div>
        <select :name="filterItem.name">
            <option
                v-for="option in filterItem.options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">

    import { ISelectFilterItem } from '../types.ts';

    type TProps = {
        filterItem: ISelectFilterItem,
    }

    const { filterItem } = defineProps<TProps>();
</script>

<style>


</style>
