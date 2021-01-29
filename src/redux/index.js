import { combineReducers } from 'redux'
import invoicesReducer from './invoices/invoicesReducer'

export default combineReducers({
    invoices: invoicesReducer
})