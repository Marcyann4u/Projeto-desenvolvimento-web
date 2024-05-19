// router.js
import { createRouter, createWebHistory } from 'vue-router';
import SignUp from './components/pages/SignUp.vue';
import ResetPassword from './components/pages/ResetPassword.vue';
import ForgotPassword from './components/pages/ForgotPassword.vue';
import Example from './components/popups/Editar.vue';
import ProdutosPage from './components/pages/ProdutosPage.vue';
import ColaboradoresPage from './components/pages/ColaboradoresPage.vue';
import ProdutosAlterado from './components/pages/ProdutosAlterado.vue';



const routes = [
  { path: '/', component: SignUp },
  { path: '/forgotpassword', component: ForgotPassword },
  { path: '/resetpassword', component: ResetPassword },
  { path: '/example', component: Example },
  { path: '/produtospage', component: ProdutosPage },
  { path: '/colaboradorespage', component: ColaboradoresPage },
  { path: '/produtosalterado', component: ProdutosAlterado },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
