<template>
    <div>
        <h1>Registration</h1>
        <RegisterForm />

        <RouterLink :to="{name: 'login'}" class="link">Back to Login</RouterLink>
    </div>
</template>

<script setup lang="ts">
    import {RegisterForm} from '~/features/sign-up';
</script>
