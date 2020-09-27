new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch: {
        resultado(curr, prev) {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
    computed: {
        resultado() {
            return this.valor == 37 ?
                'Valor Igual' :
                'Valor Diferente'
        }
    }
});