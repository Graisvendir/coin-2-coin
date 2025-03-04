import { createApp } from 'vue';
import './style.css';
import App from '~/app/App.vue';
import {router} from './app/router.ts';
import {piniaStore} from './app/store.ts';

createApp(App)
    .use(router)
    .use(piniaStore)
    .mount('#app');
