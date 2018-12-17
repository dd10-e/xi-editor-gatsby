import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Content from '../components/content'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { withMDXScope } from 'gatsby-mdx/context'
import { MDXProvider } from '@mdx-js/tag'

export const ContributeTemplate = ({ title, content, helmet, scope }) => {
  return (
    <section>
      {helmet || ''}
      <h1 className="ml-4 lg:ml-0 text-xi-blue-dark mt-8 mb-4">{title}</h1>
      <Content className="ml-4 lg:ml-0" content={content} scope={scope} />
    </section>
  )
}

ContributeTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.object,
  scope: PropTypes.object,
}

const Contribute = ({ data, components }) => {
  const scope = {}
  return (
    <Layout>
      <MDXProvider
        components={{
          ...components,
        }}
      >
        <ContributeTemplate
          title={data.mdx.frontmatter.title}
          content={data.mdx.code.body}
          scope={scope}
          helmet={
            <SEO categorieTitle="Contribute" description={data.mdx.excerpt} />
          }
        />
      </MDXProvider>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    mdx(fields: { sourceName: { eq: "contribute" } }) {
      code {
        body
      }
      excerpt(pruneLength: 300)
      frontmatter {
        title
      }
    }
  }
`

export default withMDXScope(Contribute)
