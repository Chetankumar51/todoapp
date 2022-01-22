import React from 'react';
import { withRouter } from 'react-router-dom';


function TodoList(props) {

    const completeTodo = (index) =>{
        const todosCopy = [...props.todos] 
        todosCopy[index].completed = ! todosCopy[index].completed 
        props.settodos(todosCopy) 
    }

    const deleteTodo = (index) =>{
        const todosCopy = [...props.todos] 
        const filterTodos = todosCopy.filter((val,ind)=>{
            return ind!==index
        })
        props.settodos(filterTodos)
    }


  return (<div>

      {props.todos.length>0 ? props.todos.map((todo,index)=>{
          return <div key={index} >
              <span style={todo.completed ? {textDecoration: 'line-through'} : {}} >{todo.task}</span>

                <button onClick={()=>{completeTodo(index)}} >Completed</button>
                <button onClick={()=>{deleteTodo(index)}} >Delete</button>

                </div>
      }) : 'no todos'}

  
  

  </div>
  )
}

export default withRouter(TodoList);
