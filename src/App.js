//import logo from './platzi.webp';
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
  {text:'hacer ejercicio',completed:false},
  {text:'hacer guacamole',completed:true}
];


function App() {
  const[todos,setTodos]= React.useState(defaultTodos);
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
    setTodos(newTodos)
  }

  const deleteTodos= (text)=>{
    const newTodos =[...todos];
    const todoIndex=newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos)
  }
  return (
  <React.Fragment>
    <TodoCounter completed={completedTodos}  total={totalTodos} />

    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

    <TodoList>
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

export default App;
