import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import Image from '../components/image'

const Wrapper = styled.ul`
  & > ${'li'} {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

const IndexPage = () => (
  <Layout>
    <div className="flex text-grey-darkest ">
      <div className="w-3/5">
        <h1 className="mx-4 md:mx-0 mt-4 font-medium text-4xl">Xi-Editor</h1>
        <p className="italic text-sm mb-4">(pronounced "Zigh")</p>
        <p className="text-normal leading-normal">
          The xi editor project is an attempt to build a high quality text
          editor, using modern software engineering techniques. It is initially
          built for macOS, using Cocoa for the user interface. There are also
          frontends for other operating systems available from third-party
          developers.
        </p>
        <p className="mt-4 mb-2">Goals include:</p>
        <Wrapper>
          <li>
            <span className="font-bold">Incredibly high performance.</span> All
            editing operations should commit and paint in under 16ms. The editor
            should never make you wait for anything.
          </li>
          <li>
            <span className="font-bold">Beauty.</span> The editor should fit
            well on a modern desktop, and not look like a throwback from the
            ’80s or ’90s. Text drawing should be done with the best technology
            available (Core Text on Mac, DirectWrite on Windows, etc.), and
            support Unicode fully.
          </li>
          <li>
            <span className="font-bold">Reliability.</span> Crashing, hanging,
            or losing work should never happen.
          </li>
          <li>
            <span className="font-bold">Developer friendliness.</span> It should
            be easy to customize xi editor, whether by adding plug-ins or
            hacking on the core.
          </li>
        </Wrapper>
        <p>
          Please refer to the October 2018 roadmap to learn more about planned
          features.
        </p>
      </div>
      <div className="w-2/5 mt-4">
        <Image className="max-w-sm" alt="xi-editor-incrustation" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
