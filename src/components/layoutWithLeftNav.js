import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from './layout'

const LayoutWithLeftNav = ({ children, data, path }) => {
  return (
    <Layout centered={false}>
      <div className="flex">
        <nav className="pt-6 border-r-2 border-blue-lightest max-w-xs">
          <p className="mb-3 uppercase tracking-wide font-bold leading-tight px-6 text-blue">
            Documentation
          </p>
          <ul className="list-reset flex flex-col flex-1">
            {data.map(({ node: item }) => (
              <li className="leading-tight">
                <Link
                  key={item.id}
                  to={`/${path}${item.fields.slug}`}
                  className="block no-underline hover:underline text-xi-blue-dark px-2 px-6 py-4 hover:bg-blue-lightest text-sm"
                  activeClassName="bg-blue-lightest"
                >
                  {item.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="max-w-lg px-10 py-8 mb-24 content mx-auto lg:ml-8">
          {children}
        </div>
      </div>
    </Layout>
  )
}

LayoutWithLeftNav.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array,
  path: PropTypes.string,
}

export default LayoutWithLeftNav
