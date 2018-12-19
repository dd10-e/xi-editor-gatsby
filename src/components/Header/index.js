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
      <header className="flex flex-col flex-no-shrink border-t-4 border-green h-16 mb-32">
        <div className="bg-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="text-white no-underline flex items-center ml-2 md:ml-0"
                >
                  <p className="font-bold text-4xl text-blue-darker">
                    {config.siteTitle}
                  </p>
                </Link>
              </div>
              <div className="flex justify-between overflow-x-auto overflow-y-hidden mx-4 md:mx-0">
                <MenuItem to="/" title="home" />
                <MenuItem to="/documentation/frontend-notes/" title="docs" />
                <MenuItem to="/gsoc/gsoc/" title="gsoc" />
                <MenuItem to="/contribute/" title="contribute" />
                <MenuItem to="/building-docs/" title="buildind docs" />
                <MenuItem to="/blog" title="blog" />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
