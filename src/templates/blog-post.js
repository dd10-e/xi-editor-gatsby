import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import toKebabCase from '../utils/kebabCase'

import Content, { HTMLContent } from '../components/content'
import Layout from '../components/layout'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
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
      {tags && tags.length ? (
        <div className="lg:w-3/4 xl:w-1/5 mt-8 ml-4">
          <div className="ml-4 lg:ml-0 mb-2 text-lg font-bold text-purple">
            Tags:
          </div>
          <div className="ml-4 lg:ml-0 flex flex-wrap">
            {tags.map((tag, i) => (
              <div
                className={`w-1/3 mb-4 bg-purple rounded px-2 h-10 flex items-center justify-center mr-4`}
                key={toKebabCase(tag) + 'tags'}
              >
                <Link
                  to={`/tags/${toKebabCase(tag)}`}
                  className="text-orange-lightest no-underline"
                >
                  {toKebabCase(tag)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : null}
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
    const { siteMetadata: site } = this.props.data.site

    return (
      <Layout>
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
          helmet={
            <Helmet title={` ${site.title} ${site.titleSeparator} Blog`}>
              <meta
                name="description"
                content={`${post.frontmatter.description}`}
              />
            </Helmet>
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
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title
        description
      }
    }

    site {
      siteMetadata {
        title
        titleSeparator
      }
    }
  }
`

export default Post
