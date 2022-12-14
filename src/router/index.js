import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    // Incluir caminho para o feed principal/home do site

    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
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
  ]
})

export default router
