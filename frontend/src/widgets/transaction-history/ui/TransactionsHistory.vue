<template>
    <div class="account-transaction-list">
        <div
            v-for="(transaction, index) in transactionList"
            :key="transaction.id"
        >
            <TransactionGroupTitle :date="getDayGroupDate(transaction, index)" />
            <AccountTransaction
                :transaction="transaction"
            >
                <template #buttons>
                    <DeleteTransactionButton :transaction="transaction" />
                    <EditTransactionButton :transaction="transaction" />
                </template>
            </AccountTransaction>
        </div>

        <a
            v-if="moreLink"
            :href="moreLink"
            @click.prevent="load(moreLink)"
        >
            Следующие
        </a>
    </div>
</template>

<script setup lang="ts">
    import { AccountTransactionRequest, TAccountTransaction, TPaginatedAccountTransactions } from '~/shared/api';
    import { ref, watch } from 'vue';
    import { AccountTransaction as AccountTransactionFn } from '~/shared/api';
    import { AccountTransaction, useAccountTransactionStore } from '~/entities/account-transaction';
    import { storeToRefs } from 'pinia';
    import DeleteTransactionButton from '~/features/edit-transaction/ui/DeleteTransactionButton.vue';
    import EditTransactionButton from '~/features/edit-transaction/ui/EditTransactionButton.vue';
    import TransactionGroupTitle from '~/widgets/transaction-history/ui/TransactionGroupTitle.vue';

    const transactionList = ref<TAccountTransaction[]>([]);
    const moreLink = ref<string | undefined>();

    async function load(link?: string) {
        const response = await AccountTransactionRequest.load(link);

        if (!response.response.value?.ok) {
            return;
        }

        const jsonResponse = await response.json<TPaginatedAccountTransactions>();

        if (!jsonResponse.data.value) {
            return;
        }

        if (link) {
            transactionList.value.push(
                ...jsonResponse.data.value.data.map(item => AccountTransactionFn(item)),
            );
        } else {
            transactionList.value = jsonResponse.data.value.data.map(item => AccountTransactionFn(item));
        }

        moreLink.value = jsonResponse.data.value.links.next;
    }

    load();

    const accountTransactionsStore = useAccountTransactionStore();
    const { needReload } = storeToRefs(accountTransactionsStore);

    watch(needReload, () => {
        if (needReload.value) {
            load();
            accountTransactionsStore.reloaded();
        }
    });

    /**
     * Отдаст дату, которую будем выводить для группировки транзакций по дням
     *
     * @param transaction
     * @param transactionIndexInList
     */
    function getDayGroupDate(transaction: TAccountTransaction, transactionIndexInList: number) {
        if (transactionIndexInList === 0) {
            return transaction.created_at;
        }

        const formatString = 'YYYY-MM-DD';
        const transactionDate = transaction.created_at.format(formatString);
        const previousTransaction = transactionList.value[transactionIndexInList - 1];
        const previousTransactionDate = previousTransaction.created_at.format(formatString);

        return transactionDate === previousTransactionDate
            ? undefined
            : transaction.created_at;
    }

</script>

<style>
.account-transaction-list {
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

</style>
