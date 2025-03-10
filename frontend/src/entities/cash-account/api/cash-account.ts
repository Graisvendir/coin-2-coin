import {SuccessResponse, TCashAccount, useApiFetch} from '~/shared/api';
import {useCashAccountStore} from '~/entities/cash-account';

/**
 * Загрузка списка счетов пользователя.
 * Сохранит список в стор.
 */
export async function loadCashAccounts() {
    const { setCashAccounts } = useCashAccountStore();

    const {response} = await useApiFetch('/cash-account').json().get();

    if (response.value?.ok) {
        const json = (await response.value?.json()) as SuccessResponse<TCashAccount[]>;

        setCashAccounts(json.data);
    }
}
