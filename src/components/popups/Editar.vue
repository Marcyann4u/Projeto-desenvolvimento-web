<template>
 <h1>Popups que usaremos :3</h1>
 <Modal 
 v-if="popupTriggers.buttonTrigger" 
 :TogglePopup="() => TogglePopup('buttonTrigger')">

<template v-slot:title>
Editar
</template>
<template v-slot:corpse>
  <p>Nome *</p>
  <BaseInput intent="secondary" type="text"></BaseInput>
  <p>Email *</p>
  <BaseInput intent="secondary" type="email"></BaseInput>
  <p>Função</p>
  <BaseInput intent="secondary"></BaseInput>
  <p>Editar a senha</p>
  <BaseInput intent="secondary" type="password"></BaseInput>
  <Button intent="secondaryModal">Salvar</Button>
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