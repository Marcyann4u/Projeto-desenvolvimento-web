<template>
    <button :class="buttonClass" :disabled="disabled">
      <slot></slot>
    </button>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { cva } from '../../../node_modules/class-variance-authority';
  
  export default {
    props: {
      intent: {
        type: String,
        validator: (val) => ['primary', 'secondary', 'danger', 'gray'].includes(val),
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
      padding: 1rem;
      border-radius: 0.5rem;
      border-color: transparent;
      font-size: 20px;
      opacity: 1;
transition: opacity 1s ease 0s;
  }
  .default:hover{
    opacity: 0.65;  
  }
  .primary{
    background-color: #006494;
    color: #fff;
  }
  .secondary {
    background-color: rgb(0, 179, 179);
    color: #fff;
  }
  .danger{
    background-color: rgb(216, 18, 18);
    color: #fff;
  }
  
  .disabled {
    background-color: rgb(128, 128, 128) !important;
    cursor: not-allowed;
  }

  a{
    color: black;
    text-decoration: none;
  }
  </style>
  