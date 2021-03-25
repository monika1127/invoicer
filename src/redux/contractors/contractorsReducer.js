import {
    SET_ERRORS,
    GET_CONTRACTORS,
    ADD_CONTRACTOR
} from './types'

const initialState = {
    loading: false,
    error: null,
    contractorsList: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTRACTORS:
            return {
                ...state,
                contractorsList: action.payload,
                loading: false,
                error: null
            }
        case ADD_CONTRACTOR:
            return {
                ...state,
                contractorsList: [action.payload, ...state.contractorsList],
                loading: false,
                error: null
            }
        case SET_ERRORS:
            return {
                ...state,
                error: 'blad'
            }
        default:
            return state;
    }
}
