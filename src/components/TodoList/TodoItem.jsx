import React from 'react'

import './TodoItem.css'

const TodoItem = (props) => (
    <li className="component-todoitem" {...props}>
      {props.children}
    </li>
  )
  
  export default TodoItem
