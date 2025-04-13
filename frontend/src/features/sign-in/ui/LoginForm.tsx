import { ChangeEvent, ReactNode, useCallback, useState } from 'react';
import { AccountStatusRequest, SuccessResponse, TAccountStatus } from '~/shared/api';

interface Props {
    children?: ReactNode;
}

export function LoginForm({children}: Props) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = useCallback(async (event: SubmitEvent) => {
        event.preventDefault();
        const { response } = await AccountStatusRequest.login(email, password);

        if (response.value?.ok) {
            const json = (await response.value?.json()) as SuccessResponse<TAccountStatus>;

            console.log('!!! json', json); // TODO: remove

            // TODO: тут еще должны положить в стор данные
            // accountStatusStore.setAuthorization(json.data);
        }
    }, [email, password]);

    const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }, []);
    const onChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }, []);

    return <form className="form" onSubmit={onSubmit}>
        <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={onChangeEmail}
            />
        </div>
        <div>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
            />
        </div>

        <div className="form__buttons">
            <button className="btn">
                Войти
            </button>

            {children}
        </div>
    </form>
}
