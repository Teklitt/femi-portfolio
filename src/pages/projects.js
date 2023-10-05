import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl border-4 border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-3xl bg-dark dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transitions={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-bold text-xl dark:text-primaryDark ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center ">
          <motion.a
            href={github}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light  p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark hover:border hover:border-solid hover:border-dark "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}
const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justift-center rounded-3xl border-4 border-solid border-dark dark:border-light bg-light p-6 relative dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-3xl bg-dark rounded-l-2xl rounded-br-3xl rounded-tr-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transitions={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-bold text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between ">
          <Link
            href={link}
            target="_blank"
            className="text-lg rounded-lg p-2 px-6 bg-dark text-light font-semibold hover:bg-primary hover:text-dark hover:border hover:border-solid hover:border-dark "
          >
            Visit
          </Link>

          <motion.a
            href={github}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            <GithubIcon />
          </motion.a>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title> Femi | Projects Page</title>
        <meta
          name="description"
          content="Computer science student graduation date of Decemebr 2024, interested in software engineering internships and Devops Engineering "
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="My Passion and Expertise" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Ai PromptShare"
                img={project1}
                summary="AI Prompt Share is an innovative full-stack app designed to ignite your creative spark. With features like user-friendly GoogleAuth login, personalized user profiles, and the ability to effortlessly create, save, and delete prompts, our platform is a hub for creative minds. Built using cutting-edge technologies like NextJS, TailwindCSS, MongoDB, and NextAuth."
                link="/"
                type="Featured project"
                github="/"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Ai PromptShare"
                img={project1}
                link="/"
                type="Featured project"
                github="https://github.com/Teklitt"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Ai PromptShare"
                img={project1}
                link="/"
                type="Featured project"
                github="https://github.com/Teklitt"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Ai PromptShare"
                img={project1}
                summary="AI Prompt Share is an innovative full-stack app designed to ignite your creative spark. With features like user-friendly GoogleAuth login, personalized user profiles, and the ability to effortlessly create, save, and delete prompts, our platform is a hub for creative minds. Built using cutting-edge technologies like NextJS, TailwindCSS, MongoDB, and NextAuth."
                link="/"
                type="Featured project"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
