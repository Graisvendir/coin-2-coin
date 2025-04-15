import { observer } from 'mobx-react-lite';
import { CashAccount } from '~/entities/cash-account';
import { TCashAccount } from '~/shared/api';
import { KeyboardEvent, useCallback, useRef, useState } from 'react';
import { deleteCashAccount, updateCashAccount } from '../lib/update-cash-account.ts';
import { Icon, IconEnum } from '~/shared/ui';
import './EditableCashAccount.less';

interface Props {
    cashAccount: TCashAccount;
}

export const EditableCashAccount = observer(({ cashAccount }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [showForm, setFormVisibility] = useState(false);

    const showOrHideForm = useCallback(() => {
        setFormVisibility(!showForm);

        if (showForm) {
            inputRef.current?.focus();
        }
    }, [showForm]);

    const save = useCallback(() => {
        const newValue = inputRef.current?.value;

        if (newValue && newValue !== cashAccount.name) {
            updateCashAccount(cashAccount, newValue);
        }

        setFormVisibility(false);
    }, [cashAccount.name]);

    const deleteItem = useCallback(() => {
        deleteCashAccount(cashAccount.id);
    }, [cashAccount.id]);

    const onKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Escape') {
            setFormVisibility(false);
        }
        if (event.code === 'Enter') {
            save();
        }
    }, [save]);

    return <CashAccount
        cashAccount={cashAccount}
        nameSlot={showForm && <input
            ref={inputRef}
            name="name"
            onKeyDown={onKeyDown}
            defaultValue={cashAccount.name}
        />}
        buttonsSlot={
            showForm
                ? <div className="cash-account-buttons">
                    <button className="btn btn--small btn--no-background" onClick={deleteItem}>
                        <Icon iconName={IconEnum.delete} />
                    </button>
                    <button className="btn btn--small btn--no-background" onClick={save}>
                        <Icon iconName={IconEnum.ok} />
                    </button>
                </div>
                : <button className="btn btn--small btn--no-background" onClick={showOrHideForm}>
                    <Icon iconName={IconEnum.edit} />
                </button>
        }
    />;
});
