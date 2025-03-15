<template>
    <div class="cash-account">{{ cashAccount.name }}</div>
</template>

<script setup lang="ts">
    import {TCashAccount} from '~/shared/api';

    type TProps = {
        cashAccount: TCashAccount
    }

    const { cashAccount } = defineProps<TProps>();

</script>

<style>
.cash-account {
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: border-box;
}
</style>
