import { createApp } from 'vue';
import './style.css';
import App from '~/app/App.vue';
import { router } from './app/router.ts';
import { piniaStore } from './app/store.ts';
import { createVfm } from 'vue-final-modal';
import 'vue-final-modal/style.css';

const vfm = createVfm();

createApp(App)
    .use(piniaStore)
    .use(router)
    .use(vfm)
    .mount('#app');
