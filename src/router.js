// router.js
import { createRouter, createWebHistory } from 'vue-router';
import SignUp from './components/pages/SignUp.vue';
import ResetPassword from './components/pages/ResetPassword.vue';
import ForgotPassword from './components/pages/ForgotPassword.vue';
import Example from './components/popups/Editar.vue';
import ColaboradoresPage from './components/pages/ColaboradoresPage.vue';
import ProdutosPage from './components/pages/ProdutosPage.vue';




const routes = [
  {
    path: '/',
    component: SignUp
  },
  {
    path: '/forgotpassword',
    component: ForgotPassword
  },
  {
    path: '/resetpassword',
    component: ResetPassword,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      if (!token) {
        next('/') // cao não tiver token vai para a página de login
      } else {
        // só passa se tiver token
        next()
      }
    }
  },
  {
    path: '/colaboradorespage',
    component: ColaboradoresPage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      if (!token) {
        next('/') // cao não tiver token vai para a página de login
      } else {
        // só passa se tiver token
        next()
      }
    }
  },
  {
    path: '/produtospage',
    component: ProdutosPage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      if (!token) {
        next('/') // cao não tiver token vai para a página de login
      } else {
        // só passa se tiver token
        next()
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
