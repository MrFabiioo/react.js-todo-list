import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import {TodoList} from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import React from 'react';

function AppUI({completedTodos,totalTodos,searchValue,setSearchValue,searchedTodos,completeTodos,deleteTodos,loading,error}){
    return (
    <React.Fragment>
        <TodoCounter completed={completedTodos}  total={totalTodos} />
    
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    
        <TodoList>
        {loading && <p>Estamos cargando ...</p>}
        {error && <p>Desesperate, hay un erro en la APP </p> }
        {(!loading && searchedTodos.length ===0)&& <p>Crea tu pimer todo</p>}
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
        </React.Fragment>
);
}

export {AppUI};