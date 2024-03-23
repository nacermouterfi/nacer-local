import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.config.globalProperties.$http = axios; // Ajoutez axios comme propriété globale

app.use(createPinia());
app.use(router);

app.mount('#app');

