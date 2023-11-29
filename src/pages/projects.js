import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'
import project1 from '../../public/images/projects/AIprompts.png'
import flightPro from '../../public/images/projects/flightPro.png'
import dxit from '../../public/images/projects/DXIT.png'
import notion from '../../public/images/projects/Notion.png'
import tfsupport from '../../public/images/projects/TF-Support.png'
import project4 from '../../public/images/projects/profile Card.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl border-4 border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]  " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6  ">
        <span className="text-primary font-bold text-xl dark:text-primaryDark xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
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
            className="ml-4 rounded-lg bg-dark text-light  p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark hover:bg-light hover:text-dark hover:border hover:border-solid hover:border-dark sm:px-2 sm:text-base sm:p-0 sm:text-center "
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
    <article className="w-full flex flex-col items-center justift-center rounded-3xl border-4 border-solid border-dark dark:border-light bg-light p-6 relative dark:bg-dark xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-3xl bg-dark rounded-l-2xl rounded-br-3xl rounded-tr-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
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
        <span className="text-primary font-bold text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl md:text-base ">
            {title}
          </h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between ">
          <Link
            href={link}
            target="_blank"
            className="text-lg rounded-lg p-1 px-6 bg-dark text-light font-semibold dark:bg-light dark:text-dark hover:bg-light hover:text-dark hover:border hover:border-solid hover:border-dark md:text-base md:px-4 md:p-0"
          >
            Visit Project
          </Link>

          <motion.a
            href={github}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3 md:w-6"
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

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Project Library"
            className="mb-16 sm:mb-8 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-3xl  "
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 px-20 sm:px-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Ai PromptShare"
                img={project1}
                summary="AI Prompt Share is an innovative full-stack app designed to ignite your creative spark. With features like user-friendly GoogleAuth login, personalized user profiles, and the ability to effortlessly create, save, and delete prompts, our platform is a hub for creative minds. Built using cutting-edge technologies like NextJS, TailwindCSS, MongoDB, and NextAuth."
                link="https://aiprompts.teklittsolutions.com/"
                type="Personal project"
                github="https://github.com/Teklitt/Aiprompts"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="TF Support Tools Page"
                img={tfsupport}
                summary="Developed a Support Page at Pluralsight using Typescript, Node.js, and React, streamlining common tasks for the TechFoundation support team at Pluralsight. By replacing the need for external tools like Postman, the project led to a remarkable 40% reduction in task completion time, translating to a 25% decrease in customer issue resolution time."
                link="https://github.com/Teklitt/TF-Support-Tool/tree/main"
                type="Personal project"
                github="https://github.com/Teklitt/TF-Support-Tool/tree/main"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Profile Page"
                img={project4}
                link="https://github.com/Teklitt/profile_card"
                type="Personal project"
                github="https://github.com/Teklitt/profile_card"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="DXIT Roboot"
                img={dxit}
                link="https://github.com/Teklitt"
                type="Personal project"
                github="https://github.com/Teklitt"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Flight Pro"
                img={flightPro}
                summary="Flight Pro is an exclusive web application designed for AAdvantage members, offering unparalleled insights and convenience for moments when flight delays disrupt your plans. This app not only predicts potential flight delays but also empowers users with a comprehensive view of their available options in the event of disruptions"
                link="https://github.com/Teklitt/Flight-Pro"
                type="Team project"
                github="https://github.com/Teklitt/Flight-Pro"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Notion API Integration"
                img={notion}
                summary="This program reads data from a CSV file (ratings.csv) containing book name, membername and ratings. Processes it to calculate average ratings for each book, favorite counts, and then populates a Notion database with the results."
                link="https://www.notion.so/80abec0ce90546fda90db472fa1dbc40?v=946de1f64cc54b9f8e0fb96016365e2c"
                type="Personal project"
                github="https://github.com/Teklitt/Notion-Api-Integration"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
