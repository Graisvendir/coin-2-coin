import {createRouter, createWebHistory} from 'vue-router';
import {LoginPage} from '../pages/sign-in';
import {HelloWorld} from '../pages/HelloWorld';

const routes = [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/login', name: 'login', component: LoginPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
