import { SuccessResponse, TCashAccount, CashAccountRequest } from '~/shared/api';
import { useCashAccountsStore } from '~/entities/cash-account';

/**
 * Загрузка списка счетов пользователя.
 * Сохранит список в стор.
 */
export async function loadCashAccounts() {
    const { setCashAccounts } = useCashAccountsStore();

    const { response } = await CashAccountRequest.load();

    if (response.value?.ok) {
        const json = (await response.value?.json()) as SuccessResponse<TCashAccount[]>;

        setCashAccounts(json.data);
    }
}
