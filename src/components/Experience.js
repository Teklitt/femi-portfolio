import React from 'react'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({
  position,
  company,
  companyLink,
  period,
  location,
  jobDetails,
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
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/75">
          {period} | {location}
        </span>
        <p className="font-medium w-full ">{jobDetails}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  return (
    <div className="my-64">
      <h2 className="font-bold text-center text-8xl mb-32 w-full ">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Technical Expert"
            company=" Apple"
            companyLink="wwww.apple.com"
            period="2021 - Present"
            location=" Towson, MD"
            jobDetails="Conducted daily debugging and troubleshooting of roughly 15 devices, executing diagnostics, repairs, and functional tests to guarantee optimal operation. Tested devices to ensure functioning capacity and provided maintenance details to customers. 
Successfully trained a weekly average of 25 customers in navigating legacy and newly acquired devices effectively, ensuring their satisfaction with setup services. Demonstrating strong communication and relationship-building skills.
"
          />

          <Details
            position="Full Stack Software Engineer intern"
            company=" Pluralsight"
            companyLink="wwww.pluralsight.com"
            period="2023 - 2023"
            location="Salt Lake City, UT"
            jobDetails="Engineered and maintained codebase for client-facing websites, utilizing React, Typescript,  and Node.js to optimize the efficiency of the codebase by 5%. 
Wrote Unit Tests, performed code reviews, and cross-browser testing to ensure seamless cross-platform compatibility and responsiveness. 
Collaborated closely with a team to achieve project milestones, serving high-profile clients including Accenture, KPMG, Ford, and others. 
Developed and deployed a user-centric focus support tools page, replacing conventional methods, and enhancing customer service satisfaction by a substantial 15%. Provided documentation for future enhancements and outlined software requirements."
          />

          <Details
            position="Technical Expert"
            company=" Apple"
            companyLink="wwww.apple.com"
            period="2021 - Present"
            location=" Towson, MD"
            jobDetails="Conducted daily debugging and troubleshooting of roughly 15 devices, executing diagnostics, repairs, and functional tests to guarantee optimal operation. Tested devices to ensure functioning capacity and provided maintenance details to customers. 
Successfully trained a weekly average of 25 customers in navigating legacy and newly acquired devices effectively, ensuring their satisfaction with setup services. Demonstrating strong communication and relationship-building skills.
"
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
