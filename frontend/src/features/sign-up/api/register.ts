import {ref} from 'vue';
import {useApiFetch} from '~/shared/api/use-api-fetch.ts';
import {SuccessResponse} from '~/shared/api/response.ts';
import {TAccountStatus} from '~/shared/api/account-status.ts';
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
            const accountStatusStore = useAccountStatusStore();

            accountStatusStore.setAuthorization(json.data);
        }
    }

    return {
        email,
        password,

        register,
    };
}
