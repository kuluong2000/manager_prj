import Vue from "vue";
import VueRouter from "vue-router";

/* Layout */
import Layout from "../components/Layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    meta: {
      requiredAuth: true,
    },
    children: [
      {
        path: "/",
        component: () => import("../views/Dashboard"),
        name: "dashboard",
        meta: {
          requiredAuth: true,
        },
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/User"),
        meta: {
          requiredAuth: true,
        },
      },
      {
        path: "/userInfo",
        name: "userInfo",
        component: () => import("../components/Infomation"),
        meta: {
          requiredAuth: true,
        },
      },
      {
        path: "/employee",
        name: "employee",
        component: () => import("../views/Employee"),
        meta: {
          requiredAuth: true,
        },
      },
      {
        path: "/facilities",
        name: "facilities",
        component: () => import("../views/Facilities"),
        meta: {
          requiredAuth: true,
        },
      },
      {
        path: "/department",
        name: "department",
        component: () => import("./../views/Department"),
        meta: {
          requiredAuth: true,
        },
      },
      {
        path: "/position",
        name: "position",
        component: () => import("./../views/Position"),
        meta: {
          requiredAuth: true,
        },
      },
      {
        path: "/payment",
        name: "payment",
        component: () => import("./../views/Payment"),
        meta: {
          requiredAuth: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./../views/Login"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.requiredAuth) {
    const auth = JSON.parse(localStorage.getItem("user-info"));
    if (auth && auth !== "") {
      console.log(auth);
      next();
    } else {
      next({ path: "/login" });
    }
  }
  return next();
});

export default router;
