import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXTag } from '@mdx-js/tag'

const Content = ({ content, className }) => (
  <Wrapper>
    <MDXRenderer className={className} scope={{ React, MDXTag }}>
      {content}
    </MDXRenderer>
  </Wrapper>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

export default Content

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
  li > p,
  li {
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
    color: #12283a;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

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

  /* pre,
  code {
    background-color: #eff8ff;
  }

  pre {
    overflow-x: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
  } */

  p > code {
    background-color: #eff8ff;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #657b83; /* base00 */
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;

    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #93a1a1; /* base1 */
  }

  .token.punctuation {
    color: #586e75; /* base01 */
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #268bd2; /* blue */
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.url,
  .token.inserted {
    color: #2aa198; /* cyan */
  }

  .token.entity {
    color: #657b83; /* base00 */
    background: #eee8d5; /* base2 */
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #859900; /* green */
  }

  .token.function,
  .token.class-name {
    color: #b58900; /* yellow */
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #cb4b16; /* orange */
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`
