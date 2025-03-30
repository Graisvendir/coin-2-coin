<template>
    <div>
        <h2>История транзакций</h2>
        <AddTransactionButton />

        <TransactionsHistory />
    </div>
</template>

<script setup lang="ts">

    import { TransactionsHistory } from '~/widgets/transaction-history';
    import { AddTransactionButton } from '~/features/edit-transaction';

</script>
