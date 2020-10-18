import Vue from 'vue'

export default new Vue({
    methods: {
        listeningUserChanged(callback) {
            this.$on('userChanged', callback)
        },
        emitUserChanged(user) {
            this.$emit('userChanged', user)
        }
    }
})