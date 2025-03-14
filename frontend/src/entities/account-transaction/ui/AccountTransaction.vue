<template>
    <div class="account-transaction">
        <div class="account-transaction__name">{{ transaction.name }}</div>
        <div class="account-transaction__date">{{ transaction.created_at }}</div>
        <div class="account-transaction__amount">{{ transaction.amount }}₽</div>
        <div class="account-transaction__tags">{{ transaction.tags }}</div>
    </div>
</template>

<script setup lang="ts">

    import {TAccountTransaction} from '~/shared/api';

    type TProps = {
        transaction: TAccountTransaction;
    }

    const { transaction } = defineProps<TProps>();
</script>


<style>

</style>
