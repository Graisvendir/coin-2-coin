import { SuccessResponse, TCashAccount, CashAccountRequest } from '~/shared/api';
import { CashAccountsStore } from '~/entities/cash-account';

/**
 * Загрузка списка счетов пользователя.
 * Сохранит список в стор.
 */
export async function loadCashAccounts() {
    const response = await CashAccountRequest.load();

    if (response.ok) {
        const json = (await response.json()) as SuccessResponse<TCashAccount[]>;

        CashAccountsStore.getInstance().setCashAccounts(json.data);
    }
}
