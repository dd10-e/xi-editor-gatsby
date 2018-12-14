import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

/**
 * Ideally we would like use Tailwind inside Emotion
 *  but for the moment actual tools doesn't works
 *  probably cause by Emotion 10?
 */
const Wrapper = styled.div`
  & > p {
    color: #12283a;
    line-height: 1.5;
    max-width: 40rem;

    margin-bottom: 1rem;

    font-size: 1rem;

    /* md */
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    /* lg */
    @media (min-width: 992px) {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
    }
  }

  p > li {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  li > p {
    display: inline;
  }

  a {
    display: inline-block;
  }

  p > a,
  li > a,
  li > p {
    color: #34515e;

    font-size: 1rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;

    /* md */
    @media (min-width: 768px) {
      font-size: 1.1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
    }

    /* lg */
    @media (min-width: 992px) {
      font-size: 1.25rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
  a:hover {
    color: #607d8b;
  }

  h2 {
    color: #607d8b;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h1,
  h3 {
    color: #34515e;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    color: #607d8b;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  pre,
  code {
    background-color: #eff8ff;
  }

  pre {
    overflow-x: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`

// Require for handle NetlifyCMS live previewing
export const HTMLContent = ({ content, className }) => (
  <Wrapper
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
