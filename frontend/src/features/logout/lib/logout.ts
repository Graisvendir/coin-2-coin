import { AccountStatusRequest } from '~/shared/api';
import { useCallback } from 'react';

export function useLogout() {

    const logout = useCallback(async () => {
        const response = await AccountStatusRequest.logout();

        if (response.ok) {
            document.location.reload();
        }
    }, []);

    return {
        logout,
    };
}
