import React from 'react'

import TodoListView from '../views/TodoListView'

class TodoListContainer extends React.Component {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      newItem: '',
      todos: []
    };
  }

  handleChange (event) {
    this.setState({
      ...this.state,
      newItem: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    
    if(this.state.newItem !== '')
      this.setState({
        ...this.state,
        newItem: '',
        todos: [...this.state.todos, this.state.newItem]
      })
  }

  render () {
    return (
      <TodoListView
        newItem={this.state.newItem}
        todos={this.state.todos}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default TodoListContainer
