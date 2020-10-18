<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade é {{ idade }}</p>
        <button @click="alterarIdade">Mudar idade</button>
    </div>
</template>

<script>
export default {
    props: {
        idade: Number,
    },
    methods: {
        alterarIdade() {
            this.$emit('idadeCallback', 30)
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
