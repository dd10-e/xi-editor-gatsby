const config = require('./config/site')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/upload/img`,
        name: 'uploads-img',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gsoc`,
        path: `${__dirname}/content/gsoc/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contribute`,
        path: `${__dirname}/content/contribute/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `build-docs`,
        path: `${__dirname}/content/build-docs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/content/documentation/`,
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
      // Style Markdown content
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-slug',
    'gatsby-remark-source-name',
    'gatsby-plugin-netlify-cms', // make sure to keep it last in the array

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
