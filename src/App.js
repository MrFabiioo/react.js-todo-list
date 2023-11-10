//import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import {TodoList} from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
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

function useLocalStorage(itemName, initialValue){

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem('TODOS_V1',JSON.stringify(initialValue));
    parsedItem=[]
  } else {
    parsedItem=JSON.parse(localStorageItem);
  }
  const[item,setItem]=React.useState(parsedItem);
  const saveItem = (newItem) =>{
    localStorageItem.setItem('TODOS_V1',JSON.stringif(newItem));
    setItem(newItem);
  };
  return [saveItem, item]
}

function App() {

  
  const[todos,saveTodos]= useLocalStorage('TODOS_V1',[]);
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
