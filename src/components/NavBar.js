import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, StackIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { useState } from 'react'

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()
  //console.log(router)

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light ">
      <button
        className=" flex-col justify-center items-center hidden lg:flex mb-2"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="mx-4" />
          <CustomLink
            href="/awards"
            title="Awards & Certifications"
            className="ml-4 1xl:hidden "
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="www.linkedin.com/in/femi-mebude-639118190"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-7"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            href="https://github.com/teklitt"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 ml-5"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            href="https://stackoverflow.com/users/22582678/teklitt"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 ml-5"
          >
            <StackIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-5 flex items-center justify-center rounded-full p-1
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
          `}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
