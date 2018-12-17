import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import config from '../../config/site'

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
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href={config.siteLogo} />
      <link rel="icon" type="image/png" sizes="16x16" href={config.siteLogo} />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="msapplication-TileColor" content={config.backgroundColor} />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="description" content={descriptionMeta} />
      <meta name="image" content={image} />
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
