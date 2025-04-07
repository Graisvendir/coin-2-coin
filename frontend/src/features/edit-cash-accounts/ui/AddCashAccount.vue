<template>
    <div class="add-cash-account">
        <button v-if="!showForm" class="btn btn--flex" @click="showOrHideForm">
            <Icon :icon-name="IconEnum.add" />
            <span>
                Добавить
            </span>
        </button>
        <form
            v-else
            class="add-cash-account__form"
            @submit.prevent="create"
            @keydown="onEscape"
        >
            <input
                ref="cash-account-input"
                v-model="name"
                class="add-cash-account__input"
                name="name"
            >

            <button class="btn">
                Сохранить
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { nextTick, ref, useTemplateRef } from 'vue';
    import { addCashAccount } from '../lib/update-cash-account.ts';
    import { Icon, IconEnum } from '~/shared/ui';

    const showForm = ref<boolean>(false);
    const name = ref<string>('');
    const input = useTemplateRef('cash-account-input');

    function create() {
        addCashAccount(name.value);
        showForm.value = false;
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

    function onEscape(event: KeyboardEvent) {
        if (event.code === 'Escape') {
            showOrHideForm();
        }
    }
</script>

<style>
.add-cash-account {
    padding: 1rem 0;
}

.add-cash-account__form {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.add-cash-account__input {
    flex-grow: 1;
}
</style>
