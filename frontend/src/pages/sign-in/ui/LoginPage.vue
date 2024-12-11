<template>
    <div>
        <form @submit.prevent="fetchAuth">
            <input v-model="email" type="email">
            <input v-model="password" type="password">

            <div>
                <button>Send</button>
            </div>
        </form>

        <RouterLink :to="{name: 'home'}">
            Back to home
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
    import {useAuth} from '~/pages/sign-in/api/auth.ts';

    const {email, password, fetchAuth} = useAuth();
</script>
