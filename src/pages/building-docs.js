import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Content, { HTMLContent } from '../components/content'
import Layout from '../components/layout'
import SEO from '../components/SEO'

export const BuildindDocsTemplate = ({
  title,
  contentComponent,
  content,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  return (
    <section>
      {helmet || ''}
      <h1 className="ml-4 lg:ml-0 text-xi-blue-dark mt-8 mb-4">{title}</h1>
      <PostContent content={content} className="ml-4 lg:ml-0" />
    </section>
  )
}

BuildindDocsTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.object,
}

const BuildindDocs = ({ data }) => {
  return (
    <Layout>
      <BuildindDocsTemplate
        contentComponent={HTMLContent}
        title={data.markdownRemark.frontmatter.title}
        content={data.markdownRemark.html}
        helmet={<SEO categorieTitle="Building Docs" />}
      />
    </Layout>
  )
}
export const query = graphql`
  query {
    markdownRemark(fields: { sourceName: { eq: "build-docs" } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`

export default BuildindDocs
