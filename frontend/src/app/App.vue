<template>
    <div class="layout">
        <div class="layout__sidebar">
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
    import {onMounted} from 'vue';
    import {checkAccountStatus} from '~/entities/account-status';
    import {AccountStatus} from '~/widgets/account-status';
    import CashAccountList from '~/widgets/cash-account/ui/CashAccountList.vue';

    onMounted(() => {
        /**
         * На старте приложения получаем аккаунт пользователя.
         */
        checkAccountStatus();
    });
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
}

.layout__main {
    flex-grow: 1;
}
</style>

