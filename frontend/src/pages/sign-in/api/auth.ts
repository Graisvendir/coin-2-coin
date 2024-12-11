import {ref} from 'vue';
import {useApiFetch} from '~/shared/api/use-api-fetch.ts';

export function useAuth() {
    const email = ref<string>('');
    const password = ref<string>('');

    async function fetchAuth() {
        const {response} = await useApiFetch('/login').json().post({
            email: email.value,
            password: password.value,
        });

        return !!response.value?.ok;
    }

    return {
        email,
        password,

        fetchAuth,
    };
}
