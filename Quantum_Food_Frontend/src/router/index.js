import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OrderView from "../views/OrderView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/order",
      name: "order",
      component: OrderView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       next({
//         path: "/",
//         query: { redirect: to.fullPath },
//       });
//     } else {
//       try {
//         jwt.verify(token, "yourSecret");
//         next();
//       } catch (err) {
//         console.log("Token is invalid or has expired.");
//         next({
//           path: "/",
//           query: { redirect: to.fullPath },
//         });
//       }
//     }
//   } else {
//     next();
//   }
// });

export default router;
