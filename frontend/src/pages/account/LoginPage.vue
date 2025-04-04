<template>
    <div class="login-page">
        <h1>Авторизация</h1>

        <LoginForm>
            <div>
                <RouterLink :to="{name: 'register'}" class="link">
                    Регистрация
                </RouterLink>
            </div>
        </LoginForm>
    </div>
</template>

<script setup lang="ts">
    import { LoginForm } from '~/features/sign-in';
    import { watch } from 'vue';
    import { useAccountStatusStore } from '~/entities/account-status';
    import { storeToRefs } from 'pinia';
    import { router } from '~/app/router.ts';

    const { isAuth } = storeToRefs(useAccountStatusStore());

    watch(isAuth, () => {
        if (isAuth.value) {
            router.push({ name: 'home' });
        }
    }, { immediate: true });
</script>

<style>
.login-page {
    max-width: 30rem;
}
</style>
