import {useApiFetch} from '~/shared/api';

export function useLogout() {

    async function logout() {
        const {response} = await useApiFetch('/logout').json().post();

        if (response.value?.ok) {
            document.location.reload();
        }
    }

    return {
        logout,
    };
}
