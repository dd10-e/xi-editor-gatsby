import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/SEO'

class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMdx.edges

    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : currentPage - 1
    const nextPage = currentPage + 1

    return (
      <Layout>
        <SEO categorieTitle="Blog" />
        <div className="flex flex-col content-end min-h-full">
          <div className="flex-1">
            <h1 className="ml-4 md:ml-0 mt-4 text-xi-blue-dark">
              Latest Blog Post
            </h1>
            <div className="ml-4 md:ml-0 border-t-4 border-xi-blue w-24 mt-4 mb-8" />
            <ul className="mx-4 md:mx-0 flex flex-col my-8 pb-6 rounded list-reset">
              {posts.map(({ node: post }) => (
                <li key={post.id} className="border p-4 my-4 py-4 text-lg">
                  <div className="flex justify-between items-center">
                    <Link
                      to={`blog/post${post.fields.slug}`}
                      className="flex items-center no-underline text-xi-blue-dark hover:text-blue-light hover:underline"
                    >
                      <h2>{post.frontmatter.title}</h2>
                    </Link>
                    <time className="text-base text-xi-blue ml-4 mr-8 underline">
                      {post.frontmatter.date}
                    </time>
                  </div>
                  <p className="mt-2 text-base leading-tight text-xi-blue">
                    {post.excerpt}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {numPages !== 1 && (
            <div className="mx-4 md:mx-0 flex mb-32">
              <div className="bg-blue-lightest hover:bg-blue-lighter font-bold py-2 px-4 rounded-l">
                {!isFirst && (
                  <Link
                    to={'/blog/' + prevPage}
                    rel="prev"
                    className="no-underline text-sm text-blue-darker active:text-indigo-dark"
                  >
                    ← Previous Page
                  </Link>
                )}
              </div>
              {Array.from({ length: numPages }, (_, i) => (
                <Link
                  key={`pagination-number${i + 1}`}
                  to={`/blog/${i === 0 ? '' : i + 1}`}
                  className={`text-blue-darker p-2 no-underline border font-bold hover:text-blue-dark hover:bg-blue-lighter ${
                    i + 1 === currentPage
                      ? 'bg-blue-light '
                      : 'bg-blue-lightest'
                  }`}
                >
                  {i + 1}
                </Link>
              ))}
              <div className="bg-blue-lightest hover:bg-blue-lighter border text-blue-darkest font-bold py-2 px-4 rounded-r">
                {!isLast && (
                  <Link
                    to={'/blog/' + nextPage}
                    rel="next"
                    className="no-underline text-sm text-blue-darker active:text-indigo-dark"
                  >
                    Next Page →
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { sourceName: { eq: "blog" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
export default BlogList
