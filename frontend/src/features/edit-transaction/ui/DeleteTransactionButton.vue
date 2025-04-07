<template>
    <button class="btn btn--small btn--icon" @click="deleteTransaction">
        <Icon :icon-name="IconEnum.delete" />
    </button>
</template>

<script setup lang="ts">

    import { deleteAccountTransaction } from '../lib/account-transaction-controller.ts';
    import { useAccountTransactionStore } from '~/entities/account-transaction';
    import { TAccountTransaction } from '~/shared/api';
    import { Icon, IconEnum } from '~/shared/ui';

    type TProps = {
        transaction: TAccountTransaction;
    }

    const { transaction } = defineProps<TProps>();

    async function deleteTransaction() {
        // TODO: нормальная модалка с подтверждением. Либо разместить кнопку в более UX месте, чтоб случайным нажатием нельзя было дропнуть транзакцию
        const result = confirm('Необратимое действие. Ты уверен? Транзакцию нельзя будет вернуть.');

        if (result) {
            await deleteAccountTransaction(transaction.id);
            const store = useAccountTransactionStore();
            store.updateTransaction();
        }
    }
</script>

<style>

</style>
