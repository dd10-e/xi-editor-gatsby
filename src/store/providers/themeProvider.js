import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../contexts/themeContext'

// Primary = green
// Secondary = blue

const themes = {
  light: {
    primary: 'green',
    primaryLighter: 'green-lighter',
    primaryLightest: 'green-lightest',
    secondaryDarker: 'blue-darker',
    blackOrWhite: 'white',
    indexGradient: `background: linear-gradient(#3efc9c 0%, #d9f1e3 100%);`,
  },
  dark: {
    primary: 'orange',
    primaryLighter: 'orange-lighter',
    primaryLightest: 'orange-lightest',
    secondaryDarker: 'purple',
    blackOrWhite: 'black',
    indexGradient: `background: linear-gradient(#fff5eb 0%, #fcd9b6 100%)`,
  },
}

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTheme = this.toggleTheme.bind(this)

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
  }

  toggleTheme() {
    this.setState({
      theme: this.state.theme === themes.light ? themes.dark : themes.light,
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
