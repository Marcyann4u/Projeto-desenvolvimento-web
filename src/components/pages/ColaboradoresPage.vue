<template>
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
          <h1>Lista de Colaboradores</h1>
          <p class="colab">Exibindo {{ colaboradores.length }} colaboradores</p>
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
        <button @click="showModal = true">
          <font-awesome-icon :icon="['fas', 'plus']" class="icon-mais" /> Cadastrar
        </button>
      </div>

      <div class="msg-sucess__container" id="msg-sucess">
        <p>Cadastrado com sucesso!</p>
      </div>
      <div class="msg-delete__container" id="msg-delete">
        <p>Deletado com sucesso!</p>
      </div>
      <div class="msg-sucess__container" id="msg-edit">
        <p>Editado com sucesso!</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Função</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="colaborador in colaboradores" :key="colaborador.id">
            <td>{{ colaborador.nome }}</td>
            <td>{{ colaborador.email }}</td>
            <td class="hidden-table">{{ colaborador.tipo }}</td>
            <td class="botoes-estoque hidden-table">
              <button @click="deleteColaborador(colaborador.id)">
                <font-awesome-icon :icon="['fas', 'trash']" class="icon-decre-incre" />
              </button>
              <button @click="editarColaborador(colaborador.id)">
                <font-awesome-icon :icon="['fas', 'edit']" class="icon-decre-incre" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <JanelaModal
        :isVisible="showModal"
        @close="showModal = false"
        @save="handleSave"
      />
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import BaraLateral from '../reusable/BaraLateral.vue';
import TemplateColaboradores from '../reusable/TemplateProdutos.vue';
import JanelaModal from '../reusable/JanelaModal.vue';

export default {
  name: 'ForgotPassword',
  components: {
    BaraLateral,
    TemplateColaboradores,
    JanelaModal,
  },
  setup() {
    const showModal = ref(false);

    const handleSave = async (employee) => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/cadastrar-funcionario/', {
          nome: employee.name,
          email: employee.email,
          senha: employee.password,
          tipo: employee.type,
          nome_empresa: employee.company
        });

        if (response.status === 201) {
          document.getElementById('msg-sucess').style.display = 'flex';
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          console.log("não cadastrado");
        }
      } catch (error) {
        console.error(error, 'erro vindo do backend');
      }
    };

    const deleteColaborador = async (id) => {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/excluir-funcionario/${id}/`);
        if (response.status === 204) {
          document.getElementById('msg-delete').style.display = 'flex';
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          console.log("Erro ao deletar colaborador");
        }
      } catch (error) {
        console.error('Erro ao deletar o colaborador:', error);
      }
    };

    const editarColaborador = async (id) => {
      let colaborador = {};
      const nome = prompt("Nome do colaborador");
      if (nome.trim() !== "") {
        colaborador.nome = nome;
      }
      const email = prompt("Email do colaborador");
      if (email.trim() !== "") {
        colaborador.email = email;
      }
      const senha = prompt("Senha do colaborador");
      if (senha.trim() !== "") {
        colaborador.senha = senha;
      }
      const tipo = prompt("Tipo do colaborador -- FUNC ou ADM");
      if (tipo.trim() !== "") {
        colaborador.tipo = tipo;
      }
      const nome_empresa = prompt("Empresa do colaborador");
      if (nome_empresa.trim() !== "") {
        colaborador.nome_empresa = nome_empresa;
      }
      try {
        const response = await axios.put(`http://127.0.0.1:8000/editar-funcionario/${id}/`, colaborador);
        if (response.status === 200) {
          document.getElementById('msg-edit').style.display = 'flex';
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          console.log("Erro ao editar colaborador");
        }
      } catch (error) {
        console.error('Erro ao editar o colaborador:', error);
      }
    };

    const abrirBotao = () => {
      let btnLateral = document.getElementById('barra-lateral');
      btnLateral.style.display = btnLateral.style.display == 'none' ? 'flex' : 'none';
    };

    return {
      showModal,
      handleSave,
      deleteColaborador,
      editarColaborador,
      abrirBotao
    };
  },
  data() {
    return {
      colaboradores: []
    };
  },
  mounted() {
    fetch('http://127.0.0.1:8000/api/funcionarios')
      .then(response => response.json())
      .then(colaboradores => {
        this.colaboradores = colaboradores;
      })
      .catch(error => console.error('Erro ao recuperar os funcionários:', error));
  }
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
