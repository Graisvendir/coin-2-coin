<template>
    <button class="btn" @click="openTransactionWidget">
        ➕ Добавить
    </button>
</template>

<script setup lang="ts">

    import { useModal } from 'vue-final-modal';
    import EditAccountTransactionModal from './EditAccountTransactionModal.vue';

    function openTransactionWidget() {
        const { open } = useModal({
            component: EditAccountTransactionModal,
        });

        open();
    }
</script>

<style>

</style>
