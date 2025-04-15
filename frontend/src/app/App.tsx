import { Splashscreen } from './Splashscreen/Splashscreen.tsx';
import './app.less';
import { Route, Routes, useNavigate } from 'react-router';
import { LoginPage, RegisterPage } from '~/pages/account';
import { useEffect, useState } from 'react';
import { AccountStatusStore, checkAccountStatus } from '~/entities/account-status';
import { AccountStatus } from '~/widgets/account-status';

export function App() {
    const [isReady, setReady] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        async function init() {
            if (isReady) {
                return;
            }

            await checkAccountStatus();

            // если после проверки оказалось, что пользователь не авторизован - переводим в логин
            if (!AccountStatusStore.getInstance().isAuth) {
                navigate('/login');
            }

            setReady(true);
        }

        init();
    }, [isReady, navigate]);

    if (!isReady) {
        return <Splashscreen/>;
    }

    return <div className="layout">
        <div className="layout__sidebar">
            <h1>Coin-2-coin</h1>
            <AccountStatus />
            {/*<CashAccountList v-if="isAuth"/>*/}
        </div>
        <div className="layout__main">
            <Routes>
                <Route index element={<div>Ну шо, аниме?</div>} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Routes>
        </div>
    </div>
}
