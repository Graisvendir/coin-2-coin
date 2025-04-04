<template>
    <div class="transactions-page">
        <h2>История транзакций</h2>

        <TransactionsHistory />

        <div class="transactions-page__float-button">
            <AddTransactionButton />
        </div>
    </div>
</template>

<script setup lang="ts">

    import { TransactionsHistory } from '~/widgets/transaction-history';
    import { AddTransactionButton } from '~/features/edit-transaction';

</script>

<style>
.transactions-page {
    position: relative;
    max-width: 60rem;
}

.transactions-page__float-button {
    display: flex;
    justify-content: flex-end;
    position: sticky;
    right: 1rem;
    bottom: 3rem;
}

</style>
