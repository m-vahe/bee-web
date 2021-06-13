import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducers";

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;