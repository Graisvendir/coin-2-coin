import { TAccountStatus } from '~/shared/api';
import { action, computed, makeObservable, observable } from 'mobx';

/**
 * Стор для хранения данных об аккаунте, через который пользователь авторизован
 */
export class AccountStatusStore {
    account: TAccountStatus | undefined = undefined;

    private static instance: AccountStatusStore;

    static getInstance() {
        if (!AccountStatusStore.instance) {
            AccountStatusStore.instance = new AccountStatusStore();
        }

        return AccountStatusStore.instance;
    }

    private constructor() {
        makeObservable(this, {
            account: observable,
            isAuth: computed,
            setAccount: action,
        })
    }

    get isAuth() {
        return Boolean(this.account);
    }

    setAccount(account: TAccountStatus | undefined) {
        this.account = account;
    }
}
