import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Content, { HTMLContent } from '../components/content'
import LayoutWithLeftNav from '../components/layoutWithLeftNav'
import Layout from '../components/layout'
import SEO from '../components/SEO'

export const DocumentationPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <React.Fragment>
      {helmet || ''}
      <div className="lg:w-3/4 xl:w-4/5">
        <h1 className="ml-4 lg:ml-0 text-xi-blue-dark mt-8 mb-4">{title}</h1>
        <PostContent content={content} className="ml-4 lg:ml-0" />
      </div>
    </React.Fragment>
  )
}

DocumentationPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

class DocumentationPost extends React.Component {
  render() {
    const { markdownRemark: documentation } = this.props.data
    const { edges: navBar } = this.props.data.allMarkdownRemark

    return (
      <Layout data={navBar} path="documentation" documentationMode={true}>
        <DocumentationPostTemplate
          content={documentation.html}
          contentComponent={HTMLContent}
          title={documentation.frontmatter.title}
          helmet={
            <SEO
              categorieTitle={`${documentation.frontmatter.title}`}
              description={`${documentation.excerpt}`}
            />
          }
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 300)
      frontmatter {
        title
      }
    }

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
`

export default DocumentationPost
