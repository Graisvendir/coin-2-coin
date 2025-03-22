<template>
    <div class="panel">
        <div class="panel-overlay"></div>

        <form class="transaction-panel" @submit.prevent="save">
            <input name="name" placeholder="Ну и куда ты бабки потратил?" />
            <input name="name" placeholder="А когда?" />
            <input name="name" placeholder="Сколько-сколько?" />
        </form>
    </div>
</template>

<script setup lang="ts">
    import { TAccountTransaction } from '~/shared/api';
    import {
        addAccountTransaction,
        updateAccountTransaction,
    } from '~/features/edit-transaction/lib/account-transaction-controller.ts';

    type TProps = {
        transaction?: TAccountTransaction;
    }

    const { transaction } = defineProps<TProps>();

    function save() {
        if (transaction) {
            updateAccountTransaction(transaction, {});
        } else {
            addAccountTransaction({});
        }
    }
</script>

<style>

.transaction-panel {
    max-width: 50rem;
    max-height: 50rem;
    bottom: 0;
}
</style>
