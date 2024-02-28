<template>
    <div class="input-wrap">
        <label>{{ label }}</label>
        <input 
            type="text" 
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)" 
        />
    </div>
</template>

<script>
export default{
    props:{
        label:{
            type: String,
            default: "",
        },
        modelValue:{
            type: String,
            default: ""
        }
    }
}
</script>

<style scoped>
    .input-wrap{
        display: flex;
        flex-direction: column;
    }
    .input-wrap input{
        background-color: #DEDEDE;
        padding: 1rem 1rem;
        font-size: 0.8rem;
        border-radius: 0.5rem;
        border-color: transparent;
    }
</style>