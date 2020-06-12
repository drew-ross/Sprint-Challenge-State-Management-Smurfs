import axios from 'axios';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';
export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

const API_URL = 'http://localhost:3333/smurfs';

export const getData = () => dispatch => {
    dispatch({ type: GET_START });
    axios
        .get(API_URL)
        .then(res => dispatch({ type: GET_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_FAILURE, payload: err }));
};

export const postData = postData => dispatch => {
    dispatch({ type: GET_START });
    axios
        .post(API_URL, postData)
        .then(res => {
            dispatch({ type: GET_SUCCESS, payload: res.data });
            getData();
        })
        .catch(err => dispatch({ type: GET_FAILURE, payload: err }));
};