import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'

const documentationContainer = ({ children }) => {
  return (
    <Layout centered={false}>
      <div className="flex">
        <div className="w-1/6 h-full flex-no-shrink">
          <ul className="list-reset p-4 flex flex-col">
            <StaticQuery
              query={graphql`
                query {
                  allMarkdownRemark(
                    limit: 1000
                    filter: { fields: { sourceName: { eq: "docs" } } }
                    sort: { fields: frontmatter___site_nav_category_order }
                  ) {
                    edges {
                      node {
                        id
                        fields {
                          slug
                        }
                        frontmatter {
                          title
                        }
                      }
                    }
                  }
                }
              `}
              render={data => {
                const docs = data.allMarkdownRemark.edges
                return docs.map(({ node: doc }) => (
                  <Link
                    key={doc.id}
                    to={`/documentation${doc.fields.slug}`}
                    className="no-underline text-xi-blue-dark p-2 hover:bg-blue-lightest text-sm"
                    activeClassName="bg-blue-lightest border"
                  >
                    {doc.frontmatter.title}
                  </Link>
                ))
              }}
            />
          </ul>
        </div>
        <div className="flex-1 flex-wrap mb-32">{children}</div>
      </div>
    </Layout>
  )
}

export default documentationContainer
