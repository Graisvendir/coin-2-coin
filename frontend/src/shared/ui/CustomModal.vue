<template>
    <VueFinalModal
        class="modal"
        esc-to-close
        swipe-to-close="down"
        @update:model-value="val => toggleModal(val)"
    >
        <div class="modal__header">
            <h3 class="modal__header-title">
                {{ title }}
            </h3>
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

.vfm {
    display: flex;
    align-items: center;
    justify-content: center;
}

.vfm__overlay {
    background-color: var(--color-shadow);
}

.vfm__content {
    display: flex;
    flex-direction: column;
    z-index: 20;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: .5rem;
    padding: 1rem;
    gap: 1rem;
}

</style>
