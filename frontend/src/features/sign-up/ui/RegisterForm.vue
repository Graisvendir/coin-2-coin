<template>
    <form class="form" @submit.prevent="register">
        <div>
            <input v-model="email" type="email" placeholder="Email">
        </div>
        <div>
            <input v-model="password" type="password" placeholder="Password">
        </div>

        <div class="form__buttons">
            <button class="btn">
                Зарегистрироваться
            </button>

            <slot />
        </div>
    </form>
</template>

<script setup lang="ts">
    import { useRegister } from '../lib/register.ts';

    const {email, password, register} = useRegister();
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
