/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { LOG_IN, LOG_OUT } from './types'

const initialState = {
    user: null,
    isLogged: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }
        case LOG_OUT:
            return {
                ...state,
                isLogged: false,
                user: null
            }
        default:
            return state;
    }
}
