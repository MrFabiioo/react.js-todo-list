import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import {TodoList} from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { StartsTodos } from '../StartsTodos/StartsTodos';
import { TodoContext } from '../TodoContext/TodoContext';
import React, { useContext } from 'react';

function AppUI(){
    const {loading,error,searchedTodos,completeTodos,deleteTodos}=useContext(TodoContext);
    return (
    <>
        <TodoCounter/>  
        <TodoSearch />      
            
                <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/> }
            {(!loading && searchedTodos.length ===0)&& <StartsTodos/>}
            {searchedTodos.map(todo=>(
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete ={()=>completeTodos(todo.text)}
                onDelete={()=>deleteTodos(todo.text)}
                />
            ))}
            </TodoList>  
        <CreateTodoButton/>
        </>
);
}

export {AppUI};