<template>
    <div>
        <AccountTransaction
            v-for="transaction in transactionList"
            :key="transaction.id"
            :transaction="transaction"
        />
    </div>
</template>

<script setup lang="ts">
    import {SuccessResponse, TAccountTransaction, useApiFetch} from '~/shared/api';
    import {ref} from 'vue';
    import {AccountTransaction} from '~/entities/account-transaction';

    const transactionList = ref<TAccountTransaction[]>([]);

    async function load() {
        const response = await useApiFetch('/account-transaction').json().get();

        if (response.response.value?.ok) {
            const jsonResponse = await response.json<SuccessResponse<TAccountTransaction[]>>();

            if (jsonResponse.data.value) {
                transactionList.value = jsonResponse.data.value.data;
            }
        }
    }

    load();
</script>
