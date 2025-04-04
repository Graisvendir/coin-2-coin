<template>
    <form class="form" @submit.prevent="auth">
        <div>
            <input v-model="email" type="email" placeholder="Email">
        </div>
        <div>
            <input v-model="password" type="password" placeholder="Password">
        </div>

        <div class="form__buttons">
            <button class="btn">
                Войти
            </button>

            <slot />
        </div>
    </form>
</template>

<script setup lang="ts">
    import {useAuth} from '../lib/auth.ts';

    const {email, password, auth} = useAuth();
</script>

<style>

.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form__buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
}

</style>
