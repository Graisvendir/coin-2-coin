import { DateTime } from '~/shared/utils';
import { useMemo } from 'react';
import './TransactionGroupTitle.less';

interface Props {
    date?: DateTime;
}

export const TransactionGroupTitle = ({ date }: Props) => {

    const formattedDate = useMemo(() => {
        if (!date) {
            return undefined;
        }

        return date.formatDateIfCurrentYear();
    }, [date]);

    if (!formattedDate) {
        return null;
    }

    return <div className="account-transaction-group-title">
        { formattedDate }
    </div>;
}
