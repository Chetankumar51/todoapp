import React from 'react';
import { withRouter } from 'react-router-dom';


function AddTodo(props) {

    const addTodo = () => {

      const todosCopy = [...props.todos]
      const index = todosCopy.findIndex((todo)=>{
          return todo.task === props.initialTodo.task
      })
      if(index === -1){
          todosCopy.push(props.initialTodo) 
          props.settodos(todosCopy)
      }else{
          console.log('Todos already exist');
      }
    }

    const handleChange=(event)=>{
        const initialTodosCopy = {...props.initialTodo} 
        initialTodosCopy.task = event.target.value 
        initialTodosCopy.completed = false 
    }


  return <div>
      <input type="text" onChange={(event)=>{handleChange(event)}} />
      <button onChange={()=>{addTodo()}} >ADD</button>
  </div>;
}

export default withRouter(AddTodo);
