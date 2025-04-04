<template>
    <div class="account-transaction">
        <div class="account-transaction__name">
            {{ transaction.name }}
        </div>
        <div class="account-transaction__amount">
            {{ transaction.amount }} ₽
        </div>
        <div class="account-transaction__date">
            {{ transaction.created_at.format('HH:mm DD-MM-YYYY') }}
        </div>
        <div class="account-transaction__tags">
            <div v-for="tag in transaction.tags" :key="tag.id" class="tag" :style="{'background-color': tag.color}">
                {{ tag.name }}
            </div>
        </div>
        <div class="account-transaction__buttons">
            <slot name="buttons" />
        </div>
    </div>
</template>

<script setup lang="ts">

    import {TAccountTransaction} from '~/shared/api';

    type TProps = {
        transaction: TAccountTransaction;
    }

    const { transaction } = defineProps<TProps>();

</script>


<style>
.account-transaction {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    gap: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: border-box;
}

.account-transaction__amount {
    text-align: right;
}

.account-transaction__tags {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
}

.tag {
    border-radius: 0.5rem;
}
</style>
