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

  toggleCompleted = (key) => {
    
   

    this.setState({
      todoData: this.state.todoData.map(task => {
        if (key === task.id) {
          return {
            ...todoData,
            completed: !task.completed,
          };
        }
        return todoData
      })
    })
  }

  clearCompleted = (e) => {
    e.prevent.default()
    this.setState({
      todoData: this.state.todoData.filter(task => !task.completed)
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
          clearCompleted={this.clearCompleted}
        />
        
        
      </div>
    );
  }
}

export default App;
