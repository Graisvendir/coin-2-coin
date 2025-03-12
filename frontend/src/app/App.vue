<template>
    <div class="layout">
        <div class="layout__sidebar">
            <h1>Coin-2-coin</h1>
            <AccountStatus />
            <CashAccountList />
        </div>
        <div class="layout__main">
            <RouterView v-slot="{ Component }">
                <transition mode="out-in" name="fade">
                    <component :is="Component" />
                </transition>
            </RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
    import '../shared/common.css';
    import {checkAccountStatus} from '~/entities/account-status';
    import {AccountStatus} from '~/widgets/account-status';
    import CashAccountList from '~/widgets/cash-account/ui/CashAccountList.vue';

    checkAccountStatus();

</script>

<style>

.layout {
    display: flex;
    height: 100vh;
    width: 100vw;
}

.layout__sidebar {
    flex-shrink: 0;
    width: 20rem;
    border-right: 1px solid red;
    padding: 1rem;
}

.layout__main {
    flex-grow: 1;
    padding: 1rem;
}
</style>

