import {
    GET_CONTRACTORS,
    SET_ERRORS,
    ADD_CONTRACTOR}
    from './types';

export const getContractors = ()=> async dispatch => {
    try {
        const res = await fetch('http://localhost:5000/contractors')
        const data = await res.json()
        dispatch({
            type: GET_CONTRACTORS,
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
export const addContractor = (newContractorData, callback) => async dispatch => {
    try {
        const res = await fetch('http://localhost:5000/contractors',
            {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(newContractorData)
            })
        const data = await res.json()
        dispatch({
            type: ADD_CONTRACTOR,
            payload: data,
        },
            callback('Kontrahent został dodany', 'pass'))
    }
    catch (err) {
        dispatch({
            type: SET_ERRORS,
            payload: err
        },
        callback('Wystąpił błąd! Kontrahent nie został dodana', 'fail'))
    }
}
