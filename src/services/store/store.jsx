import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { initialStore } from "./initialStore";
import reducers from "../reducer";

const store = createStore(reducers, initialStore, applyMiddleware(thunk));

export default store;