import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../contexts/themeContext'

const themes = {
  lightMode: {
    light: {
      green: 'green',
      greenLighter: 'green-lighter',
      greenLightest: 'green-lightest',
      blueDarker: 'blue-darker',
      white: 'white',
      indexGradient: `background: linear-gradient(#3efc9c 0%, #d9f1e3 100%);`,
    },
    dark: {},
  },
  darkMode: {
    dark: {
      orange: 'orange',
      orangeLighter: 'orange-lighter',
      orangeLightest: 'orange-lightest',
      blueDarker: 'blue-darker',
      blueDarkest: 'blue-darkest',
      purpleDarker: 'purple-darker',
      purpleDarkest: 'purple-darkest',
      indexGradient: `background: linear-gradient(#fff5eb 0%, #fcd9b6 100%);`,
    },
    light: {},
  },
}

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTheme = this.toggleTheme.bind(this)

    this.state = {
      theme: themes.lightMode,
      toggleTheme: this.toggleTheme,
      toggleState: false,
    }
  }

  toggleTheme() {
    this.setState({
      theme:
        this.state.theme === themes.lightMode
          ? themes.darkMode
          : themes.lightMode,
      toggleState: !this.state.toggleState,
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeProvider
