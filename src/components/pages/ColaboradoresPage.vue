<template>
  <ModalColaborador :isVisible="modalColaboradorVisivel" @close="modalColaboradorVisivel = false"
    @save="saveColaborador" />
  <ModalEditColaborador :isVisible="modalEditColaboradorVisivel" @close="modalEditColaboradorVisivel = false"
    @save="editColaborador" />

  <div class="container">
    <nav class="barra-lateral__content" id="barra-lateral">
      <div class="barra-lateral__content--logo">
        <img src="../../assets/mdi_box-check.png" alt="">
      </div>

      <div class="barra-lateral__content--links">
        <ul>
          <li>Armazém Fácil</li>
          <li>
            <routerLink to="/produtospage">Produtos</routerLink>
          </li>
          <li>
            <routerLink to="/resetpassword">Trocar senha</routerLink>
          </li>
        </ul>
      </div>

      <div class="barra-lateral__content--button-sair">
        <button class="botao-sair" id="" @click="logout()">Sair</button>
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


      </div>

      <div class="filtro__pesquisa">
        <button v-if="isGerente" @click="openModalColaborador">
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
            <td>{{ colaborador.name }}</td>
            <td>{{ colaborador.email }}</td>
            <td class="hidden-table">{{ getRole(colaborador.is_gerente) }}</td>
            <td class="botoes-estoque hidden-table">
              <button @click="deleteColaborador(colaborador.id)">
                <font-awesome-icon :icon="['fas', 'trash']" class="icon-decre-incre" />
              </button>
              <button @click="openModalEditColaborador(colaborador.id)"><font-awesome-icon :icon="['fas', 'edit']"
                  class="icon-decre-incre" /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import BaraLateral from '../reusable/BaraLateral.vue';
import TemplateColaboradores from '../reusable/TemplateProdutos.vue'
import ModalColaborador from '../reusable/CadColaboradoresModal.vue'
import ModalEditColaborador from '../reusable/EditColaboradorModal.vue'

