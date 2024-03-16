<template>
  
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

},
data() {
return {
  firstName: ref(''),
  displayText: '', // Add a new property for displaying text
};
},
methods: {
updateText() {
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