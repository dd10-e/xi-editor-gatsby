import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../contexts/themeContext'

// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.

class ThemeProvider extends React.Component {
  state = {
    theme: 'light',
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
