import './Transactions.less';
import { EditAccountTransactionForm } from '~/features/edit-transaction';
import { TransactionsHistory } from '~/widgets/transaction-history';

export const Transactions = () => {
    return <div className="transactions-page">
        <h2>История транзакций</h2>

        <EditAccountTransactionForm />

        <TransactionsHistory />

        {/*<div className="transactions-page__float-button">*/}
        {/*    <AddTransactionButton />*/}
        {/*</div>*/}
    </div>;
}
