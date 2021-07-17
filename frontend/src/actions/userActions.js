import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAIL, CLEAR_ERRORS } from '../constants/userConstants';

export const login = (email, password) => async (dispatch) =>{
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/v1/login', { email, password }, config)
        dispatch({ type: LOGIN_SUCCESS, data })

    } catch (error) {
        dispatch({ type: LOGIN_FAIL, error: error.message });
    }
}

// Clear errors
  export const clearErrors = (id) => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };