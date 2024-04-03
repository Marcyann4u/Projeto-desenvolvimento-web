<template>
 <h1>Popups que usaremos :3</h1>
 <Modal 
 v-if="popupTriggers.buttonTrigger" 
 :TogglePopup="() => TogglePopup('buttonTrigger')">

<template v-slot:title>
  Cadastro de mercadoria
</template>
<template v-slot:corpse>
  <p>Código *</p>
  <BaseInput intent="secondary" type="number"></BaseInput>
  <p>Nome do produto *</p>
  <BaseInput intent="secondary" type="text"></BaseInput>
  <p>Descrição *</p>
  <BaseInput intent="secondary" type="text"></BaseInput>
  <p>Preço unitário *</p>
  <BaseInput intent="secondary" type="number"></BaseInput>
  <p>Categoria *</p>
  <BaseInput intent="secondary" type="text"></BaseInput>
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