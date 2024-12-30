import {ref} from 'vue';
import {useApiFetch} from '~/shared/api/use-api-fetch.ts';

export function useRegister() {
    const email = ref<string>('');
    const password = ref<string>('');

    async function fetchRegister() {
        const {response} = await useApiFetch('/register').json().post({
            email: email.value,
            password: password.value,
        });

        return !!response.value?.ok;
    }

    return {
        email,
        password,

        fetchRegister,
    };
}
