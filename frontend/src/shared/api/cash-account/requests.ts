import { apiFetch } from '../api-fetch.ts';

export class CashAccountRequest {
    /**
     * Загрузка списка счетов
     */
    static async load() {
        return apiFetch('/cash-account').json().get();
    }

    /**
     * Создание счета с указанным названием
     * @param name
     */
    static async create(name: string) {
        return apiFetch('/cash-account').json().post({
            name,
        });
    }
}
