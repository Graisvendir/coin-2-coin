import {ref} from 'vue';
import {useApiFetch, SuccessResponse, TAccountStatus} from '~/shared/api';
import {useAccountStatusStore} from '~/entities/account-status';

export function useAuth() {
    const email = ref<string>('');
    const password = ref<string>('');
    const accountStatusStore = useAccountStatusStore();

    async function auth() {
        const {response} = await useApiFetch('/login').json().post({
            email: email.value,
            password: password.value,
        });

        if (response.value?.ok) {
            const json = (await response.value?.json()) as SuccessResponse<TAccountStatus>;

            accountStatusStore.setAuthorization(json.data);
        }
    }

    return {
        email,
        password,

        auth,
    };
}
