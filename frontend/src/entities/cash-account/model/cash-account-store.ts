import { action, computed, makeObservable, observable } from 'mobx';
import { TCashAccount } from '~/shared/api';

/**
 * Стор для хранения счетов
 */
export class CashAccountsStore {
    cashAccounts: TCashAccount[] = [];

    private static instance: CashAccountsStore;

    static getInstance() {
        if (!CashAccountsStore.instance) {
            CashAccountsStore.instance = new CashAccountsStore();
        }

        return CashAccountsStore.instance;
    }

    private constructor() {
        makeObservable(this, {
            cashAccounts: observable,
            defaultCashAccount: computed,
            setCashAccounts: action,
            addCashAccount: action,
        })
    }

    get defaultCashAccount() {
        if (!this.cashAccounts.length) {
            return undefined;
        }

        return this.cashAccounts[0];
    }

    setCashAccounts(cashAccountList: TCashAccount[]) {
        this.cashAccounts = cashAccountList;
    }

    addCashAccount(cashAccount: TCashAccount) {
        this.cashAccounts = this.cashAccounts.concat([cashAccount]);
    }

    updateCashAccount(cashAccountToUpdate: TCashAccount) {
        const index = this.cashAccounts.findIndex(cashAccount => cashAccount.id === cashAccountToUpdate.id);

        if (index === -1) {
            return;
        }

        this.cashAccounts = [
            ...this.cashAccounts.slice(0, index),
            cashAccountToUpdate,
            ...this.cashAccounts.slice(index + 1),
        ];
    }

    deleteCashAccount(id: number) {
        this.cashAccounts = this.cashAccounts.filter(item => item.id !== id);
    }
}
