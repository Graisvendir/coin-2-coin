import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import {
    addCashAccount,
} from '../lib/update-cash-account.ts';
import { Icon, IconEnum } from '~/shared/ui';
import './AddCashAccount.less';

export function AddCashAccount() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [showForm, setFormVisibility] = useState(false);

    const showOrHideForm = useCallback(() => {
        setFormVisibility(!showForm);
    }, [showForm]);

    const onSubmit = useCallback(() => {
        const newValue = inputRef.current?.value;

        if (newValue) {
            addCashAccount(newValue);
        }

        setFormVisibility(false);
    }, []);

    const onKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Escape') {
            setFormVisibility(false);
        }
        if (event.code === 'Enter') {
            onSubmit();
        }
    }, [onSubmit]);

    useEffect(() => {
        if (showForm && inputRef.current) {
            inputRef.current?.focus();
        }
    }, [inputRef, showForm]);

    return <div className="add-cash-account">
        {
            showForm
                ? <form
                    className="add-cash-account__form"
                    onSubmit={onSubmit}
                >
                    <input
                        ref={inputRef}
                        className="add-cash-account__input"
                        name="name"
                        onKeyDown={onKeyDown}
                    />

                    <button className="btn">
                        Сохранить
                    </button>
                </form>
                : <button className="btn btn--flex" onClick={showOrHideForm}>
                    <Icon iconName={IconEnum.add} />
                    <span>
                        Добавить
                    </span>
                </button>
        }
    </div>;
}

