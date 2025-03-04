<template>
    <div>{{ isAuth ? account?.email : 'Не авторизованный пес' }}</div>
</template>

<script setup lang="ts">
    import {useAccountStatusStore} from '~/entities/account-status';
    import {storeToRefs} from 'pinia';

    const store = useAccountStatusStore();
    const {isAuth, account} = storeToRefs(store);
</script>
