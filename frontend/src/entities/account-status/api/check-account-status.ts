import { AccountStatusRequest, SuccessResponse, TAccountStatus } from '~/shared/api';
import { useAccountStatusStore } from '~/entities/account-status';

/**
 * Проверка аккаунта пользователя.
 * Запросим аккаунт с бэкенда.
 * Сохраним его в стор.
 */
export async function checkAccountStatus() {
    const { setAuthorization } = useAccountStatusStore();

    const { response } = await AccountStatusRequest.load();

    if (response.value?.ok) {
        const json = (await response.value?.json()) as SuccessResponse<TAccountStatus>;

        setAuthorization(json.data);
    }
}
