import React from 'react'

const Footer = () => (
  <footer className="flex-no-shrink h-32 w-full bg-green-lighter relative">
    <p className="text-xs text-blue-darker absolute pin-b pin-l mb-4 ml-8">
      See the{' '}
      <a
        href="https://github.com/xi-editor/xi-editor"
        className="text-blue-darker hover:text-green font-semibold"
      >
        GitHub Project
      </a>
    </p>
  </footer>
)

export default Footer
