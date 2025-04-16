import { observer } from 'mobx-react-lite';
import { AddCashAccount, EditableCashAccount } from '~/features/edit-cash-accounts';
import './CashAccountList.less';
import { CashAccountsStore, loadCashAccounts } from '~/entities/cash-account';
import { useEffect } from 'react';
import { AccountStatusStore } from '~/entities/account-status';

export const CashAccountList = observer(() => {
    const cashAccountStore = CashAccountsStore.getInstance();
    const accountStatusStore = AccountStatusStore.getInstance();

    useEffect(() => {
        if (accountStatusStore.isAuth) {
            loadCashAccounts();
        }
    }, [accountStatusStore.isAuth]);

    if (!accountStatusStore.isAuth) {
        return null;
    }

    return <div>
        <h3>Счета</h3>
        <div className="cash-account-list">
            {
                cashAccountStore.cashAccounts.map(cashAccount => {
                    return <EditableCashAccount
                        key={cashAccount.id}
                        cashAccount={cashAccount}
                    />
                })
            }
            <AddCashAccount />
        </div>
    </div>;
});

