import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-fulll border-t-2 border-solid border-dark mt-20 font-medium text-lg">
      <Layout className="py-8 px-20 flex items-center justify-between mt-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className=" flex items-center">
          Built by&nbsp;
          <Link
            href="https://github.com/teklitt"
            className="underline underline-offset-2"
            target="_blank"
          >
            Femi Mebude
          </Link>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer
