import { apiFetch } from '../api-fetch.ts';
import { TSaveAccountTransaction } from '~/shared/api';

export class AccountTransactionRequest {
    /**
     * Загрузка списка транзакций
     */
    static async load(link = '/account-transaction') {
        return apiFetch(link).json().get();
    }

    /**
     * Создание транзакции
     */
    static async create(data: TSaveAccountTransaction) {
        return apiFetch('/account-transaction').json().post(data);
    }

    /**
     * Обновление транзакции
     */
    static async update(id: number, data: TSaveAccountTransaction) {
        return apiFetch(`/account-transaction/${id}`).json().put(data);
    }

    /**
     * Удаление транзакции
     */
    static async delete(id: number) {
        return apiFetch(`/account-transaction/${id}`).json().delete();
    }
}
