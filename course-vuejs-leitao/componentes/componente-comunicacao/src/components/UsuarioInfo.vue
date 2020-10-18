<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome de usuário: {{ nomeInvertido() }}</p>
        <p>Idade é {{ idadeLocal }}</p>
        <button @click="reinicializarNome">Reinicializar Nome</button>
        <button @click="callback('valor1')">Reinicializar Nome (callback)</button>
    </div>
</template>
<script>
import barramento from '@/barramento'

export default {
    created() {
        barramento.$on('idadeMudou', idade => {
            this.idadeLocal = idade
        })
    },
    props: {
        nome: {
            type: String,
            required: true,
            default: 'Seu nome'
        },
        callback: Function,
        idade: Number
    },
    data() {
        return {
            idadeLocal: this.idade
        }
    },
    methods: {
        nomeInvertido() {
            return this.nome.split('').reverse().join('')
        },
        reinicializarNome() {
            this.$emit('nomeMudou', 'Pedro')
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
