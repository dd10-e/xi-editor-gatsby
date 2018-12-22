/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import ThemeProvider from './src/store/providers/themeProvider'

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // React Context in SSR/build
  const ConnectedBody = () => <ThemeProvider>{bodyComponent}</ThemeProvider>
  replaceBodyHTMLString(renderToString(<ConnectedBody />))

  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet()
  const bodyHTML = renderToString(sheet.collectStyles(<ConnectedBody />))
  const styleElement = sheet.getStyleElement()
  setHeadComponents(styleElement)
}
