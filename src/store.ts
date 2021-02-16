import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(allReducers, applyMiddleware(thunk));

export type AllReducerType = ReturnType<typeof allReducers>;

export default store;
