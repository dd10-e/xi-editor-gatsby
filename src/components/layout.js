import '../../output.css'

import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/tag'

import mdxComponents from './mdxComponents'
import Header from './Header/index'
import Footer from './footer'
import SEO from './SEO'

const Layout = ({ children }) => {
  return (
    <MDXProvider components={mdxComponents}>
      <div className="h-full w-full flex flex-col items-stretch font-sans">
        <SEO />
        <Header />
        <main role="main" className={`flex-1 bg-green-lighter`}>
          {children}
        </main>
        <Footer />
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const LayoutWithLeftNav = ({ children, data, title, path }) => {
  return (
    <div className="h-full w-full flex flex-col items-stretch font-sans">
      <SEO />
      <Header />
      <main role="main" className={`flex-1`}>
        <div className="flex">
          <nav className={`pt-6 border-r-2 border-blue-lightest max-w-sm w-64`}>
            {!title === undefined && (
              <p className="mb-3 uppercase tracking-wide font-bold leading-tight px-6 text-blue">
                {title}
              </p>
            )}
            <ul className="list-reset flex flex-col flex-1">
              {data.map(({ node: item }) => (
                <li className="leading-tight max-x-xs" key={item.id}>
                  <Link
                    to={`/${path}${item.fields.slug}`}
                    className="break-words block no-underline hover:underline text-xi-blue-dark px-2 px-6 py-4 hover:bg-blue-lightest text-sm"
                    activeClassName="bg-blue-lightest font-bold underline"
                  >
                    {item.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="max-w-lg px-2 md:px-10 py-8 mb-24 content mx-auto lg:ml-8 overflow-hidden">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

LayoutWithLeftNav.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string,
  data: PropTypes.array,
  path: PropTypes.string,
}

export default Layout
