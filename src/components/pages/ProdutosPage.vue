<template>
    <BaraLateral src="https://saclogistica.com.br/wp-content/uploads/2022/07/Almoxarifado-930x620.png"></BaraLateral>
    <TemplateProdutos></TemplateProdutos>
</template>

<script>
import { ref } from 'vue';
import BaraLateral from '../reusable/BaraLateral.vue';
import TemplateProdutos from '../reusable/TemplateProdutos.vue'

export default {
    name: 'ForgotPassword',
    components: {
        BaraLateral,
        TemplateProdutos,
    },
    data() {
    },
    methods: {
    },
};
</script>

<style scoped>
/* Media query for smaller screens */
@media screen and (max-width: 860px) {}
</style>