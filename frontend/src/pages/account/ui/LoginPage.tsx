import { LoginForm } from '~/features/sign-in';
import { Link } from 'react-router';

export function LoginPage() {

    return <div className="login-page">
        <h1>Авторизация</h1>

        <LoginForm>
            <div>
                <Link to="/register" className="link">Регистрация</Link>
            </div>
        </LoginForm>
    </div>;
}
