import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import config from '../../config/site'

// Doesn't need to set `<link rel="icon" /> for each platform because `gatsby-plugin-manifest`
// do it for us. Configuration of them should be done in `gatsby-config` so.
const SEO = ({ categorieTitle, description }) => {
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  const image = config.siteUrl + realPrefix + config.siteLogo
  const title =
    categorieTitle === undefined || null
      ? config.siteTitle
      : `${categorieTitle} ${config.sitetitleSeparator} ${config.siteTitle}`

  const descriptionMeta =
    description === undefined || null
      ? config.siteDescription
      : `${description}`
  return (
    <Helmet>
      {/* Site */}
      <html lang={config.siteLanguage} />
      <title>{title}</title>
      <meta name="msapplication-TileColor" content={config.backgroundColor} />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="description" content={descriptionMeta} />
      <meta name="image" content={image} />
      {/* Android */}
      <meta
        property="al:ios:url"
        content="nflx://www.netflix.com/?locale=fr-FR"
      />
      <meta property="al:android:app_name" content={config.siteTitle} />
      <meta property="al:android:url" content={config.siteUrl} />
      {/* Apple */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      {/* Facebook */}
      {!config.ogLanguage === '' && (
        <meta property="og:locale" content={config.ogLanguage} />
      )}
      {!config.ogSiteName === '' && (
        <meta property="og:site_name" content={config.ogSiteName} />
      )}
      {!config.siteFBAppID === '' && (
        <meta property="fb:app_id" content={config.siteFBAppID} />
      )}
      {!config.userTwitter === '' && (
        <meta name="twitter:creator" content={config.userTwitter} />
      )}
      <meta property="og:title" content={config.siteTitle} />
      <meta property="og:description" content={config.siteDescription} />
      <meta property="og:image" content={image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.siteTitle} />
      <meta name="twitter:description" content={config.siteDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

SEO.propTypes = {
  categorieTitle: PropTypes.string,
  description: PropTypes.string,
}

export default SEO
