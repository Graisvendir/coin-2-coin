import { Link } from 'react-router';
import { RegisterForm } from '~/features/sign-up';

export function RegisterPage() {

    return <div className="register-page">
        <h1>Регистрация</h1>

        <RegisterForm>
            <div>
                <Link to="/login" className="link">Авторизация</Link>
            </div>
        </RegisterForm>
    </div>;
}
