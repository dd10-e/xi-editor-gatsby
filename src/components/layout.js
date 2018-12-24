import '../../output.css'

import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/tag'
import 'styled-components/macro'

import mdxComponents from './mdxComponents'
import SEO from './SEO'

import FooterContainer from 'containers/components/FooterContainer'
import HeaderContainer from 'containers/components/HeaderContainer'

const Layout = ({ children, theme }) => {
  return (
    <MDXProvider components={mdxComponents}>
      <div className="h-full w-full flex flex-col items-stretch font-sans">
        <SEO />
        <HeaderContainer />
        <main
          role="main"
          className={`flex-1 bg-${theme.light.greenLighter ||
            theme.dark.orangeLighter}`}
        >
          {children}
        </main>
        <FooterContainer />
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
}

export const LayoutWithLeftNav = ({ children, data, title, path }) => {
  return (
    <div className="h-full w-full flex flex-col items-stretch font-sans">
      <SEO />
      <HeaderContainer />
      <main role="main" className="flex-1 -mt-32">
        <div className="flex">
          <div className="w-64">
            <nav className={`pt-6 max-w-xs w-auto pb-32`}>
              {!title === undefined && (
                <p className="mb-3 uppercase tracking-wide font-bold leading-tight px-6 text-blue-darker">
                  {title}
                </p>
              )}
              <ul className="list-reset flex flex-col flex-1">
                {data.map(({ node: item }) => (
                  <li className="leading-tight max-x-xs" key={item.id}>
                    <Link
                      to={`/${path}${item.fields.slug}`}
                      className="block text-md px-6 py-2 text-blue-darker no-underline hover:text-green rounded-md"
                      activeClassName="font-semibold border-l-8 border-green-lightest"
                    >
                      {item.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="max-w-lg px-2 md:px-10 py-8 mb-24 content mx-auto lg:ml-8 overflow-hidden">
            {children}
          </div>
        </div>
      </main>
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
