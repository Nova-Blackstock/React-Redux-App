import { FETCH_ADA_START, FETCH_ADA_SUCCESS } from '../actions'

const initialState = {
    marketData: [],
    isLoading: false,
    error: ""
}

export const adaReducer = (state = initialState, action) =>{
    switch(action.type) {
        case FETCH_ADA_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case FETCH_ADA_SUCCESS:
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