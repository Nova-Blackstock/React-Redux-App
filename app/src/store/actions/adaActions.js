import axios from 'axios'

export const FETCH_ADA_START = 'FETCH_ADA_START'
export const FETCH_ADA_SUCCESS = 'FETCH_ADA_SUCCESS'
export const fetchADA = () => (dispatch) =>{
    dispatch({type: FETCH_ADA_START})

    axios.get('https://api.coingecko.com/api/v3/coins/cardano')
    .then(res =>{
        console.log(res.data.market_data)
        dispatch({ type: FETCH_ADA_SUCCESS, payload: res.data.market_data })
    })
    .catch(err =>{
        debugger
    })

    const thunk = (store) => (next) => (action) =>{
        if (typeof action === "object"){
            next(action);
        }else if(typeof action === 'function'){
            action(store.dispatch)
        }
    }
}