/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const toKebabCase = require('./src/utils/kebabCase')

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 10000) {
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
      component: require.resolve('./src/templates/gsoc-template.js'),
      context: { id: node.id },
    })
  })
}
