import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext/TodoContext";



function TodoForm(){
    const {setOpenModal,addTodo} = React.useContext(TodoContext);
    const [newTodoValue,setNewTodoValue] = React.useState('');
    const onSubmit =(event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }
    const onCancel=()=>{
        setOpenModal(false);
    }
    const onChange=(event)=>{
        setNewTodoValue(event.target.value);
    }
    return(
        <form>
            <label>Escribe tu nuevo TODO</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="cortarcebolla">
                
            </textarea>
            <div className="TodoForm-ButtonContainer">
            <button onClick={onCancel} type="submit" className="TodoForm-button TodoForm-button--cancel">Cancelar </button>
            <button onClick={onSubmit} type="submit" className="TodoForm-button TodoForm-button--add">Agregar todo</button>
            </div>
        </form>
    );
}

export{TodoForm};