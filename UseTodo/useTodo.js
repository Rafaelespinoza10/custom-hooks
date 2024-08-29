import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const init = ()=>{
    const todosFromStorage = localStorage.getItem('todos');
    try {
        return JSON.parse(todosFromStorage) || [];
    } catch (error) {
        console.log('error parsing localstorage data', error);
        return[];
    }
}

export const useTodo = () => {

    const[todos, dispatchTodo] = useReducer(todoReducer, [], init);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos) || []);
        console.log(todos);
    },[todos]);

    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatchTodo(action);
    }

    const handleDeleteTodo = (id) =>{
        dispatchTodo({
            type: '[TODO] Delete Todo',
            payload: id,
        });
    }
    const handleToggleTodo = (id)=>{
        console.log(id);
        dispatchTodo({
            type: '[TODO] Done Todo', 
            payload: id, 
        })
    }

    return {
        todos, 
        handleNewTodo,
        handleDeleteTodo, 
        handleToggleTodo,
    }
}
