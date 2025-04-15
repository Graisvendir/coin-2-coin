import { LogoutButton } from '~/features/logout';
import { AccountStatusStore } from '~/entities/account-status';
import { observer } from 'mobx-react-lite';
import './account-status.less';

export const AccountStatus = observer(() => {
    const accountStatusStore = AccountStatusStore.getInstance();

    return <div className="account-status">
        <div className="account-status__name">
            { accountStatusStore.isAuth ? accountStatusStore.account?.email : 'Неавторизованный пёс' }
        </div>
        { accountStatusStore.isAuth && <LogoutButton />}
    </div>;
});
