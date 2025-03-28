import { apiFetch } from '../api-fetch.ts';

export class AccountStatusRequest {
    /**
     * Загрузка статуса аккаунта
     */
    static async load() {
        return apiFetch('/account-status').json().get();
    }

    /**
     * Регистрация пользователя по логину и паролю.
     * @param email
     * @param password
     */
    static async register(email: string, password: string) {
        return apiFetch('/register').json().post({
            email,
            password,
        });
    }

    /**
     * Авторизация пользователя по логину и паролю.
     * @param email
     * @param password
     */
    static async login(email: string, password: string) {
        return apiFetch('/login').json().post({
            email,
            password,
        });
    }

    /**
     * Разавторизация пользователя
     */
    static async logout() {
        return apiFetch('/logout').json().post();
    }
}
