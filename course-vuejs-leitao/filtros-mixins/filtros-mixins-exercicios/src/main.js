import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function(val) {
	return val.split('').reverse().join('')
})

Vue.mixin({
	created() {
		console.log('Mixin Global');
	}
})

new Vue({
	render: h => h(App)
}).$mount('#app')
