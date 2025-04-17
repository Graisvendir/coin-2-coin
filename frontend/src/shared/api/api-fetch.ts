import { backendApiBaseUrl } from '~/shared/config';
import { Cookie } from '../utils';

/**
 * Запрос за JWT токеном.
 * Токен сохраняется в куки.
 */
async function refreshCsrfToken() {
    await fetch(backendApiBaseUrl + '/csrf-cookie');
}

/**
 * Получает JWT токен API.
 * Если токена нет - сделает запрос в API.
 */
async function getToken() {
    let token = Cookie.parse().get('XSRF-TOKEN');

    if (!token) {
        await refreshCsrfToken();
        token = Cookie.parse().get('XSRF-TOKEN');
    }

    return token;
}

/**
 * Запрос в API.
 * Запрос подпишет JWT токеном.
 */
export async function apiFetch(url: string, options?: RequestInit) {
    const token = await getToken();

    const finalUrl = url.indexOf(backendApiBaseUrl) === -1
        ? backendApiBaseUrl + url
        : url;

    return fetch(
        finalUrl,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': token,
            },
            mode: 'cors',
            ...options,
        }
    )
}
