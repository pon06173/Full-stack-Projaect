/**
 * @author : 하석형
 * @since : 2023.08.24
 * @dscription : Vue를 활용한 Client단 구현의 시작점(Index) Component 입니다.
 */
import { createApp } from 'vue';

import AppRouter from './pages/AppRouter.js';
import App from './pages/App.vue';

// const vue = createApp(App).mount('#root');
const vue = createApp(App).use(AppRouter).mount('#root');