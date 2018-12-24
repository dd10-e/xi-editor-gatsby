import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

const MenuItem = ({ to, title, theme }) => {
  return (
    <Link
      to={to}
      className={`flex items-center no-underline text-base uppercase text-blue-darker mx-5 font-semibold witespace-no-wrap text-${theme
        .light.blueDarker || theme.dark.blueDarker}`}
      activeClassName="border-green"
    >
      {title}
    </Link>
  )
}

MenuItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.object,
}

export default MenuItem
