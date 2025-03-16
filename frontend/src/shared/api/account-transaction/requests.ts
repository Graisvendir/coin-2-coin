import { apiFetch } from '../api-fetch.ts';

export class AccountTransactionRequest {
    /**
     * Загрузка списка транзакций
     */
    static async load(link = '/account-transaction') {
        return apiFetch(link).json().get();
    }
}
