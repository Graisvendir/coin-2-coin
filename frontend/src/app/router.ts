import {createRouter, createWebHistory} from 'vue-router';
import { LoginPage, RegisterPage } from '../pages/account';
import {useAccountStatusStore} from '~/entities/account-status';
import {storeToRefs} from 'pinia';
import {TransactionsHistory} from '~/pages/transactions';

const routes = [
    { path: '/', name: 'home', component: TransactionsHistory },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/register', name: 'register', component: RegisterPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const { isAuth } = storeToRefs(useAccountStatusStore());

    if (!isAuth.value && !['login', 'register'].includes(to.name)) {
        next({name: 'login', query: {from: to.fullPath}});
    } else {
        next();
    }
});
