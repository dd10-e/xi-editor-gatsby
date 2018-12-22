import React from 'react'

import ThemeContext from 'store/contexts/themeContext'
import Header from 'components/Header'

const HeaderContainer = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return <Header theme={theme} />
      }}
    </ThemeContext.Consumer>
  )
}

export default HeaderContainer
