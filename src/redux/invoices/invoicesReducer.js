import {
    SET_ERRORS,
    GET_INVOICES,
    SET_LOADING,
    ADD_INVOICE
} from './types'

const initialState = {
    loading: false,
    error: null,
    invoicesList: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_INVOICES:
            return {
                ...state,
                invoicesList: action.payload,
                loading: false,
                error: null
            }
        case ADD_INVOICE:
            return {
                ...state,
                invoicesList: [...state.invoicesList, action.payload],
                loading: false,
                error: null
            }
        case SET_ERRORS:
            return {
                ...state,
                error: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}