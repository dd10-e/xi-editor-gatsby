import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

import toKebabCase from '../utils/kebabCase'

import Layout from '../components/layout'

class Tag extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark
    const { siteMetadata: site } = this.props.data.site
    const tag = this.props.pageContext.tag

    return (
      <Layout>
        <Helmet title={` ${site.title} ${site.titleSeparator} Tag`} />
        <h1 className="text-purple-dark my-8">{toKebabCase(tag)}</h1>
        <div className="flex flex-col my-8 bg-purple-lightest px-10 py-6 rounded">
          {posts.map(({ node: post }) => (
            <Link
              to={post.fields.slug}
              className="text-lg my-2 text-purple-dark no-underline hover:underline"
            >
              {post.frontmatter.title}
            </Link>
          ))}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Tag
