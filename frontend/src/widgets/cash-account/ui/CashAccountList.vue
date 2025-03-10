<template>
    <div>
        <CashAccount v-for="cashAccount in cashAccounts" :key="cashAccount.id" :cash-account="cashAccount" />
    </div>
</template>

<script setup lang="ts">

    import {watch} from 'vue';
    import {storeToRefs} from 'pinia';
    import {CashAccount, loadCashAccounts, useCashAccountsStore} from '~/entities/cash-account';
    import {useAccountStatusStore} from '~/entities/account-status';

    const cashAccountsStore = useCashAccountsStore();
    const { cashAccounts } = storeToRefs(cashAccountsStore);
    const accountStore = useAccountStatusStore();
    const { isAuth } = storeToRefs(accountStore);

    watch(isAuth, () => {
        if (isAuth) {
            loadCashAccounts();
        }
    }, { immediate: true});
</script>
