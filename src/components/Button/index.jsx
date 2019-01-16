import React from 'react'

import './Button.css'

const Button = (props) => (
  <button className="component-button" {...props}>
    {props.children}
  </button>
)

export default Button
