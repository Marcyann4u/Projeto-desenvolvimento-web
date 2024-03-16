// router.js
import { createRouter, createWebHistory } from 'vue-router';
import SignUp from './components/pages/SignUp.vue';
import ResetPassword from './components/pages/ResetPassword.vue';
import ForgotPassword from './components/pages/ForgotPassword.vue';
import Example from './components/popups/Editar.vue';
import ColaboradoresPage from './components/pages/ColaboradoresPage.vue';
import ProdutosPage from './components/pages/ProdutosPage.vue';

const routes = [
  { path: '/', component: SignUp },
  { path: '/forgotpassword', component: ForgotPassword },
  { path: '/resetpassword', component: ResetPassword },
  { path: '/example', component: Example },
  { path: '/colaboradorespage', component: ColaboradoresPage },
  { path: '/produtospage', component: ProdutosPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
