<template>
    <div>{{ store.email ?? 'Не авторизованный пес' }}</div>
</template>

<script setup lang="ts">
    import {useAccountStatusStore} from '~/entities/account-status';

    const store = useAccountStatusStore();
</script>
