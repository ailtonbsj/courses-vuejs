import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('currency', value => {
	return value.toLocaleString('pt-BR', {
		minimumFractionDigits: 2,
		style: 'currency',
		currency: 'BRL'
	})
})

new Vue({
	vuetify,
	router,
	store,
	render: h => h(App),
}).$mount('#app')
