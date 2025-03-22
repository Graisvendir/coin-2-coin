<template>
    <div class="panel">
        <div class="panel-overlay"></div>

        <EditableAccountTransaction :transaction="transaction" />
    </div>
</template>

<script setup lang="ts">
    import { TAccountTransaction } from '~/shared/api';
    import { EditableAccountTransaction } from '~/features/edit-transaction';

    type TProps = {
        transaction?: TAccountTransaction;
    }

    const { transaction } = defineProps<TProps>();

</script>

<style>

.panel-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.1;

}

.panel {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

</style>
