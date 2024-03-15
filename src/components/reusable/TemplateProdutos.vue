<!-- TemplateRegister.vue -->
<template>
    <div class="template__produtos__container">
        <div class="template__produtos__container--header">

            <div class="informacoes">
                <h1>Lista de Produtos</h1>
                <p>17 produtos cadastrados</p>
            </div>

            <div class="perfil">
                <a href="">
                    <img class="profileCover" src="../../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg" alt="" srcset="">
                </a>

            </div>
        </div>

        <div class="template__produtos__container--filter">
            <input type="text" placeholder="Nome ou código">
            <font-awesome-icon :icon="['fas', 'search']" class="icon-lupa" />

            <div class="filter">
                <font-awesome-icon :icon="['fas', 'filter']" class="icon-filetr" />
                <p>Filtro</p>
            </div>

            <button class="add-produto">
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
                <tr>
                    <td>123456</td>
                    <td>Batata Frita</td>
                    <td>Comida</td>
                    <td>Texto qualquer</td>
                    <td>R$12,70</td>
                    <td>45</td>
                    <td class="botoes-estoque">
                        <button><font-awesome-icon :icon="['fas', 'plus']" class="icon-decre-incre" /></button>
                        <button><font-awesome-icon :icon="['fas', 'minus']" class="icon-decre-incre" /></button>
                        <button><font-awesome-icon :icon="['fas', 'trash']" class="icon-decre-incre" /></button>
                        <button><font-awesome-icon :icon="['fas', 'edit']" class="icon-decre-incre" /></button>
                    </td>
                </tr>

                <tr>
                    <td>789012</td>
                    <td>Macarrão</td>
                    <td>Comida</td>
                    <td>Texto qualquer</td>
                    <td>R$6,78</td>
                    <td>26</td>
                    <td class="botoes-estoque">
                        <button><font-awesome-icon :icon="['fas', 'plus']" class="icon-decre-incre" /></button>
                        <button><font-awesome-icon :icon="['fas', 'minus']" class="icon-decre-incre" /></button>
                        <button><font-awesome-icon :icon="['fas', 'trash']" class="icon-decre-incre" /></button>
                        <button><font-awesome-icon :icon="['fas', 'edit']" class="icon-decre-incre" /></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TemplateProdutos'
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