import { defineStore } from 'pinia';
import {ref} from 'vue';
import {TCashAccount} from '~/shared/api';

/**
 * Стор для хранения счетов
 */
export const useCashAccountStore = defineStore('cashAccount', () => {
    const cashAccounts = ref<TCashAccount[]>([]);

    function setCashAccounts(cashAccountList: TCashAccount[]) {
        cashAccounts.value = cashAccountList;
    }

    return {
        cashAccounts,

        setCashAccounts,
    };
});
