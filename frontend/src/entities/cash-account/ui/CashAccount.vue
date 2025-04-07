<template>
    <div class="cash-account">
        <slot name="name">
            <div class="cash-account__name">
                {{ cashAccount.name }}
            </div>
        </slot>
        <div class="cash-account__buttons">
            <slot name="buttons" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { TCashAccount } from '~/shared/api';

    type TProps = {
        cashAccount: TCashAccount
    }

    const { cashAccount } = defineProps<TProps>();

</script>

<style>
.cash-account {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    gap: 1rem;
}

.cash-account__name {
    overflow: hidden;
}

.cash-account__buttons {
    font-size: 18px;
}
</style>
