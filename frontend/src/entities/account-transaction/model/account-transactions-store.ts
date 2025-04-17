import { action, makeObservable, observable } from 'mobx';

/**
 * Стор для транзакций
 */
export class AccountTransactionsStore {
    needReloadTransactionsPage = false;


    private static instance: AccountTransactionsStore;

    static getInstance() {
        if (!AccountTransactionsStore.instance) {
            AccountTransactionsStore.instance = new AccountTransactionsStore();
        }

        return AccountTransactionsStore.instance;
    }

    private constructor() {
        makeObservable(this, {
            needReloadTransactionsPage: observable,
            updateTransaction: action,
            reloaded: action,
        })
    }

    updateTransaction() {
        this.needReloadTransactionsPage = true;
    }

    reloaded() {
        this.needReloadTransactionsPage = false;
    }
}
