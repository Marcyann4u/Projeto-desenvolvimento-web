<template>
  <TemplateRegister src="https://deltafacilities.com.br/blog/wp-content/uploads/2023/05/gestao-almoxarifado.jpg">
    <div class="content">
      <div class="msg-sucess__container" id="msg-edit">
        <p>Senha alterada com sucesso!</p>
      </div>
      <div class="txt">
        <h1>Redefinir sua senha</h1>
      </div>

      <div class="form-style">
        <h3>Nova senha</h3>
        <BaseInput type="password" v-model="password" class="input"></BaseInput>
      </div>

      <Button intent="primary" @click="resetSenha">Redefinir senha</Button>
    </div>
  </TemplateRegister>
</template>

<script>
import { ref } from 'vue';
import BaseInput from '../reusable/BaseInput.vue';
import Button from '../reusable/Button.vue'
import TemplateRegister from '../reusable/TemplateRegister.vue'
import axios from 'axios';

export default {
  name: 'ResetPassword',
  components: {
    BaseInput,
    Button,
    TemplateRegister,
  },
  setup() {
    const id = ref(null);
    const password = ref('');
    const token = ref(localStorage.getItem('token')); // Assumindo que você está armazenando o token no localStorage

    id.value = localStorage.getItem('id');

    const resetSenha = async () => {
      if (password.value.trim() === "") {
        console.log("Senha não pode ser vazia");
        return;
      }

      let colaborador = { password: password.value };

      try {
        const response = await axios.put(`http://192.168.0.104:8000/api/edituser/${id.value}`, colaborador, {
          headers: {
            'Authorization': `Bearer ${token.value}`,
            'Content-Type': 'application/json'
          }
        });

        const edit_mensagem = document.getElementById('msg-edit');
        if (response.status === 200) {
          edit_mensagem.style.display = 'flex';
          setTimeout(() => {
            window.location = '/'
          }, 1000);
        } else {
          console.log("Erro ao atualizar senha");
        }
      } catch (error) {
        console.error('Erro ao atualizar senha:', error);
      }
    };

    return {
      resetSenha,
      password
    }
  },
  data() {
    return {
      firstName: '',
      displayText: '', // Add a new property for displaying text
    };
  },
  methods: {
    updateText() {
      // Update the displayText when the button is clicked
      this.displayText = this.firstName;
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Inter", sans-serif;

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
  font-size: 38px;
  font-weight: bolder;
}

p {
  font-size: 18px;
  max-width: 542px;
}

h3 {
  margin-bottom: -1rem;
  font-weight: bold;
}

.content {
  display: flex;
  gap: 1rem;
  flex-direction: column;
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

/* Media query for smaller screens */
@media screen and (max-width: 860px) {
  .content {
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
    max-width: 100%;
  }

  p {
    max-width: 100%;
    font-size: 14px;
  }

  h3 {
    font-size: 16px;
  }
}
</style>