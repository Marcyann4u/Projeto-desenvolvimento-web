<template>
      <!-- Janela modal para cadastrar produto -->
      <ModalProduto :isVisible="modalProdutoVisivel" @close="modalProdutoVisivel = false" @save="saveProduto" />
  
      <div class="container">
    <nav class="barra-lateral__content" id="barra-lateral">
      <div class="barra-lateral__content--logo">
        <img src="../../assets/mdi_box-check.png" alt="">
      </div>

      <div class="barra-lateral__content--links">
        <ul>
          <li>Loja do Programador</li>
          <li>Luana Paes</li>
          <li>estoque@loja.com</li>
          <li>
            <routerLink to="/produtospage">Produtos</routerLink>
          </li>
          <li>
            <routerLink to="/resetpassword">Trocar senha</routerLink>
          </li>
        </ul>
      </div>

      <div class="barra-lateral__content--button-sair">
        <button class="botao-sair" id="">Sair</button>
      </div>
    </nav>
    <main>
      <div class="header">
        <div class="header--informacoes">
        <div class="hidden">
            <button @click="abrirBotao" id="btn-lateral">
              <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
          </div>
          <h1>Lista de Produtos</h1>
          <p class="colab">Exibindo 0 Produtos</p>
        </div>
        <div class="header--perfil">
          <a href="#">
            <img src="../../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg" alt="foto de perfil do usuário">
          </a>
        </div>
      </div> 

      <div class="filtro__pesquisa">
        <input type="text" placeholder="nome ou código">
        <p>Filtro</p>
        <button @click="openModalProduto">
          <font-awesome-icon :icon="['fas', 'plus']" class="icon-mais" /> Cadastrar
        </button>
      </div>
      

    </main>
  </div>
  </template>
  
  <script>
  import BaraLateral from '../reusable/BaraLateral.vue';
  import ModalProduto from '../reusable/ProdutosModal.vue'; 
  
  export default {
    components: {
      ModalProduto,
      BaraLateral,
    },
    data() {
      return {
        // Adicione uma variável para controlar a visibilidade da janela modal de produto
        modalProdutoVisivel: false,
        produtos: [], // Array para armazenar os produtos cadastrados
      };
    },
    methods: {
      // Método para abrir a janela modal de cadastro de produto
      openModalProduto() {
        this.modalProdutoVisivel = true;
      },
      // Método para lidar com o salvamento de produto
      saveProduto(produtoData) {
        // Aqui você pode lidar com os dados do produto salvos
        console.log('Produto salvo:', produtoData);
        // Adicione os dados do produto ao array de produtos
        this.produtos.push(produtoData);
        // Feche a janela modal após salvar o produto
        this.modalProdutoVisivel = false;
      },
    },
  };
  </script>
  
  <style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.barra-lateral__content {
  width: 30%;
  max-width: 50%;
  height: 100%;
  background-color: #247BA0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.barra-lateral__content--logo {
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.barra-lateral__content--logo img {
  width: 150px;
  height: 150px;
}

.barra-lateral__content--links {
  margin-top: -150px;
  height: 30%;
  padding-left: 20px;
  font-size: 18px;
}

.barra-lateral__content--links ul {
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.barra-lateral__content--links a {
  text-decoration: none;
  color: #fff;
  border-bottom: 1.2px solid #77caed;
  transition: border-bottom .3s ease-in;
}

.barra-lateral__content--links a:hover {
  border-bottom: 1.6px solid #d0ebf7;
}

.barra-lateral__content--button-sair {
  display: flex;
  justify-content: center;
}

.botao-sair {
  width: 70%;
  height: 35px;
  border-radius: 15px;
  border: none;
  margin-bottom: 20px;
  font-size: 1em;
  transition: all .9s ease;
}

.botao-sair:hover {
  background-color: transparent;
  border: 1px solid #77caed;
  color: #fff;
  cursor: pointer;
}

main {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: rgb(231, 241, 250);
}

.hidden,
#msg-sucess,
#msg-delete,
#msg-edit {
  display: none;
}

.msg-sucess__container {
  margin: 10px auto 0;
  background-color: rgb(182, 250, 193);
}

.msg-sucess__container p {
  padding: 5px;
  color: rgb(47, 73, 21);
}

.msg-delete__container {
  margin: 10px auto 0;
  background-color: rgb(250, 182, 182);
  color: rgb(86, 17, 17);
}

.msg-delete__container p {
  padding: 5px;
}

.header {

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 20px;
}


.header>.header--perfil>a>img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

.filtro__pesquisa {
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 10px;

}

.filtro__pesquisa input {
  margin-left: 5px;
  height: 100%;
  width: 200px;
  outline: none;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 10px;
  padding-left: 5px;
}

.filtro__pesquisa p {
  margin-left: -550px;
}

.filtro__pesquisa p:hover {
  border: 1px solid #d0ebf7;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
}

.filtro__pesquisa button {
  height: 100%;
  width: 100px;
  background-color: #13293D;
  color: #fff;
  font-size: 15px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  transition: all .3s ease-in;
}

.filtro__pesquisa button:hover {
  background-color: #23496d;
  cursor: pointer;
}

table {
  margin-top: 40px;
  width: 100%;
  border-collapse: collapse;
}

tr {
  background-color: transparent
}

th,
td {
  padding: 8px 16px;
  text-align: left;
}

th {
  font-weight: bold;
  border-bottom: 1.5px solid #ABABAB;
}

/* Borda inferior em todas as células */
td {
  border-bottom: 1px solid #ddd;
}

.botoes-estoque {
  display: flex;
  justify-content: space-evenly;
  width: 120px;
}

.botoes-estoque button {
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  border: none;
}

.font-awesome-icon {
  background-color: transparent;
}

.icon-decre-incre:hover {
  color: #188068;
}

.add-colaborador {
  margin-left: 410px;
  height: 80%;
  background-color: #13293D;
  color: #fff;
  border: none;
  border-radius: 15px;
  transition: all .3s ease-in;
}

.add-colaborador:hover {
  background-color: #1d3f5e;
  cursor: pointer;
}

.icon-mais {
  color: #fff;
  background-color: transparent;
}

/* Responsividade */

/* @media screen and (max-width: 2000px) {
  .filtro__pesquisa p {
      margin-left: -60%;
  }
} */

@media screen and (min-width: 1200) {
  .filtro__pesquisa p {
    margin-left: -100%;
  }
}

@media screen and (max-width: 1200px) {
  .filtro__pesquisa p {
    margin-left: -30%;
  }
}

@media screen and (max-width: 1000px) {
  /* .barra-lateral__content {
      background-color: red;
  } */

  .barra-lateral__content--logo img {
    width: 100px;
    height: 100px;
    margin-top: -100px;
  }

  .barra-lateral__content--links {
    margin-top: -300px;
    height: 30%;
    padding-left: 20px;
    font-size: 15px;
  }

  .filtro__pesquisa p {
    margin-left: -30%;
  }
}

@media screen and (max-width: 770px) {
  .hidden {
    display: flex;
    margin: 10px 0;
  }

  .barra-lateral__content {
    width: 30%;
    max-width: 50%;
  }

  .barra-lateral__content--links {
    margin-top: -400px;
  }

  .hidden button {
    border-radius: 25px;
    border: none;
    background-color: transparent;
  }

  .hidden-table {
    display: none;
  }

  #barra-lateral {
    display: none;
  }

  .barra-lateral__content--links {
    font-size: 10px;
    padding: 0 5px;
  }

  .barra-lateral__content--links ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .barra-lateral__content--links li {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 600px) {
  .container {
    width: 100vw;
    height: 100vh;
  }

  main,
  .barra-lateral__content {
    width: 700px;
    min-height: 1000px;
  }

  .colab {
    margin-left: 0;
  }

}
</style>
