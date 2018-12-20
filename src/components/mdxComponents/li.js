import React from 'react'
import 'styled-components/macro'

const Li = props => {
  return (
    <li
      className={props.className}
      css="
    
  "
    >
      {props.children}
    </li>
  )
}

export default Li
