<template>
    <VueFinalModal
        class="modal"
        content-class="modal__content"
        esc-to-close
        swipe-to-close="down"
        @update:model-value="val => toggleModal(val)"
    >
        <div class="modal__header">
            <h3 class="modal__header-title">
                {{ title }}
            </h3>
            <button class="btn btn--no-background modal__header-close-button" @click="toggleModal(false)">
                <Icon :icon-name="IconEnum.close" />
            </button>
        </div>
        <slot />
    </VueFinalModal>
</template>

<script setup lang="ts">

    import { VueFinalModal } from 'vue-final-modal';
    import { provide } from 'vue';
    import { closeModelInjectionKey } from '~/shared/ui/custom-modal/types.ts';
    import { IconEnum, Icon } from '~/shared/ui';

    type TProps = {
        show?: boolean;
        title?: string;
    }

    const { title } = defineProps<TProps>();
    const emit = defineEmits<{
        (e: 'update:modelValue', modelValue: boolean): void
    }>();

    function toggleModal(openedOrClosed: boolean) {
        emit('update:modelValue', openedOrClosed);
    }

    provide(closeModelInjectionKey, () => toggleModal(false));

</script>

<style>
.modal {
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal__content {
    display: flex;
    flex-direction: column;
    z-index: 20;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: .5rem;
    padding: 1rem;
    gap: 1rem;
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