export default {
  name: 'ForgotPassword',
  setup() {
    const empresa_id = ref(null);
    const token = ref(null);
    const id = ref(null);
    const isGerente = ref(false);
    const colaborador_id = ref(null)

    empresa_id.value = localStorage.getItem('empresa_id');
    token.value = localStorage.getItem('token');
    id.value = localStorage.getItem('id');

    const addColaborador = async (colaboradorData) => {
      // recebimento dos inputs do component dialog
      const { nome, email, password, is_gerente, empresa_id } = colaboradorData;

      try {
        const response = await axios.post('http://192.168.0.104:8000/api/createuser', {
          name: nome,
          email: email,
          password: password,
          is_gerente: is_gerente,
          empresa_id: empresa_id,
        }, {
          headers: {
            'Authorization': `Bearer ${token.value}`,
            'Content-Type': 'application/json'
          }
        });

        const msg_sucess = document.getElementById('msg-sucess')
        if (response.status === 201) {
          msg_sucess.style.display = 'flex';
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          console.log("Funcionário não cadastrado");
        }
      } catch (error) {
        console.error(error, 'Servidor error');
      }
    };


    const deleteColaborador = async (id) => {
      try {
        const response = await axios.delete(`http://192.168.0.104:8000/api/deleteuser/${id}`, {
          headers: {
            'Authorization': `Bearer ${token.value}`,
            'Content-Type': 'application/json'
          }
        });

        const delete_mensagem = document.getElementById('msg-delete')
        if (response.status === 200) {
          delete_mensagem.style.display = 'flex';
          setTimeout(() => {
            window.location.reload();
          }, 1000);

        } else {
          console.log("Erro ao deletar produto");
        }
      } catch (error) {
        console.error('Erro ao deletar o produto:', error);
      }
    };

    const editarColaborador = async (colaboradorData, colaborador_id) => {
      const { nome, email, password, is_gerente, empresa_id } = colaboradorData;

      let colaborador = {};

      if (nome.trim() !== "") {
        colaborador.name = nome;
      }

      if (email.trim() !== "") {
        colaborador.email = email;
      }

      if (password.trim() !== "") {
        colaborador.password = password;
      }

      if (is_gerente.trim() !== "") {
        colaborador.is_gerente = is_gerente;
      }

      if (empresa_id.trim() !== "") {
        colaborador.id_empresa = id_empresa;
      }

      try {
        const response = await axios.put(`http://192.168.0.104:8000/api/edituser/${colaborador_id}`, colaborador, {
          headers: {
            'Authorization': `Bearer ${token.value}`,
            'Content-Type': 'application/json'
          }
        });

        const edit_mensagem = document.getElementById('msg-edit')
        if (response.status === 200) {
          edit_mensagem.style.display = 'flex';
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          console.log("Erro ao editar produto");
        }
      } catch (error) {
        console.error('Erro ao editar o produto:', error);
      }
    };

    const abrirBotao = () => {
      let btnLateral = document.getElementById('barra-lateral')

      if (btnLateral.style.display == 'none') {
        btnLateral.style.display = 'flex';
      }
      else {
        btnLateral.style.display = 'none';
      }
    }

    const verificarUsuario = async (id) => {
      try {
        const response = await fetch(`http://192.168.0.104:8000/api/showoneuser/${id.value}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token.value}`,
            'Content-Type': 'application/json'
          }
        });

        const user = await response.json();
        isGerente.value = user.user.is_gerente === "true";
      } catch (error) {
        console.error('Erro ao recuperar os funcionários:', error);
      }
    };
    verificarUsuario(id);

    return {
      addColaborador,
      deleteColaborador,
      editarColaborador,
      abrirBotao,
      isGerente
    };
  },
  components: {
    BaraLateral,
    TemplateColaboradores,
    ModalColaborador,
    ModalEditColaborador
  },
  data() {
    return {
      colaboradores: [],
      modalColaboradorVisivel: false,
      modalEditColaboradorVisivel: false,
      colaborador_id: '', // serve para guardar o id que é capturado ao abrir o modal e passar para a função de editar
    };

  },
  mounted() {
    // get dos produtos
    const empresa_id = ref(null);
    const token = ref(null);

    empresa_id.value = localStorage.getItem('empresa_id');
    token.value = localStorage.getItem('token');

    fetch(`http://192.168.0.104:8000/api/showoneempresaf/${empresa_id.value}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token.value}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(colaboradores => {
        this.colaboradores = colaboradores.users;
      })
      .catch(error => console.error('Erro ao recuperar os funcionários:', error));
  },
  methods: {
    logout() {
      // Limpar o token armazenado no localStorage
      localStorage.removeItem('token');

      // Redirecionar para a página de login
      this.$router.push('/');
    },

    // "pipe" para o texto não ficar true e false
    getRole(isGerente) {
      return isGerente ? 'Gerente' : 'Funcionário';
    },

    // Método para abrir a janela modal de cadastro de produto
    openModalColaborador() {
      this.modalColaboradorVisivel = true;
    },
    // Método para lidar com o salvamento de produto
    saveColaborador(colaboradorData) {
      this.addColaborador(colaboradorData) // ao clicar, chama a função de salvar no bd
      this.modalColaboradorVisivel = false;
    },

    openModalEditColaborador(colaborador_id) {
      this.modalEditColaboradorVisivel = true;
      this.colaborador_id = colaborador_id;
    },
    // Método para lidar com o salvamento de produto
    editColaborador(colaboradorData, colaborador_id) {
      this.editarColaborador(colaboradorData, this.colaborador_id) // ao clicar, chama a função de salvar no bd e passa o id que foi resgatado
      this.modalEditColaboradorVisivel = false;
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
  height: auto;
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
  height: 20%;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
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
  width: auto;
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