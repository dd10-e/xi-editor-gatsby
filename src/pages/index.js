import 'styled-components/macro'
import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/images/image'
import ShowcaseFrontend from 'components/showcaseFrontend'

import IndexPageContainer from 'containers/pages/indexContainer'
import LayoutContainer from 'containers/components/layoutContainer'

export const IndexPage = ({ theme }) => (
  <LayoutContainer>
    <div className={`bg-${theme.blackOrWhite}`}>
      <div className="container mx-auto">
        <div
          className={`relative flex flex-col-reverse lg:flex-row rounded-t-lg py-4 pl-8 lg:pl-23 bg-${
            theme.secondaryDarker
          }`}
        >
          <div className="absolute pin z-0 overflow-hidden">
            <div className="absolute pin-b ml-32" css="opacity: 0.2">
              <svg
                className="block h-48 w-48 stroke-current text-white"
                css="clip-path: circle(60%);"
                xmlns="http://www.w3.org/2000/svg"
                width="152"
                height="152"
                viewBox="0 0 152 152"
              >
                <g fillRule="evenodd">
                  <g fill="#000">
                    <path d="M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z" />
                  </g>
                </g>
              </svg>
              <svg
                className="block h-48 w-48 stroke-current text-white mt-4"
                css="clip-path: circle(60%);"
                xmlns="http://www.w3.org/2000/svg"
                width="152"
                height="152"
                viewBox="0 0 152 152"
              >
                <g fillRule="evenodd">
                  <g fill="#000">
                    <path d="M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z" />
                  </g>
                </g>
              </svg>
              <svg
                className="block h-48 w-48 stroke-current text-white mt-4"
                css="clip-path: circle(60%);"
                xmlns="http://www.w3.org/2000/svg"
                width="152"
                height="152"
                viewBox="0 0 152 152"
              >
                <g fillRule="evenodd">
                  <g fill="#000">
                    <path d="M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="hidden lg:block absolute pin-r pin-b ml-32">
              <div className="mr-32 flex">
                <svg
                  className="h-48 w-48 -mr-32 z-10 fill-current text-blue-darker"
                  css="opacity: 0.9"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                <svg
                  className="block h-48 w-48 stroke-current text-white"
                  css="clip-path: circle(50%); opacity:0.8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="152"
                  height="152"
                  viewBox="0 0 152 152"
                >
                  <g fillRule="evenodd">
                    <g fill="#000">
                      <path d="M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="mr-32 flex">
                <svg
                  className="h-48 w-48 -mr-32 z-10 fill-current text-blue-darker"
                  css="opacity: 0.9"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                <svg
                  className="block h-48 w-48 stroke-current text-white"
                  css="clip-path: circle(50%); opacity:0.8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="152"
                  height="152"
                  viewBox="0 0 152 152"
                >
                  <g fillRule="evenodd">
                    <g fill="#000">
                      <path d="M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="mr-32 flex">
                <svg
                  className="h-48 w-48 -mr-32 z-10 fill-current text-blue-darker"
                  css="opacity: 0.9"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
                <svg
                  className="block h-48 w-48 stroke-current text-white"
                  css="clip-path: circle(50%); opacity:0.8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="152"
                  height="152"
                  viewBox="0 0 152 152"
                >
                  <g fillRule="evenodd">
                    <g fill="#000">
                      <path d="M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col mb-8 z-10">
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
          <div className="flex-1">
            <Image alt="xi-mac" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto">
      <div className="pt-6 text-blue-darker" css={theme.indexGradient}>
        <h1 className="pl-4 lg:pl-23 text-5xl z-10">Powered by Xi.</h1>
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
          srcImg="/uploads/xi-mac-preview-2.png"
          altImg="xi-mac-preview"
          className=""
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
          altImg="xi-gtk-preview"
          srcImg="/uploads/xi-gtk-preview.png"
          className=""
        />
      </div>
    </div>
  </LayoutContainer>
)

IndexPage.propTypes = {
  theme: PropTypes.object,
}

export default IndexPageContainer
