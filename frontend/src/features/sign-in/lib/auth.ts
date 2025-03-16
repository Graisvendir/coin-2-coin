import { ref } from 'vue';
import { AccountStatusRequest, SuccessResponse, TAccountStatus } from '~/shared/api';
import { useAccountStatusStore } from '~/entities/account-status';

export function useAuth() {
    const email = ref<string>('');
    const password = ref<string>('');
    const accountStatusStore = useAccountStatusStore();

    async function auth() {
        const { response } = await AccountStatusRequest.login(email.value, password.value);

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
