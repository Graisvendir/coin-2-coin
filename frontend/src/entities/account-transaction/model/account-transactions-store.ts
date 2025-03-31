import { defineStore } from 'pinia';
import { ref } from 'vue';

/**
 * Стор для хранения данных о транзакциях
 */
export const useAccountTransactionStore = defineStore('accountTransactions', () => {
    const needReload = ref<boolean>(false);

    function updateTransaction() {
        needReload.value = true;
    }

    function reloaded() {
        needReload.value = false;
    }

    return {
        needReload,
        updateTransaction,
        reloaded,
    };
});
