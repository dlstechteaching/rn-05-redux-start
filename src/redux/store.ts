import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./reducers/todos";
import { Todo } from "./types/todos";

export interface StoreState {
    todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer
}); 

const middleware = applyMiddleware(thunk);

export const store = createStore(reducers, middleware);
