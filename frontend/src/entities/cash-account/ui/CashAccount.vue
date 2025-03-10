<template>
    <div>{{ cashAccount.id }}: {{ cashAccount.name }}</div>
</template>

<script setup lang="ts">
    import {TCashAccount} from '~/shared/api';

    type TProps = {
        cashAccount: TCashAccount
    }

    const { cashAccount } = defineProps<TProps>();

</script>
