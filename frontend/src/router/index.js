import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/userRegister",
      name: "userRegister",
      component: () => import("../views/UserRegisterView.vue"),
    },
    {
      path: "/userLogin",
      name: "userLogin",
      component: () => import("../views/UserLoginView.vue"),
    },
    {
      path: "/dogProfile",
      name: "dogProfile",
      component: () => import("../views/dogProfileView.vue"),
    },
    {
      path: "/cadPost",
      name: "cadPost",
      component: () => import("../views/CadPostView.vue"),
    },
  ]
})

export default router
