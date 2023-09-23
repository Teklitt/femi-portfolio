import React from 'react'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({
  schoolName,
  degree,
  major,
  period,
  location,
  coursework,
}) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">{schoolName}</h3>

        <h2 className="capitalize font-medium text-dark/75">
          {degree} | {major}
        </h2>

        <span className="capitalize font-medium text-dark/75">
          {period} | {location}
        </span>

        <p className="font-medium w-full ">{coursework}</p>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  return (
    <div className="my-64">
      <h2 className="font-bold text-center text-8xl mb-32 w-full ">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            schoolName="Morgan State University"
            degree=" Bachelors"
            major="Computer Science"
            period="2022 - 2024"
            location="Baltimore, MD"
            coursework="Relevant Courses: Software Engineering, Database, Web Development, Object Oriented Programming, Data structures and Algorithm."
          />

          <Details
            schoolName="Prince Georges Community College"
            degree="Associates"
            major="Computer Science"
            period="2020 - 2022"
            location="Largo, MD"
            coursework="Relevant Courses: Operating System, Object Oriented Programming, Data structures and Algorithm."
          />
        </ul>
      </div>
    </div>
  )
}

export default Education