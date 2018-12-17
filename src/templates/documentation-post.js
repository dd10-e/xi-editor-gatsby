import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { withMDXScope } from 'gatsby-mdx/context'
import { MDXProvider } from '@mdx-js/tag'

import Content from '../components/content'
import { LayoutWithLeftNav } from '../components/layout'
import SEO from '../components/SEO'

export const DocumentationPostTemplate = ({ content, title, helmet }) => {
  return (
    <React.Fragment>
      {helmet || ''}
      <div className="lg:w-3/4 xl:w-4/5">
        <h1 className="ml-4 lg:ml-0 text-blue-darker mt-8 mb-4">{title}</h1>
        <Content content={content} />
      </div>
    </React.Fragment>
  )
}

DocumentationPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

class DocumentationPost extends React.Component {
  render() {
    const documentationPost = this.props.data.mdx
    const navBar = this.props.data.allMdx.edges
    const components = this.props.components
    console.log(typeof components)
    return (
      <LayoutWithLeftNav data={navBar} path="documentation">
        <MDXProvider
          components={{
            ...components,
          }}
        >
          <DocumentationPostTemplate
            content={documentationPost.code.body}
            title={documentationPost.frontmatter.title}
            components={components}
            helmet={
              <SEO
                categorieTitle={`${documentationPost.frontmatter.title}`}
                description={`${documentationPost.excerpt}`}
              />
            }
          />
        </MDXProvider>
      </LayoutWithLeftNav>
    )
  }
}

DocumentationPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      excerpt(pruneLength: 300)
      frontmatter {
        title
      }
    }

    allMdx(
      limit: 1000
      filter: { fields: { sourceName: { eq: "documentation" } } }
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

export default withMDXScope(DocumentationPost)
