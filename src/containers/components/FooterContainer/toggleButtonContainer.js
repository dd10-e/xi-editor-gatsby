import React from 'react'

import ThemeContext from 'store/contexts/themeContext'
import ToggleButton from 'components/Footer/toggleButton'

const FooterContainer = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        return <ToggleButton theme={theme} toggleTheme={toggleTheme} />
      }}
    </ThemeContext.Consumer>
  )
}

export default FooterContainer
