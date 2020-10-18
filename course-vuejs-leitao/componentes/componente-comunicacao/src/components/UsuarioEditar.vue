<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade é {{ idadeLocal }}</p>
        <button @click="alterarIdade">Mudar idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        idade: Number,
    },
    data() {
        return {
            idadeLocal: this.idade
        }
    },
    methods: {
        alterarIdade() {
            this.idadeLocal = 30
            barramento.mudarIdade(this.idadeLocal)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
