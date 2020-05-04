import React from 'react';
import './Todo.css'

const Todo = props => {
  console.log(props)
  return (
    <div>
      <p onClick={props.toggleCompleted}>{props.todoData}</p>
    </div>
  )
}

export default Todo;