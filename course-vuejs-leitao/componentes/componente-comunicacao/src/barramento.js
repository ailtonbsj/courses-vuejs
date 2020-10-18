import Vue from 'vue'
export default new Vue({
    methods: {
        escutarMudancaDeIdade(callback) {
            this.$on('idadeMudou', callback)
        },
        mudarIdade(idade) {
            this.$emit('idadeMudou', idade)
        }
    }
})