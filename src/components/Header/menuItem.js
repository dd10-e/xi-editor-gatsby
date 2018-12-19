import { Link } from 'gatsby'
import React from 'react'

const MenuItem = props => {
  return (
    <Link
      to={props.to}
      className="flex items-center no-underline text-base uppercase text-blue-darker mx-5 font-semibold witespace-no-wrap"
      activeClassName="border-green"
    >
      {props.title}
    </Link>
  )
}

export default MenuItem
