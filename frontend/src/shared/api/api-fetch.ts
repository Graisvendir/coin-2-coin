import { createFetch, useFetch } from '@vueuse/core';
import { useCookies } from 'vue3-cookies';
import { backendApiBaseUrl } from '~/shared/config';

/**
 * Запрос за JWT токеном.
 * Токен сохраняется в куки.
 */
async function refreshCsrfToken() {
    await useFetch(backendApiBaseUrl + '/csrf-cookie').get().json();
}

/**
 * Получает JWT токен API.
 * Если токена нет - сделает запрос в API.
 */
async function getToken() {
    const { cookies } = useCookies();
    let token = cookies.get('XSRF-TOKEN');

    if (!token) {
        await refreshCsrfToken();
        token = cookies.get('XSRF-TOKEN');
    }

    return token;
}

/**
 * Запрос в API.
 * Запрос подпишет JWT токеном.
 */
export const apiFetch = createFetch({
    baseUrl: backendApiBaseUrl,
    options: {
        async beforeFetch({ options }) {
            const token = await getToken();

            options.headers = {
                ...options.headers,
                Accept: 'application/json',
                ['Content-Type']: 'application/json',
                ['X-Requested-With']: 'XMLHttpRequest',
                ['X-XSRF-TOKEN']: token,
            };

            return { options };
        },
    },
    fetchOptions: {
        mode: 'cors',
    },
});
