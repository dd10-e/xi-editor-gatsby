import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { withMDXScope } from 'gatsby-mdx/context'
import { MDXProvider } from '@mdx-js/tag'

import Content from '../components/content'
import { LayoutWithLeftNav } from '../components/layout'
import SEO from '../components/SEO'

export const GSoCTemplate = ({ content, title, helmet, components }) => {
  return (
    <MDXProvider
      components={{
        ...components,
      }}
    >
      <section className="lg:flex h-full">
        {helmet || ''}
        <div className="lg:w-3/4 xl:w-4/5">
          <h1 className="ml-4 lg:ml-0 text-xi-blue-dark mt-8 mb-4">{title}</h1>
          <MDXRenderer className="ml-4 lg:ml-0">{content}</MDXRenderer>
          <Content content={content} />
        </div>
      </section>
    </MDXProvider>
  )
}

GSoCTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

class GSoC extends React.Component {
  render() {
    const documentation = this.props.data.mdx
    const navBar = this.props.data.allMdx.edges
    const components = this.props.components

    return (
      <LayoutWithLeftNav data={navBar} path="gsoc" documentationMode={true}>
        <GSoCTemplate
          content={documentation.code.body}
          title={documentation.frontmatter.title}
          components={components}
          helmet={
            <SEO
              categorieTitle={documentation.frontmatter.title}
              description={`${documentation.excerpt}`}
            />
          }
        />
      </LayoutWithLeftNav>
    )
  }
}

GSoC.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object,
  }),
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
      filter: { fields: { sourceName: { eq: "gsoc" } } }
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

export default withMDXScope(GSoC)
