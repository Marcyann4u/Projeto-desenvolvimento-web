<template>
    <div class="modal-overlay" v-if="isVisible">
        <div class="modal">
            <h2>Cadastrar Produto</h2>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="codigo">Código:</label>
                    <input type="text" id="codigo" v-model="codigo" required>
                </div>
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" v-model="nome" required>
                </div>
                <div class="form-group">
                    <label for="nome">Categoria:</label>
                    <input type="text" id="categoria" v-model="categoria" required>
                </div>
                <div class="form-group">
                    <label for="descricao">Descrição:</label>
                    <textarea id="descricao" v-model="descricao" required></textarea>
                </div>

                <div class="form-group">
                    <label for="preco">Preço:</label>
                    <input type="number" id="preco" v-model="preco" required min="0">
                </div>
                <div class="form-group">
                    <label for="estoque">Estoque:</label>
                    <input type="number" id="estoque" v-model="qtdunitaria" required min="0">
                </div>

                <div class="modal-buttons">
                    <button type="submit" class="btn-salvar"
                        @click="$emit('save', { 
                            codigo: codigo, 
                            nome: nome, 
                            categoria: categoria, 
                            descricao: descricao, 
                            preco: preco, qtdunitaria: 
                            qtdunitaria })">Salvar</button>
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
            codigo: '',
            nome: '',
            categoria: '',
            descricao: '',
            preco: '',
            qtdunitaria: ''
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