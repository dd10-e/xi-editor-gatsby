import React from 'react'

const Footer = ({ theme }) => (
  <footer className="flex-no-shrink h-32 w-full bg-green-lighter relative">
    <div className="text-xs text-blue-darker pin flex justify-between items-center h-full container mx-auto">
      <p>
        See the{' '}
        <a
          href="https://github.com/xi-editor/xi-editor"
          className="text-blue-darker hover:text-green font-semibold"
        >
          GitHub Project
        </a>
      </p>
      <p>{theme}</p>
    </div>
  </footer>
)

export default Footer
