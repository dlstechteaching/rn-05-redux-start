import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./src/redux/store";

export default createStore(reducers, applyMiddleware(thunk));
