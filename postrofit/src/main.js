import {createApp} from 'vue';
import App from './App.vue';
import store from './store.js';
import router from './router.js';
import baseAxios from './axios.js';
import './registerServiceWorker.js';

// createApp(App).use(store).use(router).mount('#app');

const app = createApp(App);
app.config.globalProperties.$axios = baseAxios;
app.use(store).use(router).mount('#app');
