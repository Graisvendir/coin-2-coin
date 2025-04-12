import { Splashscreen } from './Splashscreen/Splashscreen.tsx';
import './app.less';
import { Route, Routes } from 'react-router';

export function App() {
    const isReady = true;

    if (!isReady) {
        return <Splashscreen/>;
    }

    return <div className="layout">
        <div className="layout__sidebar">
            <h1>Coin-2-coin</h1>
            {/*<AccountStatus/>*/}
            {/*<CashAccountList v-if="isAuth"/>*/}
        </div>
        <div className="layout__main">
            <Routes>
                <Route index element={<div>Тут будет страница транзакций</div>} />
                    <Route path="login" element={<div>Тут будет логин</div>} />
                    <Route path="register" element={<div>Тут будет регистрация</div>} />
            </Routes>
        </div>
    </div>
}
