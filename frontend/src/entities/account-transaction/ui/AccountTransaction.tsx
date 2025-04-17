import { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { TAccountTransaction } from '~/shared/api';
import './AccountTransaction.less';

interface Props {
    transaction: TAccountTransaction;
    children?: ReactNode;
}

export const AccountTransaction = observer(({ transaction, children }: Props) => {

    return <div className="account-transaction">
        <div className="account-transaction__name">
            { transaction.name }
        </div>
        <div className="account-transaction__amount">
            { transaction.amount } ₽
        </div>
        <div className="account-transaction__date">
            { transaction.created_at.formatTime() }
        </div>

        <div v-if="transaction.tags.length > 0" className="account-transaction__tags">
            {
                transaction.tags.map(tag => {
                    return <div key={tag.id} className="tag" style={{backgroundColor: tag.color}}>
                        { tag.name }
                    </div>;
                })
            }
        </div>
        <div className="account-transaction__buttons">
            {children}
        </div>
    </div>;
});
