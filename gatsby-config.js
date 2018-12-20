const config = require('./config/site')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    {
      // Add static assets before markdown files
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/logos`,
        name: 'logos',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gsoc`,
        path: `${__dirname}/content/gsoc`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contribute`,
        path: `${__dirname}/content/contribute`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `build-docs`,
        path: `${__dirname}/content/build-docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation`,
        path: `${__dirname}/content/documentation`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          blog: require.resolve('./src/templates/blog-post.js'),
          documentation: require.resolve(
            './src/templates/documentation-post.js'
          ),
          gsoc: require.resolve('./src/templates/gsoc.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              linkImagesToOriginal: false,
              withWebp: true,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              maintainCase: true,
              icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.34 15.66A7.97 7.97 0 0 0 9 17.94V10H5V8h4V5.83a3 3 0 1 1 2 0V8h4v2h-4v7.94a7.97 7.97 0 0 0 4.66-2.28l-1.42-1.42h5.66l-2.83 2.83a10 10 0 0 1-14.14 0L.1 14.24h5.66l-1.42 1.42zM10 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>`,
              offsetY: `100`,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-plugin-netlify-cms',
    //   options: {
    //     modulePath: `${__dirname}/src/cms/cms.js`,
    //   },
    // }, // make sure to keep it last in the array

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
