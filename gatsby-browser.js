/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// require('prismjs/themes/prism-solarizedlight.css')

import React from 'react'
import ThemeProvider from './src/store/providers/ThemeProvider'

// React context
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
