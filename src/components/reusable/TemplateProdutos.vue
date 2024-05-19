<!-- TemplateRegister.vue -->
<template>
    <div class="template__produtos__container">
        <div class="template__produtos__container--header">
            <div class="informacoes">
                <h1>Lista de Produtos</h1>
                <p v-if="produtos.length > 0">Exibindo {{ produtos.length }} produtos</p>
            </div>

            <div class="perfil">
                <a href="">
                    <img class="profileCover" src="../../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg" alt="" srcset="">
                </a>
            </div>
        </div>

        <div class="template__produtos__container--filter">
            <input type="text" placeholder="Nome ou código" v-model="filtro">
            <font-awesome-icon :icon="['fas', 'search']" class="icon-lupa" />

            <div class="filter">
                <font-awesome-icon :icon="['fas', 'filter']" class="icon-filetr" />
                <p>Filtro</p>
            </div>

            <button class="add-produto" @click="addProduto()">
                <font-awesome-icon :icon="['fas', 'plus']" class="icon-mais" />
                Produto
            </button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="produto in produtos" :key="produto.id">
                    <td>{{ produto.codigo }}</td>
                    <td>{{ produto.nome }}</td>
                    <td>{{ produto.categoria }}</td>
                    <td>{{ produto.descricao }}</td>
                    <td>R${{ produto.preco }}</td>
                    <td>{{ produto.estoque }}</td>
                    <td class="botoes-estoque">
                        <button @click="acrescentar(produto)">
                            <font-awesome-icon :icon="['fas', 'plus']" class="icon-decre-incre" />
                        </button>
                        <button @click="decrementar(produto)">
                            <font-awesome-icon :icon="['fas', 'minus']" class="icon-decre-incre" />
                        </button>
                        <button @click="deletarProduto(produto.id)">
                            <font-awesome-icon :icon="['fas', 'trash']" class="icon-decre-incre" />
                        </button>
                        <button><font-awesome-icon :icon="['fas', 'edit']" class="icon-decre-incre" /></button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="!produtos.length">
            <p>Nenhum produto encontrado.</p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'TemplateProdutos',
    setup() {
        const produtos = ref([
            {
                id: 1,
                codigo: "123456",
                nome: "Batata Frita",
                categoria: "Comida",
                descricao: "Batatas fritas crocantes e douradas, temperadas com sal e especiarias.",
                preco: 12.70,
                estoque: 45,
            },
            {
                id: 2,
                codigo: "789012",
                nome: "Macarrão",
                categoria: "Comida",
                descricao: "Macarrão tipo espaguete com molho de tomate caseiro.",
                preco: 6.78,
                estoque: 26,
            },
            {
                id: 3,
                codigo: "345678",
                nome: "Pizza",
                categoria: "Comida",
                descricao: "Pizza de mussarela com tomate e orégano.",
                preco: 25.00,
                estoque: 15,
            },
            {
                id: 4,
                codigo: "901234",
                nome: "Refrigerante",
                categoria: "Bebida",
                descricao: "Refrigerante de cola 2L.",
                preco: 5.00,
                estoque: 50,
            },
        ]);

        const addProduto = () =>{
            const  id = prompt("Id do produto");
            const  codigo = prompt("Código do produto");
            const  nome = prompt("Nome do produto");
            const  categoria = prompt("Categoria do produto");
            const descricao = prompt("Descrição do produto")
            const  preco = prompt("Preço do produto");
            const  estoque = prompt("Quantidade do produto em estoque:");

            const produto = {
                id: id,
                codigo: codigo,
                nome: nome,
                categoria: categoria,
                descricao: descricao,
                preco, preco,
                estoque: estoque
            }

            produtos.value.push(produto)
        }

        const deletarProduto = (id) => {
            produtos.value = produtos.value.filter(produto => produto.id !== id);
        };

        const acrescentar = (produto) => {
            produto.estoque++;
        };

        const decrementar = (produto) => {
            if(produto.estoque > 0){
                produto.estoque--;
            }
            else{
                produto.estoque = 0;
            }
        };

        return {
            produtos, // Make sure to return the produtos ref
            filtro: '', // Optional filter string
            deletarProduto,
            acrescentar,
            decrementar,
            addProduto
        };
    }
}
</script>

<style scoped>
* {
    background-color: #ebfcf8;
    color: #040404;
}

.template__produtos__container {
    width: 70vw;
    padding: 20px 25px;
}

.template__produtos__container--header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}


.template__produtos__container--header h1 {
    font-weight: bold;
}

.perfil {
    display: flex;
    justify-content: end;
    width: 30%;
}

.perfil a:hover {
    background-color: transparent;
}

.perfil img {
    width: 80px;
    height: 80px;
    border-radius: 300px;
}

.template__produtos__container--filter {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    height: 60px;
    border-radius: 10px;
    position: relative;
    margin-top: 20px;
}

.template__produtos__container--filter input {
    margin-left: 10px;
    height: 70%;
    width: 240px;
    border: 1px solid #ABABAB;
    outline: none;
    border-radius: 15px;
    background-color: #fff;
    padding-left: 10px;
}

.icon-lupa {
    background-color: transparent;
    position: absolute;
    left: 220px;
}

.filter {
    background-color: #fff;
    font-size: 18px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 80%;
    width: 70px;
}

.filter p {
    background-color: #fff;
}

table {
    margin-top: 40px;
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 8px 16px;
    text-align: left;
}

th {
    font-weight: bold;
    border-bottom: 1.5px solid #ABABAB;
}

/* Borda inferior em todas as células */
td {
    border-bottom: 1px solid #ddd;
}

.botoes-estoque{
    display: flex;
    justify-content: space-evenly;
}

.botoes-estoque button{
    cursor: pointer;
    font-size: 18px;
    border: none;
}

.font-awesome-icon{
    background-color: transparent;
}

.icon-decre-incre:hover{
    color: #188068;
}

.add-produto{
    margin-left: 410px;
    height: 80%;
    background-color: #13293D;
    color: #fff;
    border: none;
    border-radius: 15px;
    transition: all .3s ease-in;
}

.add-produto:hover{
    background-color: #1d3f5e;
    cursor: pointer;
}

.icon-mais{
    color: #fff;
    background-color: transparent;
}
</style>