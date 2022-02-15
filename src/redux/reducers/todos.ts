import {  Todo } from "../actions";
import { Action, Actiontypes } from "../actions/types";

export const todosReducer = (
    state: Todo[] = [], 
    action: Action
) => {
    switch (action.type) {
        case Actiontypes.fetchTodos:
            return action.payload;
        case Actiontypes.deleteTodo:
            return state.filter((todo: Todo) => todo.id !== action.payload);
        default:
            return state;
    }
}