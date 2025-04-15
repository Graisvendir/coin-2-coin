import { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { TCashAccount } from '~/shared/api';
import './CashAccount.less';

interface Props {
    cashAccount: TCashAccount
    children?: ReactNode;
    nameSlot?: ReactNode;
    buttonsSlot?: ReactNode;
}

export const CashAccount = observer((props: Props) => {
    return <div className="cash-account">
        {
            props.nameSlot
                ? props.nameSlot
                : <div className="cash-account__name">
                    { props.cashAccount.name }
                </div>
        }
        <div className="cash-account__buttons">
            {props.buttonsSlot}
        </div>
    </div>;
});
