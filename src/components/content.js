import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  * {
    color: rgba(0, 0, 0, 0.87);
  }
  & > ${'p'} {
    display: flex;
    justify-content: start;
    color: #462a16;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  & > ${'h2'} {
    color: #f6993f;
  }

  & > ${'h2'}, & > ${'h3'}, & > ${'h4'} {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #34515e;
  }

  & > ${'p'} > ${'img'} {
    max-width: 20rem;
  }

  ul {
    margin-left: 2rem;
    padding: 0;
  }

  ul > li {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
`

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
