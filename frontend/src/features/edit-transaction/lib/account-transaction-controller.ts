import {
    TAccountTransaction,
    TSaveAccountTransaction,
    AccountTransactionRequest,
} from '~/shared/api';


/**
 * Запрос добавления нового счета.
 * При успешном запросе, сохранит его в конец списка счетов.
 */
export async function addAccountTransaction(data: TSaveAccountTransaction) {
    const { response } = await AccountTransactionRequest.create(data);

    if (response.value?.ok) {
        // TODO: а и что мы тут сделаем?
        // если фильтры всключены? А пиганиация? Как будто заново запрашивать список?
        // const json = (await response.value?.json()) as SuccessResponse<TCashAccount>;
        // const cashAccountsStore = useCashAccountsStore();
        //
        // cashAccountsStore.cashAccounts.push(json.data);
    }
}

export async function updateAccountTransaction(accountTransaction: TAccountTransaction, data: TSaveAccountTransaction) {
    const { response } = await AccountTransactionRequest.update(accountTransaction.id, data);

    if (response.value?.ok) {
        // cashAccount.name = name;
    }
}

export async function deleteAccountTransaction(id: number) {
    const { response } = await AccountTransactionRequest.delete(id);

    if (response.value?.ok) {
        // TODO: и что? Стора то еще нет...
        // const cashAccountsStore = useCashAccountsStore();
        //
        // cashAccountsStore.setCashAccounts(
        //     cashAccountsStore.cashAccounts.filter(item => item.id !== id),
        // );
    }
}
