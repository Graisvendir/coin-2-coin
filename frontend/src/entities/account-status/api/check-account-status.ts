import {SuccessResponse, TAccountStatus, useApiFetch} from '~/shared/api';
import {useAccountStatusStore} from '~/entities/account-status';

/**
 * Проверка аккаунта пользователя.
 * Запросим аккаунт с бэкенда.
 * Сохраним его в стор.
 */
export async function checkAccountStatus() {
    const accountStatusStore = useAccountStatusStore();

    const {response} = await useApiFetch('/account-status').json().get();

    if (response.value?.ok) {
        const json = (await response.value?.json()) as SuccessResponse<TAccountStatus>;

        accountStatusStore.setAuthorization(json.data);
    }
}
