import {createFetch, useFetch} from '@vueuse/core';
import {useCookies} from 'vue3-cookies';
import {backendApiBaseUrl} from '~/shared/config';

export async function refreshCsrfToken() {
    await useFetch(backendApiBaseUrl + '/sanctum/csrf-cookie').get().json();
}

export async function getToken() {
    const {cookies} = useCookies();
    let token = cookies.get('XSRF-TOKEN');

    if (!token) {
        await refreshCsrfToken();
        token = cookies.get('XSRF-TOKEN');
    }

    return token;
}

export const useApiFetch = createFetch({
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
