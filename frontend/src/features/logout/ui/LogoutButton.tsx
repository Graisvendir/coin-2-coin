import { useLogout } from '../lib/logout.ts';
import { useCallback } from 'react';


export function LogoutButton() {
    const { logout } = useLogout();

    const onClick = useCallback(async () => {
        await logout();
    }, [logout]);

    return <button className="btn btn--small" onClick={onClick}>
        Выйти
    </button>;
}
