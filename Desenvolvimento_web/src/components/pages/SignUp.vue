<template>
        <TemplateRegister src="https://www.pleion.com.br/blog/wp-content/uploads/shutterstock_397306489.jpg">
            <div class="content">
            <div class="txt">
                <h1>Login</h1>
                <p>Digite seu e-mail e senha para acessar sua conta</p>
            </div>
            <h3>E-mail</h3>
            <BaseInput class="input" v-model="firstName"></BaseInput>
            
            <h3>Senha</h3>
            <BaseInput class="input"></BaseInput>
            
            <!-- <p>{{ displayText }}</p> -->
            <Button  intent="secondary" @click="updateText">Update</Button>
            </div>
        </TemplateRegister>
  </template>
  
  <script>
  import { ref } from 'vue';
  import BaseInput from '../reusable/BaseInput.vue';
  import Button from '../reusable/Button.vue'
  import TemplateRegister from '../reusable/TemplateRegister.vue'

  export default {
    name: 'SignUp',
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
h1, p{
    text-align: center;
    font-family: "Inter", sans-serif;

}
    .content{
        display: flex;
        gap: 1rem;
        /* align-items: center; */
        flex-direction: column;
    }
    .input{
        /* width: 486px; */
        font-family: "Inter", sans-serif;

    }
</style>
  