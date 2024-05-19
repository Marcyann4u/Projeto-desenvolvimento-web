<template>
  <TemplateRegister src="https://www.pleion.com.br/blog/wp-content/uploads/shutterstock_397306489.jpg">
    <div class="content">
      <div class="txt">
        <span class="error-msg" id="error-msg">Email ou senha inválidos</span>
        <h1>Login</h1>
        <p>Digite seu e-mail e senha para acessar sua conta</p>
      </div>
      <form @submit.prevent="loginUser">
        <div class="form-style">
          <h3>E-mail</h3>
          <BaseInput class="input" v-model="firstName"></BaseInput>
        </div>
        <div class="form-style">
          <h3>Senha</h3>
          <BaseInput class="input" type="password" v-model="password"></BaseInput>
        </div>

        <div class="flex-row">
          <label class="container">
            <input type="checkbox">
            <span class="checkmark"></span>
            Lembre-se de mim
          </label>
          <a><router-link to="/forgotpassword">Esqueceu sua senha?</router-link></a>
        </div>
        <Button intent="primary">Entrar</Button>
      </form>
    </div>
  </TemplateRegister>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import BaseInput from '../reusable/BaseInput.vue';
import Button from '../reusable/Button.vue';
import TemplateRegister from '../reusable/TemplateRegister.vue';
import Modal from '../reusable/Modal.vue';
// import { router } from '@/router';

export default {
  name: 'SignUp',
  components: {
    BaseInput,
    Button,
    TemplateRegister,
    Modal,
  },
  setup() {
    const firstName = ref('');
    const password = ref('');

    const loginUser = async () => {
      try {
        const response = await axios.post('http://192.168.0.104:8000/api/login', {
          email: firstName.value,
          password: password.value,
        });

        if (response.status === 200) {
          const token = response.data.token; // Supondo que o token esteja na resposta da API
          const id_funcionario = response.data.user.id;
          const id_empresa = response.data.user.empresa_id


          // Salva o token no localStorage
          localStorage.setItem('token', token);
          localStorage.setItem('id', id_funcionario);
          localStorage.setItem('empresa_id', id_empresa);

          console.log('Token salvo:', token);
          window.location = '/produtospage';
        } else {
          console.log("Login não realizado");
        }
      } catch (error) {
        document.getElementById('error-msg').style.display = 'block';
      }
    };

    

    return {
      firstName,
      password,
      loginUser,
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Inter", sans-serif;
  background-color: #fff;
}

.error-msg {
  background-color: rgb(237, 63, 63);
  display: none;
  color: #fff;
  padding: 5px;
}

.txt {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 40vw;
  width: 542px;
}

h1,
p {
  text-align: center;
  font-family: "Inter", sans-serif;
}

h1 {
  display: block;
  width: 100%;
  font-size: 50px;
  font-weight: bolder;
}

p {
  display: block;
  font-size: 18px;
}

h3 {
  margin-bottom: -1rem;
  font-weight: bold;
}

.content {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 1rem;
}

.input {
  width: 100%;
  font-family: "Inter", sans-serif;

}

.form-style {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.flex-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

a {
  color: rgb(45, 45, 45);
  text-align: right;
}

/* Media query for smaller screens */
@media screen and (max-width: 860px) {
  .content {
    height: 100vh;
    max-width: 80%;
    flex-direction: column;
    /* Stack content in a column on smaller screens */
    align-items: center;
    justify-content: center;
  }

  .txt {
    max-width: 100%;
  }

  .input,
  Button {
    width: 100%;
    /* Make the input full width on smaller screens */
  }

  a {
    max-width: 35%;
  }

  h1 {
    font-size: 36px;
    font-weight: bolder;
  }

  p {
    font-size: 14px;
  }

  h3 {
    font-size: 16px;
  }
}
</style>