import React from 'react'
import PropTypes from 'prop-types'

import ToggleButtonContainer from 'containers/components/FooterContainer/toggleButtonContainer'

const Footer = ({ theme }) => (
  <footer
    className={`flex-no-shrink h-32 w-full relative pt-16 px-4 bg-${
      theme.primaryLighter
    }`}
  >
    <div
      className={`text-xs pin flex justify-between items-center h-full container mx-auto text-${
        theme.secondaryDarker
      }`}
    >
      <p>
        See the{' '}
        <a
          href="https://github.com/xi-editor/xi-editor"
          className={`font-semibold text-${theme.secondaryDarker} hover:text-${
            theme.primary
          }`}
        >
          GitHub Project
        </a>
      </p>
      <div>
        <ToggleButtonContainer />
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  theme: PropTypes.object,
}

export default Footer
