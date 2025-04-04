import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {TCashAccount} from '~/shared/api';

/**
 * Стор для хранения счетов
 */
export const useCashAccountsStore = defineStore('cashAccounts', () => {
    const cashAccounts = ref<TCashAccount[]>([]);

    function setCashAccounts(cashAccountList: TCashAccount[]) {
        cashAccounts.value = cashAccountList;
    }
    const defaultCashAccount = computed(() => {
        if (!cashAccounts.value.length) {
            return undefined;
        }

        return cashAccounts.value[0];
    });

    return {
        cashAccounts,
        defaultCashAccount,

        setCashAccounts,
    };
});
