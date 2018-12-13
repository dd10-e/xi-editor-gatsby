import '../../output.css'

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, withPrefix, graphql } from 'gatsby'

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
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href={withPrefix('/img/logo.png')}
            sizes="32x32"
          />
          {/* <link
            rel="icon"
            type="image/png"
            href={withPrefix('/img/logo.png')}
            sizes="16x16"
          /> */}

          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
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
