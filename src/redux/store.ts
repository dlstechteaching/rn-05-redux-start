import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { Todo } from "./actions";
import { todosReducer } from "./reducers/todos";

export interface StoreState {
    todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer
}); 

const middleware = applyMiddleware(thunk);

export const store = createStore(reducers, middleware);
