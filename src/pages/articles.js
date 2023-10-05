import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/todo list app built using react redux and framer motion.png'
import { motion, useMotionValue } from 'framer-motion'
import article3 from '../../public/images/articles/What is Redux with easy explanation.png'
import article4 from '../../public/images/articles/create modal component in react using react portals.png'
import article5 from '../../public/images/articles/What is higher order component in React.jpg'
import article6 from '../../public/images/articles/smooth scrolling in reactjs.png'
import { useRef } from 'react'
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
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
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
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light"
    >
      <MovingImg title={title} img={img} link={link} />

      <span className="text-primary font-bold pl-4 dark:text-primaryDark">
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
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transitions={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <a href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
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
      <main className="w-full mb-16 flex flex-col items-centerpt-16 justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Documenting My Journey" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FearuredArticle
              title="Life in Utah"
              summary="Spent my summer 2023 in salt Lake City, working as a Full stack software engineeer at Pluralsight"
              time="3 min read"
              link="/"
              img={article1}
            />

            <FearuredArticle
              title="Life in Utah"
              summary="Spent my summer 2023 in salt Lake City, working as a Full stack software engineeer at Pluralsight"
              time="3 min read"
              link="/"
              img={article2}
            />
          </ul>
          <h2 className=" font-bold text-4xl w-full text-center my-16 mt-32 ">
            All Articles
          </h2>
          <ul>
            <Article
              title="Giving back to the community"
              img={article3}
              date="June 22, 2023"
              link="/"
            />

            <Article
              title="Giving back to the community"
              img={article4}
              date="June 22, 2023"
              link="/"
            />
            <Article
              title="Giving back to the community"
              img={article5}
              date="June 22, 2023"
              link="/"
            />

            <Article
              title="Giving back to the community"
              img={article6}
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
