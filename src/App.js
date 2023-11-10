//import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

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
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos=[]
  } else {
    parsedTodos=JSON.parse(localStorageTodos);
  }
  
  const[todos,setTodos]= React.useState(parsedTodos);
  const [searchValue,setSearchValue]= React.useState('');
  //console.warn(`Se esta buscando: ${searchValue}`)

  const completedTodos =todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;


  const searchedTodos =todos.filter((todo)=>{
    const todoText = todo.text.toLocaleLowerCase();
    const searchText =searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const saveTodos = (newTodos) =>{
    localStorageTodos.setItem('TODOS_V1',JSON.stringif(newTodos));
    setTodos(newTodos);
  };

  // const handleAddingTodos=(newTodo)=> {
  // }

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
