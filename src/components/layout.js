import '../../output.css'

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/index'
import Footer from './footer'

const Layout = ({ children, centered }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="h-full w-full flex flex-col items-stretch font-sans">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
          role="main"
          className={`flex-1 ${centered ? 'container mx-auto' : ''}`}
        >
          {children}
        </main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool,
}

Layout.defaultProps = {
  centered: true,
}

export default Layout
