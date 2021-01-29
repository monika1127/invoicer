import {
    GET_INVOICES,
    SET_ERRORS,
    SET_LOADING,
    ADD_INVOICE}
    from './types';


export const setLoading = ()=>{
    return {
        type: SET_LOADING
    }
}

export const getInvoices = ()=> async dispatch => {
    try {
        setLoading()
        const res = await fetch('http://localhost:5000/invoices')
        const data = await res.json()
        dispatch({
            type: GET_INVOICES,
            payload: data
        })
    }
    catch(err) {
        dispatch({
            type: SET_ERRORS,
            payload: err
        })
    }
}