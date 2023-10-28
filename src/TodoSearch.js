import './styles/TodoSearch.css'
import React from 'react';
function TodoSearch({searchValue,setSearchValue}){
    
    return (
        <input value={searchValue} onChange={(event)=>{setSearchValue(event.target.value)}} className="TodoSearch" placeholder="Buscar TODOS"/>
    );  
}

export {TodoSearch};