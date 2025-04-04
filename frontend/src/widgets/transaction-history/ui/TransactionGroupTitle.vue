<template>
    <div
        v-if="date"
        class="account-transaction-group-title"
    >
        {{ date.format('DD-MM-YYYY') }}
    </div>
</template>

<script setup lang="ts">

    import { dayjs } from '~/shared/utils';

    type TProps = {
        date?: dayjs.Dayjs;
    }

    const { date } = defineProps<TProps>();

</script>

<style>

.account-transaction-group-title {
    padding: 1rem;
}
</style>
