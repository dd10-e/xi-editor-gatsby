import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Content from 'components/content'
import { LayoutWithLeftNav } from 'components/layout'
import SEO from 'components/SEO'

export const GSoCTemplate = ({ content, title, helmet }) => {
  return (
    <section className="lg:flex h-full">
      {helmet || ''}
      <div className="lg:w-3/4 xl:w-4/5">
        <h1 className="ml-4 lg:ml-0 text-blue-darker mt-8 mb-4">{title}</h1>
        <Content content={content} />
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
    const gsocPost = this.props.data.mdx
    const navBar = this.props.data.allMdx.edges
    return (
      <LayoutWithLeftNav data={navBar} path="gsoc" documentationMode={true}>
        <GSoCTemplate
          content={gsocPost.code.body}
          title={gsocPost.frontmatter.title}
          helmet={
            <SEO
              categorieTitle={gsocPost.frontmatter.title}
              description={`${gsocPost.excerpt}`}
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

export default GSoC
