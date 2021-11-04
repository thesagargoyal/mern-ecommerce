import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/orderConstants";
import axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: CREATE_ORDER_REQUEST });

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/order/new", order, config);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};  

// currently logged in user orders
export const myOrders = () => async (dispatch)=>{
    
    dispatch({type: MY_ORDERS_REQUEST})
    
    try {
        const {data } = await axios.get('/api/v1/orders/me');
        dispatch({ type:MY_ORDERS_SUCCESS, payload: data.orders})

    } catch (error) {
        dispatch({type:MY_ORDERS_FAIL, payload: error.response.data.message})
    }
}

export const getOrderDetails = (id) => async (dispatch)=>{
    
  dispatch({type: ORDER_DETAILS_REQUEST})
  
  try {
      const {data } = await axios.get(`/api/v1/orders/${id}`);
      dispatch({ type:ORDER_DETAILS_SUCCESS, payload: data.orders})

  } catch (error) {
      dispatch({type:ORDER_DETAILS_FAIL, payload: error.response.data.message})
  }
}

//Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};