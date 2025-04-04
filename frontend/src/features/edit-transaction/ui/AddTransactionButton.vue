<template>
    <button class="btn btn--flex" @click="openTransactionWidget">
        <Icon :icon-name="IconEnum.plus" />
        <span>
            Добавить
        </span>
    </button>
</template>

<script setup lang="ts">

    import { useModal } from 'vue-final-modal';
    import EditAccountTransactionModal from './EditAccountTransactionModal.vue';
    import { Icon, IconEnum } from '~/shared/ui';

    function openTransactionWidget() {
        const { open } = useModal({
            component: EditAccountTransactionModal,
        });

        open();
    }
</script>

<style>

</style>
