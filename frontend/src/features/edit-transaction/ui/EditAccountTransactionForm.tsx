import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import './EditAccountTransactionForm.less';
import { TAccountTransaction } from '~/shared/api';
import { DateTime } from '~/shared/utils';
import { CashAccountsStore } from '~/entities/cash-account';
import { observer } from 'mobx-react-lite';
import {
    addAccountTransaction,
    updateAccountTransaction
} from '~/features/edit-transaction/lib/account-transaction-controller.ts';
import { AccountTransactionsStore } from '~/entities/account-transaction';

interface Props {
    transaction?: TAccountTransaction;
}

export const EditAccountTransactionForm = observer(({transaction}: Props) => {
    const cashAccountStore = CashAccountsStore.getInstance();
    const accountTransactionsStore = AccountTransactionsStore.getInstance();

    const [editedTransaction, setEditedTransaction] = useState({
        name: transaction?.name ?? '',
        created_at: (transaction?.created_at || new DateTime()).format('YYYY-MM-DDTHH:mm:ss'),
        amount: transaction?.amount || 0,
        cash_account_id: transaction?.cash_account_id || cashAccountStore.defaultCashAccount?.id || 0
    });

    const save = useCallback(async (event: FormEvent) => {
        event.preventDefault();

        const response = transaction
            ? await updateAccountTransaction(transaction, editedTransaction)
            : await addAccountTransaction(editedTransaction);

        if (response.ok) {
            accountTransactionsStore.updateTransaction();
        }
    }, [editedTransaction]);

    const onChange = useCallback((field: string) => {
        return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            setEditedTransaction({
                ...editedTransaction,
                [field]: event.target.value
            })
        }
    }, [editedTransaction]);

    return <form className="transaction-form" onSubmit={save}>
        <div>
            <input
                name="name"
                placeholder="Ну и куда ты бабки потратил?"
                required
                defaultValue={editedTransaction.name}
                onChange={onChange('name')}
            />
        </div>
        <div>
            <input
                name="created_at"
                type="datetime-local"
                placeholder="А когда?"
                required
                defaultValue={editedTransaction.created_at}
                onChange={onChange('created_at')}

            />
        </div>
        <div>
            <input
                name="amount"
                type="number"
                placeholder="Сколько-сколько?"
                required
                defaultValue={editedTransaction.amount}
                onChange={onChange('amount')}
            />
        </div>
        <div>
            <select
                name="cash_account_id"
                required
                defaultValue={editedTransaction.cash_account_id}
                onChange={onChange('cash_account_id')}
            >
                {
                    cashAccountStore.cashAccounts.map(cashAccount => {
                        return <option
                            key={cashAccount.id}
                            value={cashAccount.id}
                        >
                            { cashAccount.name }
                        </option>
                    })
                }

            </select>
        </div>
        <button className="btn" type="submit">
            Сохранить
        </button>
    </form>;
});
