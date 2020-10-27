import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://course-vuejs-leitao.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 't0k3n'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://course-vuejs-leitao.firebaseio.com/',
            // headers: {
            //     "Authorization": "abc123",
            //     get: {
            //         "Authorization": "abc123"
            //     }
            // }
        })

        Vue.prototype.$http.interceptors.request.use(
            config => {
                // console.log(config.method)
                return config
            },
            error => Promise.reject(error)
        )

        Vue.prototype.$http.interceptors.response.use(
            res => {
                const arr = []
                for(let chave in res.data) {
                    arr.push({ id: chave, ...res.data[chave] })
                }
                res.data = arr
                return res
            },
            error => Promise.reject(error)
        )
    }
})