import React from 'react'

import Button from '../components/Button'
import FlexRow from '../components/FlexRow'
import TextField from '../components/TextField'
import TodoList from '../components/TodoList'
import TodoItem from '../components/TodoList/TodoItem'
import MainWrapper from '../components/MainWrapper'

const TodoListView = (props) => (
  <MainWrapper>
    <form onSubmit={props.handleSubmit}>
      <FlexRow>
        <TextField
          value={props.newItem}
          onChange={props.handleChange}
        />
        <Button type="submit">Add</Button>
      </FlexRow>
    </form>
    <TodoList>
      {props.todos.length > 0 ?
        props.todos.map((todo) => (
          <TodoItem>{todo}</TodoItem>
        ))
        :
        <center><i>Add some items to the list</i></center>
      }
    </TodoList>
  </MainWrapper>
)

export default TodoListView
