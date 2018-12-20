import React from 'react'
import 'styled-components/macro'

const Ul = props => {
  return (
    <ul
      className={props.className}
      css="
        line-height: 1.7;
        padding-left: 1.2em;
        a {
          color: #20303A;
          text-decoration: none;
        }
        a:hover {
          color: #24D06B;
        }
      "
    >
      {props.children}
    </ul>
  )
}

export default Ul
