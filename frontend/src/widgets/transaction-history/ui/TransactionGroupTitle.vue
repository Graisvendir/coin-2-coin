<template>
    <div
        v-if="formattedDate"
        class="account-transaction-group-title"
    >
        {{ formattedDate }}
    </div>
</template>

<script setup lang="ts">

    import { computed } from 'vue';
    import { DateTime } from '~/shared/utils';

    type TProps = {
        date?: DateTime;
    }

    const { date } = defineProps<TProps>();

    const formattedDate = computed(() => {
        if (!date) {
            return undefined;
        }

        return date.formatDateIfCurrentYear();
    });
</script>

<style>

.account-transaction-group-title {
    font-size: 18px;
    font-weight: bolder;
    padding: 1rem;
}
</style>
