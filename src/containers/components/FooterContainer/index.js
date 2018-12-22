import React from 'react'

import ThemeContext from 'store/contexts/themeContext'
import Footer from 'components/Footer'

const FooterContainer = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        return <Footer theme={theme} toggleTheme={toggleTheme} />
      }}
    </ThemeContext.Consumer>
  )
}

export default FooterContainer
