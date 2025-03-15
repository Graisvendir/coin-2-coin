<template>
    <transition name="fade" mode="out-in" appear>
        <div v-if="isReady" class="layout">
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

        <div v-else class="splash">
            <div class="splash__text">
                DEV
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
    import '../shared/common.css';
    import {checkAccountStatus} from '~/entities/account-status';
    import {AccountStatus} from '~/widgets/account-status';
    import CashAccountList from '~/widgets/cash-account/ui/CashAccountList.vue';
    import {useAppStore} from '~/entities/account-status/model/app-store.ts';
    import {storeToRefs} from 'pinia';

    const appStore = useAppStore();
    const {isReady} = storeToRefs(appStore);
    const {ready} = appStore;

    async function init() {
        await checkAccountStatus();
        ready();
    }

    init();
</script>

<style>

.layout {
    display: flex;
}

.layout__sidebar {
    flex-shrink: 0;
    width: 25rem;
    border-right: 1px solid var(--color-border);
    padding: 2rem;
    box-sizing: border-box;
}

.layout__main {
    flex-grow: 1;
    padding: 2rem;
}

.splash {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.splash__text {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1;
    padding: .3em;
    box-sizing: border-box;
    background: var(--color-primary);
    border-radius: .2em;
    animation: 1s ease splash alternate-reverse infinite;
}

@keyframes splash {
    from {
        opacity: .3;
    }

    to {
        opacity: 1;
    }
}
</style>

