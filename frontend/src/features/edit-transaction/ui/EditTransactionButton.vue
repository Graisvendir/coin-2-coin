<template>
    <button class="btn" @click="openTransactionWidget">
        <Icon :icon-name="IconEnum.pencil" />
    </button>
</template>

<script setup lang="ts">

    import { useModal } from 'vue-final-modal';
    import EditAccountTransactionModal from './EditAccountTransactionModal.vue';
    import { Icon, IconEnum } from '~/shared/ui';
    import { TAccountTransaction } from '~/shared/api';

    type TProps = {
        transaction: TAccountTransaction;
    }

    const { transaction } = defineProps<TProps>();

    function openTransactionWidget() {
        const { open } = useModal({
            component: EditAccountTransactionModal,
            attrs: {
                transaction,
            },
        });

        open();
    }
</script>

<style>

</style>
