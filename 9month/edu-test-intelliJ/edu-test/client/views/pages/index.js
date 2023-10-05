import { createApp } from 'vue';

import AppRouter from './AppRouter.js';
import App from './App.vue';

const vue = createApp(App).use(AppRouter).mount("#root");