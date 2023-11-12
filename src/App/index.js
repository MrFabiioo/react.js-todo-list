//import logo from './platzi.webp';
import React from 'react';
//import { useLocalStorage } from '../TodoContext/useLocalStorage';
import { AppUI } from './AppUI';
import {  TodoProvider } from '../TodoContext/TodoContext';
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
  
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
