import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

import toKebabCase from '../utils/kebabCase'

import Layout from '../components/layout'

class Tags extends React.Component {
  render() {
    const { group: tags } = this.props.data.allMarkdownRemark
    const { siteMetadata: site } = this.props.data.site
    return (
      <Layout>
        <Helmet title={` ${site.title} ${site.titleSeparator} Tag`} />
        <h1 className="mt-4 text-purple-dark">Hi people</h1>
        <div className="mt-4 flex flex-wrap">
          {tags.map(tag => (
            <div className="">
              <Link
                to={`/tags/${toKebabCase(tag.fieldValue)}`}
                className="inline-block border border-indigo rounded py-1 px-2 bg-indigo hover:bg-indigo-dark text-white no-underline mt-4 mr-4"
              >
                {toKebabCase(tag.fieldValue)} ({tag.totalCount})
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
        titleSeparator
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default Tags
