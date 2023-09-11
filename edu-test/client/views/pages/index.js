import { createApp } from 'vue';

import AppRouter from './AppRouter.js';
import App from './App.vue';

const vue = createApp(App).use(AppRouter).mount("#root");

if (APP_START_VIEW_PATH != '/') {
    AppRouter.push({path: APP_START_VIEW_PATH});
}