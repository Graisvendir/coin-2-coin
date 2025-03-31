<template>
    <div class="account-transaction-list">
        <div
            v-for="(transaction, index) in transactionList"
            :key="transaction.id"
        >
            <div
                v-if="index === 0 || transaction.created_at.getDate() !== transactionList[index - 1].created_at.getDate()"
                class="account-transaction-list__date"
            >
                {{ transaction.created_at }}
            </div>
            <AccountTransaction
                :transaction="transaction"
            />
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
</script>

<style>
.account-transaction-list {
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.account-transaction-list__date {
    padding: 1rem;
}
</style>
