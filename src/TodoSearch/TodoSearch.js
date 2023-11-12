import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css'
import React, { useContext } from 'react';
function TodoSearch(){
    const{searchValue,setSearchValue}=useContext(TodoContext)
    return (
        <input value={searchValue} onChange={(event)=>{setSearchValue(event.target.value)}} className="TodoSearch" placeholder="Buscar TODOS"/>
    );  
}

export {TodoSearch};