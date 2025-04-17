import { observer } from 'mobx-react-lite';
import { TransactionGroupTitle } from './TransactionGroupTitle.tsx';
import {
    AccountTransactionFn,
    AccountTransactionRequest,
    TAccountTransaction,
    TPaginatedAccountTransactions
} from '~/shared/api';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { AccountTransaction } from '~/entities/account-transaction';
import { AccountTransactionsStore } from '~/entities/account-transaction';
import './TransactionsHistory.less';

export const TransactionsHistory = observer(() => {
    const [transactionList, setTransactionList] = useState<TAccountTransaction[]>([]);
    const [moreLink, setMoreLink] = useState<string | undefined>(undefined);

    const load = useCallback(async (link?: string) => {
        const response = await AccountTransactionRequest.load(link);

        if (!response.ok) {
            return;
        }

        const jsonResponse = (await response.json()) as TPaginatedAccountTransactions;

        if (!jsonResponse.data) {
            return;
        }

        const transactionsFromResponse = jsonResponse.data.map(item => AccountTransactionFn(item));

        const newTransactionsState = link
            ? [
                ...transactionList,
                ...transactionsFromResponse,
            ]
            : transactionsFromResponse;

        setTransactionList(newTransactionsState);
        setMoreLink(jsonResponse.links.next);
    }, [transactionList]);

    const loadNext = useCallback(async (event?: MouseEvent) => {
        event?.preventDefault();
        load(moreLink);
    }, [load, moreLink]);

    /**
     * Отдаст дату, которую будем выводить для группировки транзакций по дням
     *
     * @param transaction
     * @param transactionIndexInList
     */
    const getDayGroupDate = useCallback((transaction: TAccountTransaction, transactionIndexInList: number) => {
        if (transactionIndexInList === 0) {
            return transaction.created_at;
        }

        const formatString = 'YYYY-MM-DD';
        const transactionDate = transaction.created_at.format(formatString);
        const previousTransaction = transactionList[transactionIndexInList - 1];
        const previousTransactionDate = previousTransaction.created_at.format(formatString);

        return transactionDate === previousTransactionDate
            ? undefined
            : transaction.created_at;
    }, [transactionList]);

    const accountTransactionsStore = AccountTransactionsStore.getInstance();

    useEffect(() => {
        load();
    }, []);

    useEffect(() => {
        if (accountTransactionsStore.needReloadTransactionsPage) {
            load();
            accountTransactionsStore.reloaded();
        }
    }, [load, accountTransactionsStore.needReloadTransactionsPage]);

    return <div className="account-transaction-list">
        {
            transactionList.map((transaction, index) => {
                return <div key={transaction.id}>
                    <TransactionGroupTitle date={getDayGroupDate(transaction, index)} />
                    <AccountTransaction transaction={transaction}>
                        <>
                            {/*<DeleteTransactionButton :transaction="transaction as TAccountTransaction" />*/}
                            {/*<EditTransactionButton :transaction="transaction as TAccountTransaction" />*/}
                        </>
                    </AccountTransaction>
                </div>
            })
        }

        <a
            v-if="moreLink"
            href={moreLink}
            onClick={loadNext}
        >
            Следующие
        </a>
    </div>;
});
