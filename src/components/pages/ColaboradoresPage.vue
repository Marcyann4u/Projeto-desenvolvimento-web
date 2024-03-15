<template>
  <BaraLateral src="https://saclogistica.com.br/wp-content/uploads/2022/07/Almoxarifado-930x620.png"></BaraLateral>
  <TemplateProdutos></TemplateProdutos>
</template>

<script>
import { ref } from 'vue';
import BaseInput from '../reusable/BaseInput.vue';
import Button from '../reusable/Button.vue';
import BaraLateral from '../reusable/BaraLateral.vue';
import TemplateProdutos from '../reusable/TemplateProdutos.vue'

export default {
name: 'ForgotPassword',
components: {
BaseInput,
Button,
BaraLateral,
TemplateProdutos,
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

/* Media query for smaller screens */
@media screen and (max-width: 860px) {
}
</style>