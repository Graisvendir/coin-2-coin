import { SuccessResponse, TCashAccount, CashAccountRequest } from '~/shared/api';
import { useCashAccountsStore } from '~/entities/cash-account';


/**
 * Запрос добавления нового счета.
 * При успешном запросе, сохранит его в конец списка счетов.
 * @param name
 */
export async function addCashAccount(name: string) {
    const { response } = await CashAccountRequest.create(name);

    if (response.value?.ok) {
        const json = (await response.value?.json()) as SuccessResponse<TCashAccount>;
        const cashAccountsStore = useCashAccountsStore();

        cashAccountsStore.cashAccounts.push(json.data);
    }
}

export async function updateCashAccount(cashAccount: TCashAccount, name: string) {
    const { response } = await CashAccountRequest.update(cashAccount.id, name);

    if (response.value?.ok) {
        cashAccount.name = name;
    }
}

export async function deleteCashAccount(id: number) {
    const { response } = await CashAccountRequest.delete(id);

    if (response.value?.ok) {
        const cashAccountsStore = useCashAccountsStore();

        cashAccountsStore.setCashAccounts(
            cashAccountsStore.cashAccounts.filter(item => item.id !== id),
        );
    }
}
