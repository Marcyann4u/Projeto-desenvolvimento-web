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
                    <label for="password">Senha:</label>
                    <input type="password" id="password" v-model="password" required></input>
                </div>

                <div class="form-group">
                    <label for="is_gerente">Tipo de permissão - [1] para Gerente [0] para funcionário</label>
                    <input type="text" id="is_gerente" v-model="is_gerente">
                </div>
                <div class="form-group">
                    <label for="empresa_id">Id da empresa:</label>
                    <input type="number" id="empresa_id" v-model="empresa_id" required min="0">
                </div>

                <div class="modal-buttons">
                    <button type="submit" class="btn-salvar" @click="$emit('save', {
        nome: nome,
        email: email,
        password: password,
        is_gerente: is_gerente, empresa_id:
            empresa_id
    })">Salvar</button>
                    <button type="button" @click="closeModal" class="btn-cancelar">Cancelar</button>
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
            password: '',
            is_gerente: '',
            empresa_id: ''
            // Adicione outros campos do formulário aqui
        };
    },
    methods: {
        handleSubmit() {
            // Lógica para enviar o formulário de cadastro de produto
            // ...
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
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    border: 1.5px solid #247BA0;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 450px;
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

.form-group input {
    width: calc(100% - 10px);
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
}

.form-group textarea {
    outline: none;
    width: calc(100% - 10px);
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    resize: none;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

.modal-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 2%;
}

.modal-buttons button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-salvar {
    background-color: #247BA0;
    color: #fff;
}

.btn-cancelar {
    background-color: #bbb;
    color: #333;
}
</style>