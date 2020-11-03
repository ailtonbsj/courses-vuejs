import Stocks from '../../data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        buyStock({ commit }, order) {
            console.log(order)
            commit()
        },
        initStocks({ commit }) {
            console.log('calling stocks')
            commit('setStocks', Stocks)
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}