import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
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

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList todoData={this.state.todoData} />
        <TodoForm addTodo={this.addTodo} />
        
      </div>
    );
  }
}

export default App;
