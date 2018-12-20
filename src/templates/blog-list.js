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
        <div className="flex flex-col content-end min-h-full container mx-auto py-6 px-8 -mt-16">
          <h1 className="ml-4 md:ml-0 mt-4 text-blue-darker">
            Latest Blog Post
          </h1>
          <div className="flex-1">
            <ul className="mx-4 md:mx-0 flex flex-col list-reset mt-8">
              {posts.map(({ node: post }) => (
                <li
                  key={post.id}
                  className="rounded-lg bg-white p-4 text-lg shadow-md mb-5"
                >
                  <div className="flex items-center">
                    <Link
                      to={`blog/post${post.fields.slug}`}
                      className="no-underline text-blue-darker hover:text-green"
                    >
                      <h2>{post.frontmatter.title}</h2>
                    </Link>
                    <time className="mt-2 text-sm text-blue-darker ml-4 font-semibold">
                      {post.frontmatter.date}
                    </time>
                  </div>
                  <p className="mt-2 text-base leading-tight text-blue-darker">
                    {post.excerpt}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {numPages !== 1 && (
            <div className="flex justify-center mt-4">
              <div className="flex items-center space-between bg-blue-darker text-green-lighter p-1">
                {!isFirst && (
                  <Link
                    to={'/blog/' + prevPage}
                    rel="prev"
                    className="no-underline text-sm text-green-lighter active:text-indigo-dark"
                  >
                    <svg
                      className="fill-current text-green-lighter inline-block h-6 w-6 -mb-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" />
                    </svg>
                  </Link>
                )}
                {Array.from({ length: numPages }, (_, i) => (
                  <Link
                    key={`pagination-number${i + 1}`}
                    to={`/blog/${i === 0 ? '' : i + 1}`}
                    className={`inline-flex text-base text-green-lighter p-2 ${
                      i + 1 === currentPage
                        ? 'bg-black border'
                        : 'bg-blue-darker'
                    }`}
                  >
                    {i + 1}
                  </Link>
                ))}
                {!isLast && (
                  <Link
                    to={'/blog/' + nextPage}
                    rel="next"
                    className="flex items-center no-underline text-sm text-green-lighter active:text-indigo-dark"
                  >
                    <svg
                      className="fill-current text-green-lighter inline-block h-6 w-6 -mb-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                    </svg>
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
