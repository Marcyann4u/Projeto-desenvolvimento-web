<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal">
      <h2>Cadastrar Colaborador</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="nome" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="senha">Senha:</label>
          <input type="password" id="senha" v-model="senha" required>
        </div>
        <div class="form-group">
          <label for="tipo">Tipo:</label>
          <select id="tipo" v-model="tipo" required>
            <option value="FUNC">FUNC</option>
            <option value="ADM">ADM</option>
          </select>
        </div>
        <div class="form-group">
          <label for="nome_empresa">Nome da Empresa:</label>
          <input type="text" id="nome_empresa" v-model="nome_empresa" required>
        </div>
        <div class="modal-buttons">
          <button type="submit">Salvar</button>
          <button type="button" @click="closeModal">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      nome: '',
      email: '',
      senha: '',
      tipo: 'FUNC',
      nome_empresa: ''
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('save', {
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        tipo: this.tipo,
        nome_empresa: this.nome_empresa
      });
      this.closeModal();
    },
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal h2 {
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group select {
  width: calc(100% - 10px);
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.modal-buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-buttons button[type="submit"] {
  background: #247BA0;
  color: #fff;
}

.modal-buttons button[type="button"] {
  background: #bbb;
  color: #333;
}
</style>
