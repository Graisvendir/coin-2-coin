<template>
    <custom-modal>
        <EditAccountTransactionForm :transaction="transaction" />
    </custom-modal>
</template>

<script setup lang="ts">
    import { TAccountTransaction } from '~/shared/api';
    import { CustomModal } from '~/shared/ui';
    import EditAccountTransactionForm from './EditAccountTransactionForm.vue';

    type TProps = {
        transaction?: TAccountTransaction;
    }

    const { transaction } = defineProps<TProps>();

</script>

<style>


</style>
