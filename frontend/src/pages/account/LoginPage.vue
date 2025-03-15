<template>
    <div>
        <h1>Login</h1>
        <LoginForm />

        <RouterLink :to="{name: 'register'}" class="link">Register</RouterLink>
    </div>
</template>

<script setup lang="ts">
    import { LoginForm } from '~/features/sign-in';
    import {watch} from 'vue';
    import {useAccountStatusStore} from '~/entities/account-status';
    import {storeToRefs} from 'pinia';
    import {router} from '~/app/router.ts';

    const { isAuth } = storeToRefs(useAccountStatusStore());

    watch(isAuth, () => {
        if (isAuth.value) {
            router.push({ name: 'home' });
        }
    }, { immediate: true });
</script>
