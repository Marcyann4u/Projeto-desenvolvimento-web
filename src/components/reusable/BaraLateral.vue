<!-- TemplateRegister.vue -->
<template>
  <main class="container">
    <div class="lateral">
      <img src="../../assets/mdi_box-check.png" alt="Logo">
      <ul>
        <li>{{ usuario.empresa }}</li>
        <li>{{ usuario.nome }}</li>
        <li>{{ usuario.email }}</li>
        <li><a href="#">Colaboradores</a></li>
        <li><a href="#">Trocar senha</a></li>
      </ul>

      <BotaoSair></BotaoSair>
    </div>
    <div class="content-txt">
      <slot></slot>
    </div>
  </main>
</template>

<script>
import BotaoSair from '../reusable/BotaoSair.vue';
export default {
  setup(){
    return {
      usuario: {
        empresa: 'Loja do Programador',
        nome: 'Luana Paes',
        email: 'estoque@loja.com',
      },
    };
  },
  components: {
    BotaoSair
  },
  props: {
    src: String,
  },
  methods: {
    handleError() {
      console.error('Error loading image:', this.src);
      // You can implement additional error handling logic here
    },
  },
};
</script>

<style scoped>
* {
  background-color: #247BA0;
  height: auto;
}

.container{
  height: 100%;
}

.lateral {
  height: 100vh;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.lateral img {
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
}

.lateral>ul {
  color: #fff;
  font-size: 18px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;
  text-align: left;
}

.lateral a {
  padding: 0;
  color: #fff;
  transition: all .4s ease-out;
}

.lateral a:hover {
  background-color: transparent;
  border-bottom: 1px solid #48c6fc;
}

@media screen and (max-width: 860px) {
  *{
    background-color: red;
  }


}
</style>