import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Content, { HTMLContent } from '../components/content'
import LayoutWithLeftNav from '../components/layoutWithLeftNav'
import SEO from '../components/SEO'

export const GSoCTemplate = ({ content, contentComponent, title, helmet }) => {
  const PostContent = contentComponent || Content

  return (
    <section className="lg:flex h-full">
      {helmet || ''}
      <div className="lg:w-3/4 xl:w-4/5">
        <h1 className="ml-4 lg:ml-0 text-xi-blue-dark mt-8 mb-4">{title}</h1>
        <PostContent content={content} className="ml-4 lg:ml-0" />
      </div>
    </section>
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
    const { markdownRemark: documentation } = this.props.data
    const { edges: navBar } = this.props.data.allMarkdownRemark

    return (
      <LayoutWithLeftNav data={navBar} path="gsoc">
        <GSoCTemplate
          content={documentation.html}
          contentComponent={HTMLContent}
          title={documentation.frontmatter.title}
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
    markdownRemark: PropTypes.object,
  }),
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

export default GSoC
