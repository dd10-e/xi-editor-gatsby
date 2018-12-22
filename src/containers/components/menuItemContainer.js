import React from 'react'
import PropTypes from 'prop-types'

import ThemeContext from 'store/contexts/themeContext'
import MenuItem from 'components/Header/menuItem'

const MenuItemContainer = ({ to, title }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return <MenuItem theme={theme} to={to} title={title} />
      }}
    </ThemeContext.Consumer>
  )
}

MenuItemContainer.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
}

export default MenuItemContainer
