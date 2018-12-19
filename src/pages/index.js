import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import Image from '../components/image'
import ShowcaseFrontend from '../components/showcaseFrontend'

const gradient = {
  background: 'linear-gradient(#3efc9c 0%, #d9f1e3 100%)',
}

const IndexPage = () => (
  <Layout>
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row bg-blue-darker rounded-t-lg py-4 px-8 lg:px-23">
          <div className="flex-1 flex flex-col">
            <div>
              <h1 className="text-green mb-1 mt-5">
                Incredibly high performance editor.
              </h1>
              <p className="text-green-lighter text-2xl">
                All editing operations should commit and paint in under 16ms.
                The editor should never make you wait for anything.
              </p>
            </div>
            <div>
              <h1 className="text-green mb-1 mt-5">Beauty.</h1>
              <p className="text-green-lighter text-2xl">
                The editor should fit well on a modern desktop, and not look
                like a throwback from the ’80s or ’90s. Text drawing should be
                done with the best technology available (Core Text on Mac,
                DirectWrite on Windows, etc.), and support Unicode fully.
              </p>
            </div>
            <div>
              <h1 className="text-green mb-1 mt-5">Reliability.</h1>
              <p className="text-green-lighter text-2xl">
                Crashing, hanging, or losing work should never happen.
              </p>
            </div>
            <div>
              <h1 className="text-green mb-1 mt-5">Developer friendliness.</h1>
              <p className="text-green-lighter text-2xl">
                It should be easy to customize xi editor, whether by adding
                plug-ins or hacking on the core.
              </p>
            </div>
          </div>
          <div className="flex-1 flex content-center">
            <Image alt="xi-mac" className="" />
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto">
      <div className="pt-6 text-blue-darker" css={gradient}>
        <h1 className="pl-4 lg:pl-23 text-5xl">Powered by Xi.</h1>
        <ShowcaseFrontend
          title="MacOS Frontend."
          content="Xi Editor is the most Advanced of family of frontend of Xi. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              vestibulum, diam vel dictum interdum, augue libero accumsan purus,
              in dictum tortor ligula et dolor. Nam rutrum velit non feugiat
              malesuada. Praesent sed neque sit amet mauris dictum lacinia. Cras
              pretium eget neque non consequat. Ut a nunc pretium, sagittis dui
              in, auctor odio. Sed in justo convallis, ultrices tellus non,
              commodo lectus. Sed massa ex, volutpat quis dui in, condimentum
              scelerisque nibh. Proin eu nisi eu libero semper laoreet. Cras eu
              molestie neque, ut auctor purus."
        />
        <ShowcaseFrontend
          title="GTK Frontend."
          content="Xi Editor is the most Advanced of family of frontend of Xi. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              vestibulum, diam vel dictum interdum, augue libero accumsan purus,
              in dictum tortor ligula et dolor. Nam rutrum velit non feugiat
              malesuada. Praesent sed neque sit amet mauris dictum lacinia. Cras
              pretium eget neque non consequat. Ut a nunc pretium, sagittis dui
              in, auctor odio. Sed in justo convallis, ultrices tellus non,
              commodo lectus. Sed massa ex, volutpat quis dui in, condimentum
              scelerisque nibh. Proin eu nisi eu libero semper laoreet. Cras eu
              molestie neque, ut auctor purus."
          isImgLeft={true}
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
