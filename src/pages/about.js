import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import thinking_face1 from '../../public/images/profile/thinking_face1.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title> Femi | About Page</title>
        <meta
          name="description"
          content="Computer science student graduation date of Decemebr 2024, interested in software engineering internships and Devops Engineering "
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 px-32">
          <AnimatedText
            text="Navigating Tech with Passion and Purpose!"
            className="!text-6xl mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium ">
                Hey there, I'm Oluwanifemi Mebude, a computer science student
                and tech enthusiast based in Baltimore, MD. I'm on a mission to
                explore the world of technology and make a difference through
                innovation.
              </p>
              <p className="font-medium py-4 ">
                Currently, I'm studying Computer Science at Morgan State
                University, and I'm super passionate about it. I've been doing
                great academically and have even won some awards like the HBCU
                Impact Scholar and the Morgan State Academic Achievement
                Trailblazer award. My coursework has covered a bunch of cool
                stuff like software engineering, web development, and data
                structures.
              </p>
              <p className="font-medium py-4 ">
                When I'm not studying, I'm diving into real-world tech projects.
                I've worked at Apple, helping customers with their devices, and
                at Pluralsight, where I got to code for client-facing websites.
                I've even started my own tech repair business, Teklitt Solutions
                LLC, where I've fixed over a thousand devices.
              </p>
              <p className="font-medium py-4 ">
                Outside of work, I've tackled projects like creating a financial
                app for college students and building a website about police
                brutality. Oh, and I've also led teams as a Student Leader at my
                university. I'm all about using my skills to solve problems and
                make tech more accessible and fun for everyone. Let's connect
                and make cool things happen!
              </p>
            </div>
            <div className=" col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark  p-8 bg-light dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={thinking_face1}
                alt="profile image"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between px-20 ">
              <div className=" flex flex-col items-end font-medium justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Satisfied Clients
                </h2>
              </div>
              <div className=" flex flex-col items-end font-medium justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Projects Completed
                </h2>
              </div>
              <div className=" flex flex-col items-end font-medium justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />

          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
