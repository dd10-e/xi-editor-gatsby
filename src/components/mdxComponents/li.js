import React from 'react'
import 'styled-components/macro'

const Li = props => {
  return (
    <li
      className={props.className}
      css="
      color: red;
  "
    >
      {props.children}
    </li>
  )
}

export default Li
