import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OrderView from "../views/OrderView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import useTokenVerifier from "../composables/useTokenVerifier";
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
      meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
  const { verifyToken } = useTokenVerifier();
  if (to.matched.some((record) => record.meta.requiresAuth) && !verifyToken()) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       console.log("No token found, redirecting to login");
//       next({
//         path: "/",
//         query: { redirect: to.fullPath },
//       });
//     } else {
//       try {
//         // jwt.verify(token, "SecretFromKeyCLoak");
//         console.log("hello");
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
const test = () => {
  // var { default:jwt = import("jsonwebtoken");
  var token = jwt.sign({ here: "testing" }, "keykey");
  console.log(token);
};

export default router;
