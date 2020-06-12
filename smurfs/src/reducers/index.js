import {
    GET_START,
    GET_SUCCESS,
    GET_FAILURE,
    POST_START,
    POST_SUCCESS,
    POST_FAILURE
} from '../actions/apiActions';

const initialState = {
    smurfs: [],
    isFetching: false,
    message: ''
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_START:
            return {
                ...state,
                isFetching: true
            };
        case GET_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            };
        case GET_FAILURE:
            return {
                ...state,
                message: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
};