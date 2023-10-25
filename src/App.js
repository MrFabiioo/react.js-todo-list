//import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
  <div ClassName="App">
    <TodoCounter />
    <TodoSearch/>

    <TodoList>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </TodoList>

    <CreateTodoButton/>
    </div>
  );
}

export default App;
