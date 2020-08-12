import { FETCH_XRP_START, FETCH_XRP_SUCCESS } from '../actions'

const initialState = {
    marketData: [],
    isLoading: false,
    error: ""
}

export const xrpReducer = (state = initialState, action) =>{
    switch(action.type) {
        case FETCH_XRP_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case FETCH_XRP_SUCCESS:
            return {
                ...state,
                marketData: action.payload.current_price,
                isLoading: false,
                error: ""
            }
        default:
            return state
    }
}