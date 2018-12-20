import React from 'react'
import { H1, H2, H3, H4 } from './titles'
import Ul from './ul'
import Li from './li'
import Em from './em'

export default {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  // TODO add `h2`
  // TODO add `h3`
  // TODO add `h4`
  // TODO add `p`
  // TODO add `pre`
  // TODO add `code`
  // TODO add `table`
  // TODO add `inlineCode`
  // TODO add `a`
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `em`
  em: props => <Em {...props} />,
  ul: props => <Ul {...props} />,
  li: props => <Li {...props} />,
}
