import {useApiFetch} from '~/shared/api/use-api-fetch.ts';
import {useAccountStatusStore} from '~/entities/account-status';
import {TAccountStatus} from '~/shared/api/account-status.ts';
import {SuccessResponse} from '~/shared/api/response.ts';

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
