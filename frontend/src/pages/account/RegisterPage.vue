<template>
    <div class="register-page">
        <h1>Регистрация</h1>

        <RegisterForm>
            <div>
                <RouterLink :to="{name: 'login'}" class="link">
                    Авторизация
                </RouterLink>
            </div>
        </RegisterForm>
    </div>
</template>

<script setup lang="ts">
    import {RegisterForm} from '~/features/sign-up';
</script>

<style>
.register-page {
    max-width: 30rem;
}
</style>
