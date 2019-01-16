import React from 'react'

import './TodoList.css'

const TodoList = (props) => (
  <ul className="component-todolist" {...props}>
    {props.children}
  </ul>
)

export default TodoList
