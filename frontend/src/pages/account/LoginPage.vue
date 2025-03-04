<template>
    <div>
        <h1>Login</h1>
        <LoginForm />

        <RouterLink :to="{name: 'home'}">
            Back to home
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
    import { LoginForm } from '~/features/sign-in';
</script>
