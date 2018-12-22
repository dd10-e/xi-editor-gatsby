import React from 'react'
import PropTypes from 'prop-types'

import ThemeContext from 'store/contexts/themeContext'
import Layout, { LayoutWithLeftNav } from 'components/layout'

const LayoutContainer = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return <Layout theme={theme}>{children}</Layout>
      }}
    </ThemeContext.Consumer>
  )
}

export const LayoutWithLeftNavContainer = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return <LayoutWithLeftNav theme={theme}>{children}</LayoutWithLeftNav>
      }}
    </ThemeContext.Consumer>
  )
}

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

LayoutWithLeftNavContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutContainer
