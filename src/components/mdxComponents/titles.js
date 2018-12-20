import React from 'react'
import 'styled-components/macro'

export const H1 = props => {
  return (
    <h1
      className={props.className}
      css="
      color: #24D06B
    "
    >
      {props.children}
    </h1>
  )
}

export const H2 = props => {
  return (
    <h2
      className={props.className}
      css="
        color: #20303A
        margin-top:  1rem
        margin-bottom:  1rem
    "
    >
      {props.children}
    </h2>
  )
}

export const H3 = props => {
  return (
    <h3
      className={props.className}
      css="
        color: #20303A
        margin-top:  1.5rem
        margin-bottom:  0.5rem
    "
    >
      {props.children}
    </h3>
  )
}

export const H4 = props => {
  return (
    <h4
      className={props.className}
      css="
      color: #20303A
      margin-top:  1.5rem
      margin-bottom:  0.5rem
    "
    >
      {props.children}
    </h4>
  )
}
