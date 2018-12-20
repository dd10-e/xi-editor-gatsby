import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import Content from '../components/content'
import Layout from '../components/layout'
import SEO from '../components/SEO'

export const BlogPostTemplate = ({
  content,
  description,
  title,
  helmet,
  previous,
  next,
}) => {
  return (
    <div className="bg-white h-full">
      <div className="flex justify-center container mx-auto">
        <div className="flex flex-col">
          <section>
            {helmet || ''}
            <div className="md:-ml-16 lg:-ml-32 px-4 md:px-0">
              <h1 className="text-blue-darker text-3xl md:text-5xl">{title}</h1>
              <p className="mt-4 text-blue-darker font-bold">{description}</p>
              <div className="border-t-4 border-green-lighter w-24 mt-4 mb-8" />
            </div>
            <Content
              content={content}
              className="max-w-md mt-4 md:mt-16 px-4 md:px-0"
            />
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
                className="no-underline text-sm text-blue-darker active:text-indigo-dark my-8 ml-4 ml-0"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
            {next && (
              <Link
                to={'/blog/post' + next.fields.slug}
                rel="next"
                className="no-underline text-sm text-blue-darker active:text-indigo-dark my-8 mr-4 md:mr-0"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
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
    const post = this.props.data.mdx
    const previous = this.props.pageContext.previous
    const next = this.props.pageContext.next
    return (
      <Layout>
        <BlogPostTemplate
          content={post.code.body}
          description={post.frontmatter.description}
          title={post.frontmatter.title}
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

export default Post
