import { Link } from 'gatsby'
import React from 'react'

const MenuItem = props => {
  return (
    <Link
      to={props.to}
      className="inline-block no-underline text-base uppercase text-white font-semibold py-4 px-6 border-b-4 border-transparent hover:border-green"
      activeClassName="border-green"
    >
      {props.title}
    </Link>
  )
}

export default MenuItem
