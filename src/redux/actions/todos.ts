import axios from "axios"
import { Dispatch } from "redux"
import { Todo } from "../types/todos";
import { Actiontypes } from "./types";

export interface FetchTodosAction {
    type: Actiontypes.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: Actiontypes.deleteTodo;
    payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);

        dispatch<FetchTodosAction>({
            type: Actiontypes.fetchTodos,
            payload: response.data
        });
    };
};

export const deleteTodo = (id:number): DeleteTodoAction => {
    return {
        type: Actiontypes.deleteTodo,
        payload: id
    };
};