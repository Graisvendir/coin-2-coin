import { useCallback } from 'react';
import { Icon, IconEnum } from '~/shared/ui';

export const AddTransactionButton = () => {
    const openTransactionWidget = useCallback(() => {

    }, []);

    return <button className="btn btn--flex" onClick={openTransactionWidget}>
        <Icon iconName={IconEnum.add} />
        <span>
            Добавить
        </span>
    </button>
};
