<template>
    <div class="account-transaction">
        <div class="account-transaction__name">
            {{ transaction.name }}
        </div>
        <div class="account-transaction__amount">
            {{ transaction.amount }} ₽
        </div>
        <div class="account-transaction__date">
            {{ formattedCreatedAt }}
        </div>
        <div class="account-transaction__tags">
            <div v-for="tag in transaction.tags" :key="tag.id" class="tag" :style="{'background-color': tag.color}">
                {{ tag.name }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import {TAccountTransaction} from '~/shared/api';
    import {computed} from 'vue';

    type TProps = {
        transaction: TAccountTransaction;
    }

    const { transaction } = defineProps<TProps>();
    const formattedCreatedAt = computed(() => {
        return transaction.created_at.toLocaleDateString(
            'ru',
            {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            },
        );
    });

</script>


<style>
.account-transaction {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
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
