<template>
    <CashAccount :cash-account="cashAccount">
        <template v-if="showForm" #name>
            <input
                ref="cash-account-input"
                v-model="name"
                name="name"
                @keydown.escape="showOrHideForm"
                @keydown.enter="save"
            >
        </template>
        <template #buttons>
            <button v-if="!showForm" @click="showOrHideForm">
                ✏️
            </button>
            <div v-else class="cash-account-buttons">
                <button @click="deleteItem">
                    🗑
                </button>
                <button @click="save">
                    ✅
                </button>
            </div>
        </template>
    </CashAccount>
</template>

<script setup lang="ts">
    import { nextTick, ref, useTemplateRef } from 'vue';
    import { CashAccount } from '~/entities/cash-account';
    import { TCashAccount } from '~/shared/api';

    type TProps = {
        cashAccount: TCashAccount
    }

    const { cashAccount } = defineProps<TProps>();
    const emit = defineEmits<{
        edit: [name: string],
        delete: [],
    }>();

    const showForm = ref<boolean>(false);
    const name = ref<string>(cashAccount.name);
    const input = useTemplateRef('cash-account-input');

    function save() {
        emit('edit', name.value);
        showForm.value = false;
    }

    function deleteItem() {
        emit('delete');
    }

    function showOrHideForm() {
        showForm.value = !showForm.value;

        if (showForm.value) {
            // vue сначала рендерит список, потом позволяет обратиться к ref
            // ждем появления инпута, на который надо сфокусироваться.
            nextTick(() => {
                input.value?.focus();
            });
        }
    }
</script>

<style>
.cash-account-buttons {
    display: flex;
    gap: 1rem;
}
</style>
