import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App'
import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO! v
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6ImFpbHRvbiIsImVtYWlsIjoiYWlsdG9uWFhAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwNjkzNzYzOCwiZXhwIjoxNjA3MTk2ODM4fQ.aya72CyW2N8guMb_iCgWYiOda0cVNp-B7MASGP_Qpj4'
// TEMPORARIO! ^

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')