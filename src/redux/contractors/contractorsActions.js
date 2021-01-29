import {
    GET_CONTRACTORS,
    SET_ERRORS,
    SET_LOADING,
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