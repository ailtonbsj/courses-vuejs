export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        buyStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(el => el.id == stockId)
            if (record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity
                })
            }

            state.funds -= stockPrice * quantity
        },
        sellStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(el => el.id == stockId)
            if(record.quantity > quantity) {
                record.quantity -= quantity
            } else {
               state.stocks.splice(state.stocks.indexOf(record), 1) 
            }
            state.funds += stockPrice * quantity
        }
    }
}