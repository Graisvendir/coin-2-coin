import { ReactNode } from 'react';
import Modal from 'react-modal';
import { Icon, IconEnum } from '~/shared/ui';
import './CustomModal.less';

interface Props {
    title?: string;
    children: ReactNode;
    show: boolean;
    onClose: () => void;
}

export const CustomModal = (props: Props) => {

    return <Modal
        isOpen={props.show}
        onRequestClose={props.onClose}
    >
        <div className="modal__header">
            <h3 className="modal__header-title">
                { props.title }
            </h3>
            <button
                className="btn btn--no-background modal__header-close-button"
                onClick={props.onClose}
            >
                <Icon iconName={IconEnum.close} />
            </button>
        </div>
        {props.children}
    </Modal>
}

