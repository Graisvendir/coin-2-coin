<template>
    <form class="transaction-form" @submit.prevent="save">
        <div>
            <input
                v-model="name"
                name="name"
                placeholder="Ну и куда ты бабки потратил?"
                required
            >
        </div>
        <div>
            <input
                v-model="createdAt"
                name="created_at"
                type="datetime-local"
                placeholder="А когда?"
                required
            >
        </div>
        <div>
            <input
                v-model="amount"
                name="amount"
                type="number"
                placeholder="Сколько-сколько?"
                required
            >
        </div>
        <div>
            <select v-model="cashAccountId" name="cash_account_id" required>
                <option v-for="cashAccount in cashAccounts" :key="cashAccount.id" :value="cashAccount.id">
                    {{ cashAccount.name }}
                </option>
            </select>
        </div>
        <button type="submit">
            Сохранить
        </button>
    </form>
</template>

<script setup lang="ts">
    import { inject, ref } from 'vue';
    import { TAccountTransaction } from '~/shared/api';
    import {
        addAccountTransaction,
        updateAccountTransaction,
    } from '../lib/account-transaction-controller.ts';
    import { useCashAccountsStore } from '~/entities/cash-account';
    import { storeToRefs } from 'pinia';
    import { useAccountTransactionStore } from '~/entities/account-transaction';
    import { closeModelInjectionKey } from '~/shared/ui';
    import { dayjs } from '~/shared/utils';

    type TProps = {
        transaction?: TAccountTransaction;
    }

    const { transaction } = defineProps<TProps>();
    const cashAccountsStore = useCashAccountsStore();
    const { cashAccounts, defaultCashAccount } = storeToRefs(cashAccountsStore);

    const name = ref<string>(transaction?.name || '');
    const transactionDate = transaction?.created_at || dayjs();
    const createdAt = ref<string>(transactionDate.format('YYYY-MM-DDTHH:mm:ss'));
    const amount = ref<number>(transaction?.amount || 0);
    const cashAccountId = ref<number>(transaction?.cash_account_id || defaultCashAccount?.value?.id || 0);

    const closeModal = inject(closeModelInjectionKey);

    async function save() {
        const transactionFromInputs = {
            name: name.value,
            cash_account_id: cashAccountId.value,
            created_at: createdAt.value,
            amount: amount.value,
        };

        const response = transaction
            ? await updateAccountTransaction(transaction, transactionFromInputs)
            : await addAccountTransaction(transactionFromInputs);

        if (response.value?.ok) {
            closeModal?.();
            const store = useAccountTransactionStore();
            store.updateTransaction();
        }
    }
</script>

<style>

.transaction-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
