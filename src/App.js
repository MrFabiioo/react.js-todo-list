//import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos =[
  {text:'Cortar cebello',completed:true},
  {text:'sacar reciclaje',completed:false},
  {text:'leer 15 min ',completed:false},
  {text:'hacer ejercicio',completed:false}
];
function App() {
  return (
  <React.Fragment>
    <TodoCounter completed={16}  total={26} />

    <TodoSearch/>

    <TodoList>
      {defaultTodos.map(todo=>(
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}  
        />
      ))}
    </TodoList>

    <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
