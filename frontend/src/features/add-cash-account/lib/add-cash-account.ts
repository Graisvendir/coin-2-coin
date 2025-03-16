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
