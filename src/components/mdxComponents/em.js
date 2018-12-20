import React from 'react'
import 'styled-components/macro'

const Em = props => {
  return (
    <em
      className={props.className}
      css="
        display: block
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 2rem;
      "
    >
      {props.children}
    </em>
  )
}

export default Em
