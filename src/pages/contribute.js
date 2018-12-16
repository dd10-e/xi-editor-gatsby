import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { withMDXScope } from 'gatsby-mdx/context'
import { MDXProvider, MDXTag } from '@mdx-js/tag'

export const ContributeLayout = ({ title, content, helmet, components }) => {
  return (
    <MDXProvider
      components={{
        ...components,
      }}
    >
      <section>
        {helmet || ''}
        <h1 className="ml-4 lg:ml-0 text-xi-blue-dark mt-8 mb-4">{title}</h1>
        <MDXRenderer scope={{ React, MDXTag }} className="ml-4 lg:ml-0">
          {content}
        </MDXRenderer>
      </section>
    </MDXProvider>
  )
}

ContributeLayout.propTypes = {
  content: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.object,
}

const Contribute = ({ data, components }) => {
  console.log(data)
  return (
    <Layout>
      <ContributeLayout
        title={data.mdx.frontmatter.title}
        content={data.mdx.code.body}
        components={components}
        helmet={
          <SEO categorieTitle="Contribute" description={data.mdx.excerpt} />
        }
      />
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
        description
      }
    }
  }
`

// MDXProvider is useless here, it should not
// MDXTag should be remove when it will be useful
// Maybe use MDX with a default layout in config file
export default withMDXScope(Contribute)
