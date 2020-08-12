import { combineReducers } from 'redux'

import { adaReducer } from './adaReducer'
import { xrpReducer } from './xrpreducer'

export const rootReducer = combineReducers({
    adaReducer,
    xrpReducer
})