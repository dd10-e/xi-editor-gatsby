import '../../output.css'

import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header/index'
import Footer from './footer'
import SEO from './SEO'

const Layout = ({ children, centered }) => (
  <div className="h-full w-full flex flex-col items-stretch font-sans">
    <SEO />
    <Header />
    <main
      role="main"
      className={`flex-1 ${centered ? 'container mx-auto' : ''}`}
    >
      {children}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool,
}

Layout.defaultProps = {
  centered: true,
}

export default Layout
