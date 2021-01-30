import {
    GET_INVOICES,
    SET_ERRORS,
    SET_LOADING,
    ADD_INVOICE
}
    from './types';


export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const getInvoices = () => async dispatch => {
    try {
        setLoading()
        const res = await fetch('http://localhost:5000/invoices')
        const data = await res.json()
        dispatch({
            type: GET_INVOICES,
            payload: data
        })
    }
    catch (err) {
        dispatch({
            type: SET_ERRORS,
            payload: err
        })
    }
}

export const addInvoice = (newInvoiceData, callback) => async dispatch => {
    try {
        const res = await fetch('http://localhost:5000/invoices',
            {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(newInvoiceData)
            })
        const data = await res.json()
        dispatch({
            type: ADD_INVOICE,
            payload: data,
        },
            callback('Faktura została dodana', 'pass'))
    }
    catch (err) {
        dispatch({
            type: SET_ERRORS,
            payload: err
        },
        callback('Wystąpił błąd! Faktura nie została dodana', 'fail'))
    }
}

// export const addInvoice = (values, callback) => async dispatch => {
//     // twoj callback to setAlert
//     // try / catch
//     wysylamy dane:
//         - jesli OK, wtedy w naszej odpowiedzi mamy nowa fakture -> oglaszamy ADD_INVOICE i callback('udalo sie dodac', 'success')
//         - jesli NOK, wtedy oglaszmay SET_ERRORS i error callback('nok', 'fail')
// }