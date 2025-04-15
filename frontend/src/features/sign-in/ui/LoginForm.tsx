import { ChangeEvent, FormEvent, ReactNode, useCallback, useState } from 'react';
import { AccountStatusRequest, SuccessResponse, TAccountStatus } from '~/shared/api';
import { AccountStatusStore } from '~/entities/account-status';
import { useNavigate } from 'react-router';

interface Props {
    children?: ReactNode;
}

export function LoginForm({children}: Props) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await AccountStatusRequest.login(email, password);

        if (response.ok) {
            const json = (await response.json()) as SuccessResponse<TAccountStatus>;

            AccountStatusStore.getInstance().setAccount(json.data);
            navigate('/');
        }
    }, [email, password, navigate]);

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
