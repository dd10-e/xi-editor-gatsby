import React from 'react'
import PropTypes from 'prop-types'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const Content = ({ content, className }) => {
  return (
    <div className={className}>
      <MDXRenderer>{content}</MDXRenderer>
    </div>
  )
}

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

export default Content

// import React from 'react'
// import PropTypes from 'prop-types'
// import MDXRenderer from 'gatsby-mdx/mdx-renderer'
// import { withMDXScope } from 'gatsby-mdx/context'

// import Image from './images/image'

// const Content = ({ content, className }) => {
//   return (
//     <div className={className}>
//       <MDXRenderer scope={{ Image }}>{content}</MDXRenderer>
//     </div>
//   )
// }

// Content.propTypes = {
//   content: PropTypes.node,
//   className: PropTypes.string,
//   scope: PropTypes.object,
// }

// export default withMDXScope(Content)
