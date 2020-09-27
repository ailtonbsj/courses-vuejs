new Vue({
	el: '#desafio',
	data: {
		enableEfeito1 : false,
		enableEfeito2 : false,
		classe1: 'classe1',
		classe2: 'classe2',
		userClass: '',
		userClass2: '',
		userEnable: false,
		userStyle: '',
		progress: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				if(this.enableEfeito1) {
					this.enableEfeito1 = true
					this.enableEfeito2 = false
				} else {
					this.enableEfeito1 = false
					this.enableEfeito2 = true
				}
				this.enableEfeito1 = !this.enableEfeito1
				this.enableEfeito2 = !this.enableEfeito2
			}, 1000)
		},
		iniciarProgresso() {
			setTimeout(() => {
				this.progress++
				if(this.progress < 100) this.iniciarProgresso()
			}, 50)
		}
	}
})
