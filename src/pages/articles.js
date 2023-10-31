import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import Utah from '../../public/images/articles/Life in Utah.jpg'
import Ats from '../../public/images/articles/ATS system.png'
import foodDrive from '../../public/images/articles/food drive.png'
import paddleBoard from '../../public/images/articles/paddle Board.png'

import { useRef } from 'react'
import TransitionEffect from '@/components/TransitionEffect'
const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block'
    x.set(event.pageX)
    y.set(-10)
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      ></FramerImage>
    </Link>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col md:pb-2 sm:self-start"
    >
      <MovingImg title={title} img={img} link={link} />

      <span className="text-primary font-bold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  )
}

const FearuredArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border-4 border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-3xl bg-dark " />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block  cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-[300px]"
          whileHover={{ scale: 1.05 }}
          transitions={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <a href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </a>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  )
}

const articles = () => {
  return (
    <>
      <Head>
        <title> Femi | Article Page</title>
        <meta
          name="description"
          content="Computer science student graduation date of Decemebr 2024, interested in software engineering internships and Devops Engineering "
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-centerpt-16 justify-center overflow-hidden dark:text-light px-10">
        <Layout className="pt-16">
          <AnimatedText
            text="Documenting My Journey"
            className="mb-16 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FearuredArticle
              title="Summer 2023 in Utah"
              summary="Spent my summer 2023 in salt Lake City, working as a Full stack software engineeer at Pluralsight."
              time="3 min read"
              link="/"
              img={Utah}
            />

            <FearuredArticle
              title="Key to Cracking Resume ATS"
              summary="How I applied to over 50 software Engineering Intern Positions and received over 15 Interviews, and landed 5 offers."
              time="3 min read"
              link="/"
              img={Ats}
            />
          </ul>
          <h2 className=" font-bold text-4xl w-full text-center my-16 mt-32 ">
            All Articles
          </h2>
          <ul>
            <Article
              title="Giving back to the Homeless community in Utah."
              img={foodDrive}
              date="June 22, 2023"
              link="/"
            />

            <Article
              title="Preparing for Software Engineering Interviews."
              img={Utah}
              date="June 22, 2023"
              link="/"
            />
            <Article
              title="Learning to Swim in 1 week."
              img={Utah}
              date="June 22, 2023"
              link="/"
            />

            <Article
              title="Almost Drowned Paddle Boarding."
              img={paddleBoard}
              date="June 22, 2023"
              link="/"
            />

            <Article
              title="How I almost Drowned Paddle Boarding."
              img={Utah}
              date="June 22, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles
