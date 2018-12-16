import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { withMDXScope } from 'gatsby-mdx/context'
import { MDXProvider } from '@mdx-js/tag'

import Layout from '../components/layout'
import SEO from '../components/SEO'

export const BlogPostTemplate = ({
  content,
  description,
  title,
  components,
  helmet,
  previous,
  next,
}) => {
  return (
    <MDXProvider
      components={{
        ...components,
      }}
    >
      <div className="max-w-md">
        <section>
          {helmet || ''}
          <h1 className="text-xi-blue-dark mt-8">{title}</h1>
          <div className="border-t-4 border-xi-blue-dark w-24 mt-4 mb-8" />
          <p className="mb-8 text-xi-blue font-bold">{description}</p>
          <MDXRenderer>{content}</MDXRenderer>
        </section>
        <div
          className={`flex ${
            previous === null ? 'justify-end' : 'justify-between'
          }`}
        >
          {previous && (
            <Link
              to={'/blog/post' + previous.fields.slug}
              rel="prev"
              className="no-underline text-sm text-blue-darker active:text-indigo-dark my-8"
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link
              to={'/blog/post' + next.fields.slug}
              rel="next"
              className="no-underline text-sm text-blue-darker active:text-indigo-dark my-8"
            >
              {next.frontmatter.title} →
            </Link>
          )}
        </div>
      </div>
    </MDXProvider>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  previous: PropTypes.object,
  next: PropTypes.object,
}

class Post extends React.Component {
  render() {
    const components = this.props.components
    const post = this.props.data.mdx
    const previous = this.props.pageContext.previous
    const next = this.props.pageContext.next

    console.log(previous)
    console.log(next)
    return (
      <Layout>
        <BlogPostTemplate
          content={post.code.body}
          description={post.frontmatter.description}
          title={post.frontmatter.title}
          components={components}
          previous={previous}
          next={next}
          helmet={
            <SEO
              categorieTitle={post.frontmatter.title}
              description={`${post.excerpt}`}
            />
          }
        />
      </Layout>
    )
  }
}

Post.propTypes = {
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
        scope
      }
      excerpt(pruneLength: 300)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`

export default withMDXScope(Post)
