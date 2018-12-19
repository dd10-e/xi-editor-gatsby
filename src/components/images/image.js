import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = ({ classNameImg, alt }) => (
  <StaticQuery
    // https://github.com/gatsbyjs/gatsby/issues/9047
    // It probably can be useful for that case!
    // Example:
    // let image = "example.png"
    // `file(relativePath: { eq: image })`
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "xi-mac.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        className={classNameImg}
        alt={alt}
      />
    )}
  />
)
export default Image
