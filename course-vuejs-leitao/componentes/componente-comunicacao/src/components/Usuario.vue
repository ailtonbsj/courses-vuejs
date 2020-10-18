<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <button @click="alterarNome">Alterar Nome</button>
        <p>Nome: <strong>{{ nome }}</strong></p>
        <p>Idade é {{ idade }}</p>
        <hr>
        <div class="componentes">
            <app-usuario-info :idade="idade" :nome="nome" @nomeMudou="nome = $event" :callback="reiniciaNome" />
            <app-usuario-editar :idade="idade" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Pedro',
            idade: 20
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Ana'
        },
        reiniciaNome(args) {
            console.log(args)
            this.nome = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
