import React from 'react'

import './MainWrapper.css'

const MainWrapper = (props) => (
  <div className="component-mainwrapper">
    {props.children}
  </div>
)

export default MainWrapper
