import { AccountStatusRequest, SuccessResponse, TAccountStatus } from '~/shared/api';
import { AccountStatusStore } from '../model/account-status-store.ts';

/**
 * Проверка аккаунта пользователя.
 * Запросим аккаунт с бэкенда.
 * Сохраним его в стор.
 */
export async function checkAccountStatus() {
    const accountStatusStore = AccountStatusStore.getInstance();

    const response = await AccountStatusRequest.load();

    if (response.ok) {
        const json = (await response.json()) as SuccessResponse<TAccountStatus>;

        accountStatusStore.setAccount(json.data);
    }
}
