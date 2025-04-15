import { SuccessResponse, TCashAccount, CashAccountRequest } from '~/shared/api';
import { CashAccountsStore } from '~/entities/cash-account';


/**
 * Запрос добавления нового счета.
 * При успешном запросе, сохранит его в конец списка счетов.
 * @param name
 */
export async function addCashAccount(name: string) {
    const response = await CashAccountRequest.create(name);

    if (response.ok) {
        const json = (await response.json()) as SuccessResponse<TCashAccount>;

        CashAccountsStore.getInstance().addCashAccount(json.data);
    }
}

export async function updateCashAccount(cashAccount: TCashAccount, name: string) {
    const response = await CashAccountRequest.update(cashAccount.id, name);

    if (response.ok) {
        const json = (await response.json()) as SuccessResponse<TCashAccount>;

        CashAccountsStore.getInstance().updateCashAccount(json.data);
    }
}

export async function deleteCashAccount(id: number) {
    const response = await CashAccountRequest.delete(id);

    if (response.ok) {
        CashAccountsStore.getInstance().deleteCashAccount(id);
    }
}
