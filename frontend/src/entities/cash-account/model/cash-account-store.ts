import { action, computed, observable } from 'mobx';
import { TCashAccount } from '~/shared/api';

/**
 * Стор для хранения счетов
 */
export class CashAccountsStore {
    @observable cashAccounts: TCashAccount[] = [];

    private static instance: CashAccountsStore;

    static getInstance() {
        if (!CashAccountsStore.instance) {
            CashAccountsStore.instance = new CashAccountsStore();
        }

        return CashAccountsStore.instance;
    }

    private constructor() {
    }

    @computed
    get defaultCashAccount() {
        if (!this.cashAccounts.length) {
            return undefined;
        }

        return this.cashAccounts[0];
    }

    @action
    setCashAccounts(cashAccountList: TCashAccount[]) {
        this.cashAccounts = cashAccountList;
    }
}
