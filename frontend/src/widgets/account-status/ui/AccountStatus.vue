<template>
    <div class="account-status">
        <div class="account-status__name">{{ isAuth ? account?.email : 'Не авторизованный пес' }}</div>
        <button>Выйти</button>
    </div>
</template>

<script setup lang="ts">
    import {useAccountStatusStore} from '~/entities/account-status';
    import {storeToRefs} from 'pinia';

    const store = useAccountStatusStore();
    const {isAuth, account} = storeToRefs(store);
</script>

<style>
.account-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: border-box;
}
</style>
