import { createWebHistory, createRouter } from "vue-router";

import Main from './main/main.vue';
import Cafe from './cafe/cafe.vue';

const routes = [
    {path: '/', name: "Main", component: Main},
    {path: '/cafe.page', name: "Cafe", component: Cafe}
]

const AppRouter = createRouter({
    history: createWebHistory(),
    routes
});

export default AppRouter;