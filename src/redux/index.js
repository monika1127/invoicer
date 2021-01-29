import { combineReducers } from 'redux'
import invoicesReducer from './invoices/invoicesReducer'
import contractorsReducer from './contractors/contractorsReducer'

export default combineReducers({
    invoices: invoicesReducer,
    contractors: contractorsReducer
})