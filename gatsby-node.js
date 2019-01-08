/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const SizePlugin = require('size-plugin')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            id
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

  // Blog
  const blogPosts = result.data.allMdx.edges.filter(
    type => type.node.fields.sourceName === 'blog'
  )
  const blogPostsPerPage = 10
  const numPages = Math.ceil(blogPosts.length / blogPostsPerPage)

  // blog-list pages
  // https://twitter.com/wesbos/status/993883756162404354
  Array.from({ length: numPages }, (_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/blog-list.js'),
      context: {
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // blog-post pages
  blogPosts.forEach(({ node: post }, index) => {
    // `posts[]` is ordring DESC
    const previous = index === 0 ? null : blogPosts[index - 1].node
    const next =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node

    actions.createPage({
      path: `/blog/post${post.fields.slug}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: { id: post.id, previous, next },
    })
  })

  // Documentation pages
  const documentations = result.data.allMdx.edges.filter(
    type => type.node.fields.sourceName === 'documentation'
  )

  documentations.forEach(({ node: doc }) => {
    actions.createPage({
      path: `/documentation${doc.fields.slug}`,
      component: path.resolve('./src/templates/documentation-post.js'),
      context: { id: doc.id },
    })
  })

  // Gooogle Summer of Code(gsoc) pages
  const gsoc = result.data.allMdx.edges.filter(
    type => type.node.fields.sourceName === 'gsoc'
  )
  gsoc.forEach(({ node }) => {
    actions.createPage({
      path: `/gsoc${node.fields.slug}`,
      component: path.resolve('./src/templates/gsoc.js'),
      context: { id: node.id },
    })
  })
}

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

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  if (
    (process.env.NODE_ENV === 'production' && stage === 'build-javascript') ||
    options.development
  ) {
    actions.setWebpackConfig({
      plugins: [new SizePlugin(options)],
    })
  }

  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  })
}
