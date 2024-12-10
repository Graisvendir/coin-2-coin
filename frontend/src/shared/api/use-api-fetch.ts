import {createFetch, useFetch} from '@vueuse/core';
import {useCookies} from 'vue3-cookies';

export async function refreshCsrfToken() {
    await useFetch(import.meta.env.VITE_BASE_API_URL + '/sanctum/csrf-cookie').get().json();
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
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    options: {
        async beforeFetch({ options }) {
            let token = await getToken();

            options.headers['Accept'] = 'application/json';
            options.headers['Content-Type'] = 'application/json';
            options.headers['X-Requested-With'] = 'XMLHttpRequest';
            options.headers['X-XSRF-TOKEN'] = token;

            return { options };
        },
    },
    fetchOptions: {
        mode: 'cors',
    },
});
