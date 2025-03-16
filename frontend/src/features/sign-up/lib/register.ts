import { ref } from 'vue';
import { AccountStatusRequest, SuccessResponse, TAccountStatus } from '~/shared/api';
import { useAccountStatusStore } from '~/entities/account-status';

export function useRegister() {
    const email = ref<string>('');
    const password = ref<string>('');

    async function register() {
        const { response } = await AccountStatusRequest.register(email.value, password.value);

        if (response.value?.ok) {
            const json = (await response.value?.json()) as SuccessResponse<TAccountStatus>;
            const { setAuthorization } = useAccountStatusStore();

            setAuthorization(json.data);
        }
    }

    return {
        email,
        password,

        register,
    };
}
