<template>
    <div>
        <form @submit.prevent="register">
            <div>
                <input v-model="email" type="email" placeholder="Email">
            </div>
            <div>
                <input v-model="password" type="password" placeholder="Password">
            </div>

            <div>
                <button class="btn">Шли</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { useRegister } from '../lib/register.ts';

    const {email, password, register} = useRegister();
</script>
