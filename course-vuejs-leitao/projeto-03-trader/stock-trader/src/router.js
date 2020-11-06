import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio'
import Stocks from './components/stocks/Stocks'

import { publicPath } from '../vue.config'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: publicPath,
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },
    ]
})