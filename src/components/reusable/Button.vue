<template>
    <button :class="buttonClass" :disabled="disabled">
      
      
      <slot></slot>
      <img v-if="close" src="../imgs/61155.png">
    </button>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { cva } from '../../../node_modules/class-variance-authority';
  
  export default {
    props: {
      close: {
        type: Boolean,
        default: false,
      },
      intent: {
        type: String,
        validator: (val) => ['primary', 'secondary', 'danger', 'gray', 'close', 'primaryModal', 'secondaryModal', 'dangerModal'].includes(val),
        default: 'secondary',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      buttonClass() {
        return cva('', {
          variants: {
            intent: {
              primary: 'default primary',
              secondary: 'default secondary',
              danger: 'default danger',
              gray: 'default',
              close: 'default close',
              primaryModal: 'default primary modalstyle',
              secondaryModal: 'default secondary modalstyle',
              dangerModal: 'default danger modalstyle',
              grayModal: 'default modalstyle',

            },
            disabled: {
              true: 'disabled',
            },
          },
        })({
          intent: this.intent,
          disabled: this.disabled,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .default{
    cursor: pointer;
    filter: drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.25));
    padding: 1rem 1rem;
    border-radius: 0.2rem;
    border-color: transparent;
    font-size: 20px;
    opacity: 1;
    transition: opacity 1s ease 0s;
  }
  .default:hover{
    opacity: 0.65;  
  }
  .modalstyle{
    font-size: 16px;
    padding: 0.5rem 1rem;
    align-self: flex-start;
  }
  .primary{
    background-color: #006494;
    color: #fff;
  }
  .secondary {
    background-color: #1B98E0;
    color: #fff;
  }
  .danger{
    background-color: rgb(216, 18, 18);
    color: #fff;
  }
  .gray{
    background-color: #959595;
  }
  
  .disabled {
    background-color: rgb(128, 128, 128) !important;
    cursor: not-allowed;
  }

  a{
    color: black;
    text-decoration: none;
  }
  .close{
    padding: 0;
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25));
    background-color: transparent;
  }
  img{
    width: 16px;
  }

  </style>
  