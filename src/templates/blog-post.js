import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Content, { HTMLContent } from '../components/content'
import Layout from '../components/layout'
import SEO from '../components/SEO'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="lg:flex h-full">
      {helmet || ''}
      <div className="lg:w-3/4 xl:w-4/5">
        <h1 className="ml-4 lg:ml-0 text-xi-blue-dark mt-8">{title}</h1>
        <div className="ml-4 lg:ml-0 border-t-4 border-xi-blue-dark w-24 mt-4 mb-8" />
        <p className="ml-4 lg:ml-0 mb-8 text-xi-blue font-bold">
          {description}
        </p>
        <PostContent content={content} className="ml-4 lg:ml-0" />
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

class Post extends React.Component {
  render() {
    const { markdownRemark: post } = this.props.data

    return (
      <Layout>
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          title={post.frontmatter.title}
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
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`

export default Post
