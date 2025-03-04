import {ref} from 'vue';
import {useApiFetch, SuccessResponse, TAccountStatus} from '~/shared/api';
import {useAccountStatusStore} from '~/entities/account-status';

export function useRegister() {
    const email = ref<string>('');
    const password = ref<string>('');

    async function register() {
        const {response} = await useApiFetch('/register').json().post({
            email: email.value,
            password: password.value,
        });

        if (response.value?.ok) {
            const json = (await response.value?.json()) as SuccessResponse<TAccountStatus>;
            const {setAuthorization} = useAccountStatusStore();

            setAuthorization(json.data);
        }
    }

    return {
        email,
        password,

        register,
    };
}
