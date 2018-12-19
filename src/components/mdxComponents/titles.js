import React from 'react'

const Title = props => {
  return (
    <props.level className={props.className}>
      <span>{props.children}</span>
    </props.level>
  )
}

export default Title
