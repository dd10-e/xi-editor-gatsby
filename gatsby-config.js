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
        // globalScope: `
        //   import Image from './src/components/images/image';
        // `,
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
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              linkImagesToOriginal: true,
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
          //! Cause an error
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     // Class prefix for <pre> tags containing syntax highlighting;
          //     // defaults to 'language-' (eg <pre class="language-js">).
          //     // If your site loads Prism into the browser at runtime,
          //     // (eg for use with libraries like react-live),
          //     // you may use this to prevent Prism from re-processing syntax.
          //     // This is an uncommon use-case though;
          //     // If you're unsure, it's best to use the default value.
          //     classPrefix: 'language-',
          //     // This is used to allow setting a language for inline code
          //     // (i.e. single backticks) by creating a separator.
          //     // This separator is a string and will do no white-space
          //     // stripping.
          //     // A suggested value for English speakers is the non-ascii
          //     // character '›'.
          //     inlineCodeMarker: null,
          //     // This lets you set up language aliases.  For example,
          //     // setting this to '{ sh: "bash" }' will let you use
          //     // the language "sh" which will highlight using the
          //     // bash highlighter.
          //     aliases: {},
          //     // This toggles the display of line numbers globally alongside the code.
          //     // To use it, add the following line in src/layouts/index.js
          //     // right after importing the prism color scheme:
          //     //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
          //     // Defaults to false.
          //     // If you wish to only show line numbers on certain code blocks,
          //     // leave false and use the {numberLines: true} syntax below
          //     showLineNumbers: false,
          //     // If setting this to true, the parser won't handle and highlight inline
          //     // code used in markdown i.e. single backtick code like `this`.
          //     noInlineHighlight: false,
          //   },
          // },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/logos/logo.png`, // This path is relative to the root of the site.
        legacy: true, // this will add apple-touch-icon links to <head>
        icons: [
          {
            src: `/logos/android-chrome-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: 'icons/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
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
