<!-- TemplateRegister.vue -->
<template>
    <div class="button__content">
        <button>Sair</button>
    </div>
</template>
  
<script>
  export default{
    name: 'BotaoSair'
  }
</script>
  
<style scoped>
    .button__content{
        height: 200px;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin-bottom: 20px;
    }

    .button__content button{
        height: 40px;
        border-radius: 10px;
        border: none;
        font-weight: bold;
        transition: all .3s ease-in;
    }

    .button__content button:hover{
        cursor: pointer;
        background-color: transparent;
        color: #fff;
        border: 1px solid #94d8f5;
    }
</style>
  