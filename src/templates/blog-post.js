// import React from 'react'
// import { graphql, Link } from 'gatsby'
// import PropTypes from 'prop-types'

// import Content, { HTMLContent } from '../components/content'
// import Layout from '../components/layout'
// import SEO from '../components/SEO'

// export const BlogPostTemplate = ({
//   content,
//   contentComponent,
//   description,
//   title,
//   helmet,
//   previous,
//   next,
// }) => {
//   const PostContent = contentComponent || Content
//   return (
//     <div className="max-w-md">
//       <section>
//         {helmet || ''}
//         <h1 className="text-xi-blue-dark mt-8">{title}</h1>
//         <div className="border-t-4 border-xi-blue-dark w-24 mt-4 mb-8" />
//         <p className="mb-8 text-xi-blue font-bold">{description}</p>
//         <PostContent content={content} />
//       </section>
//       <div
//         className={`flex ${next === null ? 'justify-end' : 'justify-between'}`}
//       >
//         {next && (
//           <Link
//             to={'/blog/post' + next.fields.slug}
//             rel="next"
//             className="no-underline text-sm text-blue-darker active:text-indigo-dark my-8"
//           >
//             ← {next.frontmatter.title}
//           </Link>
//         )}
//         {previous && (
//           <Link
//             to={'/blog/post' + previous.fields.slug}
//             rel="prev"
//             className="no-underline text-sm text-blue-darker active:text-indigo-dark my-8"
//           >
//             {previous.frontmatter.title} →
//           </Link>
//         )}
//       </div>
//     </div>
//   )
// }

// BlogPostTemplate.propTypes = {
//   content: PropTypes.node.isRequired,
//   contentComponent: PropTypes.func,
//   description: PropTypes.string,
//   title: PropTypes.string,

//   helmet: PropTypes.object,
// }

// class Post extends React.Component {
//   render() {
//     const { markdownRemark: post } = this.props.data
//     return (
//       <Layout>
//         <BlogPostTemplate
//           content={post.html}
//           contentComponent={HTMLContent}
//           description={post.frontmatter.description}
//           title={post.frontmatter.title}
//           previous={this.props.pageContext.previous}
//           next={this.props.pageContext.next}
//           helmet={
//             <SEO
//               categorieTitle={post.frontmatter.title}
//               description={`${post.excerpt}`}
//             />
//           }
//         />
//       </Layout>
//     )
//   }
// }

// Post.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//   }),
// }

// export const query = graphql`
//   query($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       excerpt(pruneLength: 300)
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         description
//       }
//     }
//   }
// `

// export default Post
