import { combineReducers } from 'redux'
import invoicesReducer from './invoices/invoicesReducer'
import contractorsReducer from './contractors/contractorsReducer'
import userReducer from './user/reducer'

export default combineReducers({
    invoices: invoicesReducer,
    contractors: contractorsReducer,
    user: userReducer
})