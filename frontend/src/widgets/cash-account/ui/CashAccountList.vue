<template>
    <div>
        <h3>Счета</h3>
        <div class="cash-account-list">
            <EditableCashAccount
                v-for="cashAccount in cashAccounts"
                :key="cashAccount.id"
                :cash-account="cashAccount"
            />
        </div>
        <AddCashAccount />
    </div>
</template>

<script setup lang="ts">
    import { watch } from 'vue';
    import { storeToRefs } from 'pinia';
    import { loadCashAccounts, useCashAccountsStore } from '~/entities/cash-account';
    import { useAccountStatusStore } from '~/entities/account-status';
    import { AddCashAccount } from '../../../features/edit-cash-accounts';
    import { EditableCashAccount } from '~/features/edit-cash-accounts';

    const cashAccountsStore = useCashAccountsStore();
    const { cashAccounts } = storeToRefs(cashAccountsStore);
    const accountStore = useAccountStatusStore();
    const { isAuth } = storeToRefs(accountStore);

    watch(isAuth, () => {
        if (isAuth) {
            loadCashAccounts();
        }
    }, { immediate: true });

</script>

<style>
.cash-account-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
