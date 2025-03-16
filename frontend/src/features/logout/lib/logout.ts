import { AccountStatusRequest } from '~/shared/api';

export function useLogout() {

    async function logout() {
        const {response} = await AccountStatusRequest.logout();

        if (response.value?.ok) {
            document.location.reload();
        }
    }

    return {
        logout,
    };
}
