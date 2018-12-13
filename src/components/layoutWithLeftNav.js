import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from './layout'

const LayoutWithLeftNav = ({ children, data, path }) => {
  return (
    <Layout centered={false}>
      <div className="flex">
        <div className="w-1/6 h-full flex-no-shrink mr-8">
          <ul className="list-reset p-4 flex flex-col">
            {data.map(({ node: item }) => (
              <Link
                key={item.id}
                to={`/${path}${item.fields.slug}`}
                className="no-underline text-xi-blue-dark p-2 hover:bg-blue-lightest text-sm"
                activeClassName="bg-blue-lightest border"
              >
                {item.frontmatter.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex-wrap mb-32">{children}</div>
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
