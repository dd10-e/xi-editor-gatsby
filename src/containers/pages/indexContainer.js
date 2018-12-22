import React from 'react'
import ThemeContext from 'store/contexts/themeContext'
import { IndexPage } from 'pages/index'

const IndexPageContainer = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return <IndexPage theme={theme} />
      }}
    </ThemeContext.Consumer>
  )
}

export default IndexPageContainer
