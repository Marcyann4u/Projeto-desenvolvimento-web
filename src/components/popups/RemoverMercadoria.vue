<template>
 <h1>Popups que usaremos :3</h1>
 <Modal 
 v-if="popupTriggers.buttonTrigger" 
 :TogglePopup="() => TogglePopup('buttonTrigger')">

<template v-slot:title>
  Remover Mercadoria
</template>
<template v-slot:corpse>
  <p>Tem certeza que deseja remover o item NOME DO 
PRODUTO?</p>
  <p>Esta ação não pode ser desfeita</p>
  <div class="botoes">
    <Button intent="grayModal">Sim</Button>
    <Button intent="dangerModal">Não</Button>
  </div>
</template>
</Modal>
<Button @click="() => TogglePopup('buttonTrigger')">Abrir Pop Up</Button>
</template>

<script>
import { ref } from 'vue';
import BaseInput from '../reusable/BaseInput.vue';
import Button from '../reusable/Button.vue'
import TemplateRegister from '../reusable/TemplateRegister.vue'
import Modal from '../reusable/Modal.vue'

export default {
name: 'ForgotPassword',
components: {
BaseInput,
Button,
Modal,
},
setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });
    const TogglePopup = (trigger) =>{
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
    return {
      popupTriggers,
      TogglePopup,
      
    };

}}
</script>

<style scoped>
  .botoes{
    display: flex;
    gap: 1rem;
  }
</style>