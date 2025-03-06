<template>
    <div>
        <form @submit.prevent="auth">
            <div>
                <input v-model="email" type="email" name="email" placeholder="Email">
            </div>
            <div>
                <input v-model="password" type="password" name="password" placeholder="Password">
            </div>

            <div>
                <button>Шли</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import {useAuth} from '../lib/auth.ts';

    const {email, password, auth} = useAuth();
</script>
