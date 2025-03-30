<template>
    <VueFinalModal
        class="modal"
        content-class="flex flex-col p-4 bg-white dark:bg-black rounded border border-gray-100 dark:border-gray-800"

        @update:model-value="val => toggleModal(val)"
    >
        <div class="modal__header">
            <h1 v-if="title" class="modal__header-title">
                {{ title }}
            </h1>
            <button class="modal__header-close-button" @click="toggleModal(false)">
                ❌
            </button>
        </div>
        <slot />
    </VueFinalModal>
</template>

<script setup lang="ts">

    import { VueFinalModal } from 'vue-final-modal';

    type TProps = {
        title?: string;
    }

    const { title } = defineProps<TProps>();
    const emit = defineEmits<{
        (e: 'update:modelValue', modelValue: boolean): void
    }>();

    function toggleModal(openedOrClosed: boolean) {
        emit('update:modelValue', openedOrClosed);
    }

</script>

<style>
.modal {
    min-width: 40rem;
}

.modal__header {
    display: flex;
}

.modal__header-title {
    flex-grow: 1;
}

.modal__header-close-button {
    display: block;
    flex-shrink: 0;
}
</style>
