import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, CLEAR_ERRORS } from '../constants/userConstants';

export const login = (email, password) => async (dispatch) =>{
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/v1/login', { email, password }, config)
        dispatch({ type: LOGIN_SUCCESS, payload: data.user })

    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
}

export const register= (userData) => async (dispatch) =>{
    try {
        dispatch({ type: REGISTER_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post('/api/v1/register', userData, config)
        dispatch({ type: REGISTER_SUCCESS, payload: data.user })

    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
    }
}


// Clear errors
  export const clearErrors = (id) => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };