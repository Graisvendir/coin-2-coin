import {createRouter, createWebHistory} from 'vue-router';
import { LoginPage, RegisterPage } from '../pages/account';
import {useAccountStatusStore} from '~/entities/account-status';
import {storeToRefs} from 'pinia';
import {TransactionsHistory} from '~/pages/transactions';
import {useAppStore} from '~/entities/account-status/model/app-store.ts';

const routes = [
    { path: '/', name: 'home', component: TransactionsHistory },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/register', name: 'register', component: RegisterPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const appStore = useAppStore();
    await appStore.waitReady();

    const { isAuth } = storeToRefs(useAccountStatusStore());
    const authRoutes = ['login', 'register'];

    if (!isAuth.value && !authRoutes.includes(to.name)) {
        next({name: 'login', query: {from: to.fullPath}});

        return;
    }

    next();
});
