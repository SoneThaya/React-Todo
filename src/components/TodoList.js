// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = props => {
  console.log(props)
  return (
    <div className='todo-list'>
      {
        props.todoData.map(item => (
          <Todo
            key={item.id}
            todoData={item.task}
            toggleCompleted={props.toggleCompleted}
            completed={item.completed}
            deleteTodo={props.deleteTodo}
            item={item}
          />
        ))
      }
      
    </div>
  )
}

export default TodoList;