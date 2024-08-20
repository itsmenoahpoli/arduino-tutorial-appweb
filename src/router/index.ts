import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: () => import("~/views/system/error.vue"),
    },
    {
      path: "/auth",
      component: () => import("~/layouts/auth-layout.vue"),
      children: [
        {
          path: "/auth/login",
          name: "auth-login",
          component: () => import("~/views/auth/login.vue"),
        },
        {
          path: "/auth/request-otp",
          name: "auth-request-otp",
          component: () => import("~/views/auth/request-otp.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      component: () => import("~/layouts/dashboard-layout.vue"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard-home",
          component: () => import("~/views/dashboard/home.vue"),
        },
      ],
    },
  ],
});

export default router;
