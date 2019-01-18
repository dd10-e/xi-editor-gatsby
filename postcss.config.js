const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer'),
    purgecss({
      content: ['./public/**/*.html', './src/**/*.js'],
      css: ['./output.css'],
      // use for theme context
      whitelistPatterns: [
        /green$/,
        /white$/,
        /orange$/,
        /green-lighter$/,
        /green-lightest$/,
        /blue-darker$/,
        /orange-lighter$/,
        /orange-lightest$/,
        /blue-darker$/,
        /blue-darkest$/,
        /purple-darker$/,
        /purple-darkest$/,
      ],
      extractors: [
        {
          extractor: class {
            static extract(content) {
              return content.match(/[A-Za-z0-9-_:\/]+/g) || []
            }
          },
          extensions: ['html', 'js'],
        },
      ],
    }),
  ],
}
