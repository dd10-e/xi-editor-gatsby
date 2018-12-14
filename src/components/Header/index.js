import { Link, withPrefix } from 'gatsby'
import React from 'react'

import SearchBar from './searchBar'
import MenuItem from './menuItem'
import config from '../../../config/site'

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      navActivated: false,
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState(previousState => ({
      navActivated: !previousState.navActivated,
    }))
  }

  render() {
    return (
      <header className="flex flex-col flex-no-shrink">
        <div className="bg-xi-blue-dark">
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="text-white no-underline flex items-center"
                >
                  <img
                    src={withPrefix(config.siteLogo)}
                    alt="logo"
                    className="w-8"
                  />
                  <p className="ml-4 font-thin text-xl text-white">
                    {config.siteTitle}
                  </p>
                </Link>
              </div>
              <div>
                <div className="flex absolute pin-t pin-r mt-4 mr-4 md:mt-0 md:relative">
                  <SearchBar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-xi-blue">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <nav className="-ml-2 pt-2">
                <MenuItem to="/" title="home" />
                <MenuItem to="/documentation/frontend-notes/" title="docs" />
                <MenuItem to="/gsoc/gsoc/" title="gsoc" />
                <MenuItem to="/contribute/" title="contribute" />
                <MenuItem to="/building-docs/" title="buildind docs" />
                <MenuItem to="/blog" title="blog" />
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
