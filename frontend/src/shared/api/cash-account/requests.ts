import { apiFetch } from '../api-fetch.ts';

export class CashAccountRequest {
    /**
     * Загрузка списка счетов
     */
    static async load() {
        return apiFetch('/cash-account');
    }

    /**
     * Создание счета с указанным названием
     * @param name
     */
    static async create(name: string) {
        return apiFetch('/cash-account', {
            method: 'POST',
            body: JSON.stringify({
                name,
            })
        });
    }

    static async update(id: number, name: string) {
        return apiFetch(`/cash-account/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name,
            })
        });
    }

    static async delete(id: number) {
        return apiFetch(`/cash-account/${id}`, {
            method: 'DELETE',
        });
    }
}
