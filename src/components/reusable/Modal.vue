<template>
    <div class="modal">
        <div class="modal-inner">
            <div class="modal-title">
                <slot class="title" name="title"></slot>
                <Button intent="close" close @click="TogglePopup()"></Button>
            </div>
            <div class="corpse">
                <slot name="corpse"></slot>
            </div>
        </div>
    </div>

</template>

<script>
import Button from '../reusable/Button.vue';

export default{
    components:{
        Button,
    },
    props:['TogglePopup']
}
</script>

<style scoped>
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal-inner{
        border-radius: 0.15rem;
        padding: 1rem 0rem;
        min-width: 400px;
        background-color: white;
        
        display: flex;
        flex-direction: column;
    }
    .modal-title{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        border-bottom: 1px solid #ABABAB;
    }
    .modal-title{
        font-size: 1.5rem;
    }
    .corpse{
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
</style>