import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import MenuItemContainer from 'containers/components/menuItemContainer'
import config from '../../../config/site'

class Header extends React.Component {
  render() {
    const theme = this.props.theme

    return (
      <header
        className={`flex flex-col flex-no-shrink border-t-2 border-green h-16 pb-32 bg-${
          theme.blackOrWhite
        }`}
      >
        <div>
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="text-white no-underline flex items-center ml-2 md:ml-0"
                >
                  <p
                    className={`font-bold text-4xl text-${
                      theme.secondaryDarker
                    }`}
                  >
                    {config.siteTitle}
                  </p>
                </Link>
              </div>
              <div className="flex justify-between overflow-x-auto overflow-y-hidden mx-4 md:mx-0">
                <MenuItemContainer to="/" title="home" />
                <MenuItemContainer
                  to="/documentation/frontend-notes/"
                  title="docs"
                />
                <MenuItemContainer to="/gsoc/gsoc/" title="gsoc" />
                <MenuItemContainer to="/contribute/" title="contribute" />
                <MenuItemContainer to="/building-docs/" title="buildind docs" />
                <MenuItemContainer to="/blog" title="blog" />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  theme: PropTypes.object,
}

export default Header
