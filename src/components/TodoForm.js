import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      task: "",
    }
  }

  handleChanges = e => {
    this.setState({
      task: e.target.value
    })
  }

  submitForm = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({
      task: ""
    })
  }


  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text" name="todo"
          onChange={this.handleChanges}
          value={this.state.task}
          placeholder="Enter new task"
        />
        <button className="add-btn">Add Todo</button>
        
      </form>
    )
  }
}

export default TodoForm