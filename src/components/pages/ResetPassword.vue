<template>
    <TemplateRegister src="https://deltafacilities.com.br/blog/wp-content/uploads/2023/05/gestao-almoxarifado.jpg">
        <div class="content">
        <div class="txt">
            <h1>Redefinir sua senha</h1>
        </div>
        <div class="form-style">
        <h3>Nome de Usuário</h3>
        <BaseInput class="input" v-model="firstName"></BaseInput>
        </div>
        <div class="form-style">
          <h3>Código da empresa</h3>
          <BaseInput class="input"></BaseInput>
        </div>
        <div class="form-style">
            <h3>Senha</h3>
            <BaseInput type="password" class="input"></BaseInput>
        </div>
        <div class="form-style">
            <h3>Confirme a senha</h3>
            <BaseInput type="password" class="input"></BaseInput>
        </div>
  
        <Button  intent="primary" @click="updateText">Redefinir senha</Button>
        </div>
    </TemplateRegister>
  </template>
  
  <script>
  import { ref } from 'vue';
  import BaseInput from '../reusable/BaseInput.vue';
  import Button from '../reusable/Button.vue'
  import TemplateRegister from '../reusable/TemplateRegister.vue'
  
  export default {
  name: 'ResetPassword',
  components: {
  BaseInput,
  Button,
  TemplateRegister,
  },
  data() {
  return {
    firstName: ref(''),
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
  *{
  font-family: "Inter", sans-serif;
  
  }
  .txt{
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 40vw;
    width: 542px;
  }
  h1, p{
  text-align: center;
  font-family: "Inter", sans-serif;
  }
  h1{
  font-size: 38px;
  font-weight: bolder;
  }
  p{
  font-size: 18px;
  max-width: 542px;
  }
  h3{
  margin-bottom: -1rem;
  font-weight: bold;
  }
  .content{
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  .input{
    width: 100%;
    font-family: "Inter", sans-serif;
  
  }
  .form-style{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  }
  .flex-row{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  }    
  a{
  color: rgb(45, 45, 45);
  text-align: right;
  }
  /* Media query for smaller screens */
  @media screen and (max-width: 860px) {
  .content {
  max-width: 80%;
  flex-direction: column; /* Stack content in a column on smaller screens */
  align-items: center;
  justify-content: center;
  }
  .txt{
    max-width: 100%;
  }
  .input, Button {
    width: 100%; /* Make the input full width on smaller screens */
  }
  a{
  max-width: 35%;
  }
  h1{
  font-size: 36px;
  font-weight: bolder;
  max-width: 100%;
  }
  p{
  max-width: 100%;
  font-size: 14px;
  }
  h3{
  font-size: 16px;
  }
  }
  </style>