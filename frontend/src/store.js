import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productReducers,
  productDetailsReducers,
} from "./reducers/productReducers";

import { authReducer, forgotPasswordReducer, userReducer } from "./reducers/userReducers";

const reducers = combineReducers({
  products: productReducers,
  productDetails: productDetailsReducers,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
