import { defineStore } from 'pinia';
import { TAccountStatus } from '~/shared/api';
import { computed, ref } from 'vue';

/**
 * Стор для хранения данных об аккаунте, через который пользователь авторизован
 */
export const useAccountStatusStore = defineStore('accountStatus', () => {
    const account = ref<TAccountStatus | null>(null);
    const isAuth = computed(() => {
        return account.value !== null;
    });

    function setAuthorization(accountStatus: TAccountStatus | null) {
        account.value = accountStatus;
    }

    return {
        account,
        isAuth,

        setAuthorization,
    };
});
