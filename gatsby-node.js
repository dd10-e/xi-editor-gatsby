/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { createFilePath } = require('gatsby-source-filesystem')
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            id
            code {
              scope
            }
            fields {
              slug
              sourceName
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  // Blog post pages
  const blogPosts = result.data.allMdx.edges.filter(
    type => type.node.fields.sourceName === 'blog'
  )
  const blogPostsPerPage = 1
  const numPages = Math.ceil(blogPosts.length / blogPostsPerPage)

  // blog-list pages
  // https://twitter.com/wesbos/status/993883756162404354
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve('./src/templates/blog-list-mdx.js'),
      context: {
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  blogPosts.forEach(({ node: post }, index) => {
    // `posts[]` is ordring DESC
    const previous = index === 0 ? null : blogPosts[index - 1].node
    const next =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node

    actions.createPage({
      path: `/blog/post${post.fields.slug}`,
      component: componentWithMDXScope(
        require.resolve('./src/templates/blog-post-mdx.js'),
        post.code.scope,
        __dirname
      ),
      context: { id: post.id, previous, next },
    })
  })

  //
  //
  //
  //
  //
  //
  //
  //
  //
  // const result = await graphql(`
  //   {
  //     allMarkdownRemark(
  //       sort: { fields: [frontmatter___date], order: DESC }
  //       limit: 1000
  //     ) {
  //       edges {
  //         node {
  //           id
  //           fields {
  //             slug
  //             sourceName
  //           }
  //           frontmatter {
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const posts = result.data.allMarkdownRemark.edges.filter(
  //   type => type.node.fields.sourceName === 'blog'
  // )
  // const postsPerPage = 20
  // const numPages = Math.ceil(posts.length / postsPerPage)

  // // blog-list pages
  // // https://twitter.com/wesbos/status/993883756162404354
  // Array.from({ length: numPages }).forEach((_, i) => {
  //   actions.createPage({
  //     path: i === 0 ? `/blog` : `/blog/${i + 1}`,
  //     component: require.resolve('./src/templates/blog-list.js'),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   })
  // })

  // // blog-post pages
  // posts.forEach(({ node }, index) => {
  // // `posts[]` is ordring DESC
  // const previous = index === posts.length - 1 ? null : posts[index + 1].node
  // const next = index === 0 ? null : posts[index - 1].node

  //   actions.createPage({
  //     path: `/blog/post${node.fields.slug}`,
  //     component: require.resolve('./src/templates/blog-post.js'),
  //     context: {
  //       id: node.id,
  //       previous,
  //       next,
  //     },
  //   })
  // })

  // // Documentation pages
  // const docs = result.data.allMarkdownRemark.edges.filter(
  //   type => type.node.fields.sourceName === 'docs'
  // )

  // docs.forEach(({ node }) => {
  //   actions.createPage({
  //     path: `/documentation${node.fields.slug}`,
  //     component: require.resolve('./src/templates/documentation-post.js'),
  //     context: { id: node.id },
  //   })
  // })

  // // Gooogle Summer of Code(gsoc) pages
  // const gsoc = result.data.allMarkdownRemark.edges.filter(
  //   type => type.node.fields.sourceName === 'gsoc'
  // )
  // gsoc.forEach(({ node }) => {
  //   actions.createPage({
  //     path: `/gsoc${node.fields.slug}`,
  //     component: require.resolve('./src/templates/gsoc.js'),
  //     context: { id: node.id },
  //   })
  // })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   fmImagesToRelative(node) // convert image paths for gatsby images

//   if (node.internal.type === `MarkdownRemark`) {
//     // Create or custom node graphql queries:
//     // `fields { slug }`
//     const value = createFilePath({ node, getNode })
//     actions.createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    // Create or custom node graphql queries:
    // `fields { slug }`
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    const parent = getNode(node.parent)

    if (parent.internal.type === 'File') {
      createNodeField({
        name: `sourceName`,
        node,
        value: parent.sourceInstanceName,
      })
    }
  }
}
