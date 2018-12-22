import React from 'react'
import ThemeContext from '../store/contexts/themeContext'
import Footer from '../components/footer'

const FooterContainer = () => (
  <ThemeContext.Consumer>
    {({ theme }) => {
      return <Footer theme={theme} />
    }}
  </ThemeContext.Consumer>
)

export default FooterContainer
