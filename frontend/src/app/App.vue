<template>
    <AccountStatus />
    <CashAccountList />

    <RouterView v-slot="{ Component }">
        <transition mode="out-in" name="fade">
            <component :is="Component" />
        </transition>
    </RouterView>
</template>

<script setup lang="ts">
    import '../shared/common.css';
    import {onMounted} from 'vue';
    import {checkAccountStatus} from '~/entities/account-status';
    import {AccountStatus} from '~/widgets/account-status';
    import CashAccountList from '~/widgets/cash-account/ui/CashAccountList.vue';
    import {loadCashAccounts} from '~/entities/cash-account';

    onMounted(() => {
        /**
         * На старте приложения получаем аккаунт пользователя.
         */
        checkAccountStatus();
        loadCashAccounts();
    });
</script>

<style>
</style>

