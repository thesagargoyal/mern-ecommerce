import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productReducers,
  productDetailsReducers,
} from "./reducers/productReducers";

import { authReducer } from "./reducers/userReducers";

const reducers = combineReducers({
  products: productReducers,
  productDetails: productDetailsReducers,
  auth: authReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
