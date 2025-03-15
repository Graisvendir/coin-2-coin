<template>
    <div class="account-status">
        <div class="account-status__name">{{ isAuth ? account?.email : 'Неавторизованный пёс' }}</div>
        <button v-if="isAuth" @click="logout()">Выйти</button>
    </div>
</template>

<script setup lang="ts">
    import {useAccountStatusStore} from '~/entities/account-status';
    import {storeToRefs} from 'pinia';
    import {useLogout} from '~/features/logout';

    const { logout } = useLogout();

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
