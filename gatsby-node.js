/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const toKebabCase = require('./src/utils/kebabCase')

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
              sourceName
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges.filter(
    single => single.node.fields.sourceName === 'blog'
  )
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)

  // blog-list pages
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve('./src/templates/blog-list.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Each blog post pages
  posts.forEach(({ node }) => {
    actions.createPage({
      path: `/blog${node.fields.slug}`,
      component: require.resolve('./src/templates/blog-post.js'),
      context: { id: node.id },
    })
  })

  // Tag pages
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  // before this, prevent dublicate
  posts.forEach(({ node }) => {
    if (node.frontmatter.tags != null) {
      node.frontmatter.tags.forEach(tag => {
        if (tags.indexOf(node.frontmatter.tags) === -1) {
          tags.push(tag)
        }
      })
    }
  })

  // Make tag pages
  tags.forEach(tag => {
    // Transform to kebabCase and make an url with it
    const tagPath = `/tags/${toKebabCase(tag)}/`
    actions.createPage({
      path: tagPath,
      component: require.resolve(`./src/templates/tag.js`),
      context: {
        tag,
      },
    })
  })

  const docs = result.data.allMarkdownRemark.edges.filter(
    single => single.node.fields.sourceName === 'docs'
  )

  // Documentation pages
  docs.forEach(({ node }) => {
    actions.createPage({
      path: `/documentation${node.fields.slug}`,
      component: require.resolve('./src/templates/documentation-post.js'),
      context: { id: node.id },
    })
  })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const parentFileNode = getNode(node.parent)
//     const pathPrefix = pathPrefixes[parentFileNode.sourceName]
//     createNodeField({
//       node,
//       name: `sourceName`,
//       value: parentFileNode.sourceName,
//     })
//   }
// }

// exports.createPages = async ({ graphql, actions }) => {
//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         limit: 1000
//         filter: { frontmatter: { templateKey: { eq: "docs" } } }
//       ) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `)

//   const docs = result.data.allMarkdownRemark.edges
//   actions.createPage({
//     component: require.resolve('./src/templates/documentation-post.js'),
//     context: {
//       id: docs.id,
//     },
//   })
// }
