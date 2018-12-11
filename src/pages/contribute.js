import React from 'react'

import Layout from '../components/layout'

const Contribute = () => (
  <Layout>
    <div className="flex text-grey-darkest ">
      <div className="w-3/5">
        <h1 className="mx-4 md:mx-0 mt-4 font-medium text-4xl">Contribute</h1>
        <p className="text-normal leading-normal mt-6">
          The xi editor project is an attempt to build a high quality text
          editor, using modern software engineering techniques. It is initially
          built for macOS, using Cocoa for the user interface. There are also
          frontends for other operating systems available from third-party
          developers.
        </p>
        <p className="mt-4 mb-2">Goals include:</p>
        <p>
          Please refer to the October 2018 roadmap to learn more about planned
          features.
        </p>
      </div>
    </div>
  </Layout>
)

export default Contribute
