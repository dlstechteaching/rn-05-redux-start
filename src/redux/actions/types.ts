import { DeleteTodoAction, FetchTodosAction } from ".";

export enum Actiontypes {
    fetchTodos,
    deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction