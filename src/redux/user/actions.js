import { LOG_IN, LOG_OUT } from './types'

export const logIn = () => async dispatch => {
    try {
        const res = await fetch('http://localhost:5000/users')
        const data = await res.json()
        dispatch({
            type:LOG_IN,
            payload: data
        })
    }
    catch (err) {}
}

export const logOut = () => {
    return {
        type: LOG_OUT,
    }
}