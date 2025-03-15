<template>
    <div class="account-transaction-list">
        <AccountTransaction
            v-for="transaction in transactionList"
            :key="transaction.id"
            :transaction="transaction"
        />
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
    import {TAccountTransaction, TPaginatedAccountTransactions, useApiFetch} from '~/shared/api';
    import {ref} from 'vue';
    import {AccountTransaction} from '~/entities/account-transaction';

    const transactionList = ref<TAccountTransaction[]>([]);
    const moreLink = ref<string | undefined>();

    async function load(link = '/account-transaction') {
        const response = await useApiFetch(link).json().get();

        if (response.response.value?.ok) {
            const jsonResponse = await response.json<TPaginatedAccountTransactions>();

            if (jsonResponse.data.value) {
                transactionList.value.push(
                    ...jsonResponse.data.value.data,
                );
                moreLink.value = jsonResponse.data.value.links.next;
            }
        }
    }

    load();
</script>

<style>
.account-transaction-list {
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
