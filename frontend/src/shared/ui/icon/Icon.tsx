import { IconEnum } from '~/shared/ui';
import './Icon.less';

interface Props {
    iconName: IconEnum;
}

export function Icon({ iconName }: Props) {
    return <svg className={`icon icon--${iconName}`}>
        <use href={`/assets/icon-sprite.svg#${iconName}`} />
    </svg>
}

