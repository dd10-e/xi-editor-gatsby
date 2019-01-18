import React from 'react'
import Toggle from 'react-toggled'
import PropTypes from 'prop-types'

class ToggleButton extends React.Component {
  render() {
    const { theme, toggleTheme, toggleState } = this.props
    return (
      <Toggle>
        {({ on, getTogglerProps }) => (
          <div className="flex items-center">
            <span className="relative inline-block w-12 h-4">
              <input
                type="checkbox"
                aria-label="toggle theme"
                name="theme"
                className="w-full h-full"
                {...getTogglerProps()}
                onChange={toggleTheme}
              />
              <span className="absolute pin flex align-center h-full w-full pointer-events-none">
                <span
                  className={`flex-1 rounded-lg ${
                    toggleState ? `bg-orange` : `bg-blue-darker`
                  }`}
                />
                <span
                  className="absolute w-4 h-4 rounded-full bg-white"
                  style={{
                    transition: 'transform 0.2s',
                    transform: toggleState
                      ? 'translateX(2rem)'
                      : 'translateX(0rem)',
                  }}
                />
              </span>
            </span>
            <label
              htmlFor="theme"
              className={`ml-2 font-bold text-${theme.light.blueDarker ||
                theme.dark.blueDarker}`}
            >
              {toggleState ? 'Theme Dark' : 'Theme Light'}
            </label>
          </div>
        )}
      </Toggle>
    )
  }
}

ToggleButton.propTypes = {
  theme: PropTypes.object,
}

export default ToggleButton
