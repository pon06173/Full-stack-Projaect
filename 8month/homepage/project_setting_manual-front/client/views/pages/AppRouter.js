import { createWebHistory, createRouter } from "vue-router";

import Main from "../pages/main/Main.vue";
import Cafe from "../pages/cafe/Cafe.vue";
import Order from "../pages/order/Order.vue";
import OrderList from "../pages/order/OrderList.vue";

const routes = [
  /* 메인화면 */
  { path: "/", name: "Main", component: Main },

  /* 카페 */
  { path: "/cafe.page", name: "Cafe", component: Cafe },
  
  /* 주문 */
  { path: "/order.page", name: "Order", component: Order },
  { path: "/orderList.page", name: "OrderList", component: OrderList },
];

const AppRouter = createRouter({
  history: createWebHistory(),
  routes,
});

export default AppRouter;
