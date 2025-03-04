<template>
    <div>
        <form @submit.prevent="auth">
            <div>
                <input v-model="email" type="email" placeholder="Email">
            </div>
            <div>
                <input v-model="password" type="password" placeholder="Password">
            </div>

            <div>
                <button>Шли</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import {useAuth} from '~/features/sign-in';

    const {email, password, auth} = useAuth();
</script>
