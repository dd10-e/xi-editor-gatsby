/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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
          }
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges.filter(
    single => single.node.fields.sourceName === 'blog'
  )
  const postsPerPage = 1
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

  // Documentation pages
  const docs = result.data.allMarkdownRemark.edges.filter(
    single => single.node.fields.sourceName === 'docs'
  )

  docs.forEach(({ node }) => {
    actions.createPage({
      path: `/documentation${node.fields.slug}`,
      component: require.resolve('./src/templates/documentation-post.js'),
      context: { id: node.id },
    })
  })

  // Gooogle Summer of Code(gsoc) pages
  const gsoc = result.data.allMarkdownRemark.edges.filter(
    single => single.node.fields.sourceName === 'gsoc'
  )
  gsoc.forEach(({ node }) => {
    actions.createPage({
      path: `/gsoc${node.fields.slug}`,
      component: require.resolve('./src/templates/gsoc.js'),
      context: { id: node.id },
    })
  })
}
