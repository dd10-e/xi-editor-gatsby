const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer'),
    purgecss({
      content: ['./public/**/*.html', './src/**/*.js'],
      css: ['./output.css'],
      whitelist: ['body', 'html'],
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
