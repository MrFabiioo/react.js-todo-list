import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import {TodoList} from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { StartsTodos } from '../StartsTodos/StartsTodos';
import React from 'react';

function AppUI({completedTodos,totalTodos,searchValue,setSearchValue,searchedTodos,completeTodos,deleteTodos,loading,error}){
    return (
    <React.Fragment>
        <TodoCounter completed={completedTodos}  total={totalTodos} />
    
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    
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
        </React.Fragment>
);
}

export {AppUI};