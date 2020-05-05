import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData,
    }
  }

  addTodo = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todoData: [...this.state.todoData, newTask]
    })
  }

  toggleCompleted = (clickedId) => {
    const newTodoList = this.state.todoData.map((item) => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    })
    this.setState({
      todoData: newTodoList
    })
    
  }

  clearCompleted = () => {
    const uncompletedTodos = this.state.todoData.filter(todo => todo.completed === false)
    
    
    this.setState({
      ...this.state,
      todoData: uncompletedTodos
    })
  }

 

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo} />

        <TodoList
          todoData={this.state.todoData}
          toggleCompleted={this.toggleCompleted}
          deleteTodo={this.deleteTodo}
        />
        
        <button className="clear-btn" onClick={this.clearCompleted} >Clear Completed</button>
      </div>
    );
  }
}

export default App;
