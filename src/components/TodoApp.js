import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { withRouter } from 'react-router-dom';


function TodoApp() {

const [todos,settodos] = useState([]) 
const [initialTodo,setinitialTodo] = useState({
    task: '',
    completed: false
})

  return <div>
      <AddTodo  todos={todos} settodos={settodos} initialTodo = {initialTodo} />
      <TodoList />
  </div>;
}

export default withRouter(TodoApp);
