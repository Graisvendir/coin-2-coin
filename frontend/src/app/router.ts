import {createRouter, createWebHistory} from 'vue-router';
import { LoginPage, RegisterPage } from '../pages/account';
import {HelloWorld} from '../pages/HelloWorld';

const routes = [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/register', name: 'register', component: RegisterPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
