//import logo from './platzi.webp';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
// const defaultTodos =[
//   {text:'Cortar cebello',completed:true},
//   {text:'sacar reciclaje',completed:false},
//   {text:'leer 15 min ',completed:false},
//   {text:'hacer ejercicio',completed:false},
//   {text:'hacer guacamole',completed:true}
// ];

//localStorage.setItem('TODOS_V1', defaultTodos);

//localStorage.removeItem('TODOS_V1');


function App() {
  const{item:todos,setItem:saveTodos,error,loading}= useLocalStorage('TODOS_V1',[]);
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
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  )
};

export default App;
