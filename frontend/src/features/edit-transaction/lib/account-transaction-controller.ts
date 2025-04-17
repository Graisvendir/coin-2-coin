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
    const response = await AccountTransactionRequest.create(data);

    return response;
}

export async function updateAccountTransaction(accountTransaction: TAccountTransaction, data: TSaveAccountTransaction) {
    const response = await AccountTransactionRequest.update(accountTransaction.id, data);

    return response;
}

export async function deleteAccountTransaction(id: number) {
    const response = await AccountTransactionRequest.delete(id);

    return response;
}
