<template>
    <div class="input-wrap">
        <label>{{ label }}</label>
        <input 
        :type="type"          
        :class="inputClass"  
        :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)" 
        />
    </div>
</template>

<script>
  import { computed } from 'vue';

  import { cva } from '../../../node_modules/class-variance-authority';

export default{
    props:{
        label:{
            type: String,
            default: "",
        },
        modelValue:{
            type: String,
            default: ""
        },
        type: {
      type: String,
      default: "text", 
    },
    intent: {
            type: String,
            validator: (val) => ['primary', 'secondary'].includes(val),
            default: 'primary',
        },
    },
    computed: {
        inputClass() {
            return cva('', {
                variants: {
                    inputClass: {
                        primary: 'primary',
                        secondary: 'secondary',
                    },
                },
            })({
                inputClass: this.intent,
            });
        },
}}
</script>

<style scoped>
    .input-wrap{
        display: flex;
        flex-direction: column;
    }
    .input-wrap input{
        filter: drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.25));
        font-size: 0.8rem;
        border-radius: 0.5rem;
        padding: 1rem;
    }
    .secondary{
        filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0)) !important;
        border-radius: 0.2rem !important;
        font-size: 0.8rem !important;
        padding: 0.5rem !important;
        background-color: transparent;
        border: 1px solid #ABABAB;
    }
    .primary{
        border-color: transparent;
        background-color: #DEDEDE;
    }
</style>