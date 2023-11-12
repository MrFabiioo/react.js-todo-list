import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function  TodoProvider({children}){
    const{item:todos,saveItem:saveTodos,error,loading}= useLocalStorage('TODOS_V1',[]);
    const [searchValue,setSearchValue]= React.useState('');
    //console.warn(`Se esta buscando: ${searchValue}`)

    const completedTodos =todos.filter(todo=>!!todo.completed).length;
    const totalTodos=todos.length;


    const searchedTodos =todos.filter((todo)=>{
        const todoText = todo.text.toLocaleLowerCase();
        const searchText =searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
    });

    const completeTodos= (text)=>{
        const newTodos =[...todos];
        const todoIndex=newTodos.findIndex(
        (todo) => todo.text === text
        );
        newTodos[todoIndex].completed=true;
        saveTodos(newTodos)
    }

    const deleteTodos= (text)=>{
        const newTodos =[...todos];
        const todoIndex=newTodos.findIndex(
        (todo) => todo.text === text
        );
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos)
    }
    return(
        <TodoContext.Provider value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodos,
        deleteTodos,
        loading,
        error}}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider}