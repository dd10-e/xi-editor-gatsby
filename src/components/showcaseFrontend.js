import React from 'react'
import 'styled-components/macro'

// import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

const ShowcaseFrontend = ({
  title,
  content,
  isImgLeft,
  className,
  alt,
  srcImg,
}) => (
  <section
    className={`flex flex-col lg:flex-row ${
      isImgLeft ? 'lg:flex-row-reverse' : ''
    }`}
  >
    <div className="flex-1 container mb-auto">
      <h1 className={`mt-16 ${isImgLeft ? 'px-8' : 'px-4 lg:pl-23'}`}>
        {title}
      </h1>
      <p className={`mt-6 text-2xl ${isImgLeft ? 'px-8' : 'px-4 lg:pl-23'}`}>
        {content}
      </p>
    </div>
    <div
      className={`flex-1 flex justify-center mt-4 md:mt-0 ${
        isImgLeft ? 'lg:-ml-32' : 'lg:-mr-32'
      }`}
    >
      {/* <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "xi-mac-preview.png" }) {
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
            className={`max-w-md flex-1 mt-4 md:mt-8 ${className}`}
            alt={alt}
          />
        )}
      /> */}
      <img src={srcImg} alt={alt} className={className} />
    </div>
  </section>
)

export default ShowcaseFrontend
