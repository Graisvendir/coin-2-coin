import { defineStore } from 'pinia';
import {TAccountStatus} from '~/shared/api/account-status.ts';

type AccountStatus = {
    /**
     * email, через который пользователь авторизовался
     */
    email: string | undefined;
};

/**
 * Стор для хранения данных об аккаунте, через который пользователь авторизован
 */
export const useAccountStatusStore = defineStore('accountStatus', {
    state: (): AccountStatus => {
        return {
            email: undefined,
        };
    },
    actions: {
        /**
         * Установить аккаунт пользователя в стор.
         * @param accountStatus
         */
        setAuthorization(accountStatus: TAccountStatus) {
            this.email = accountStatus.email;
        },
    },
});
