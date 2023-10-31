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
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
          {period} | {location}
        </span>
        <p className="font-medium w-full md:text-sm">{jobDetails}</p>
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
      <h2 className="font-bold text-center text-8xl mb-32 w-full md:text-6xl xs:text-4xl md:mb-16 ">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Technical Expert"
            company=" Apple"
            companyLink="https://apple.com"
            period="2021 - Present"
            location=" Towson, MD"
            jobDetails="Conducted daily debugging and troubleshooting of roughly 15 devices, executing diagnostics, repairs, and functional tests to guarantee optimal operation. Tested devices to ensure functioning capacity and provided maintenance details to customers. 
Successfully trained a weekly average of 25 customers in navigating legacy and newly acquired devices effectively, ensuring their satisfaction with setup services. Demonstrating strong communication and relationship-building skills.
"
          />

          <Details
            position="Full Stack Software Engineer intern"
            company=" Pluralsight"
            companyLink="https://pluralsight.com"
            period="2023 - 2023"
            location="Salt Lake City, UT"
            jobDetails="Engineered and maintained codebase for client-facing websites, utilizing React, Typescript,  and Node.js to optimize the efficiency of the codebase by 5%. 
Wrote Unit Tests, performed code reviews, and cross-browser testing to ensure seamless cross-platform compatibility and responsiveness. 
Collaborated closely with a team to achieve project milestones, serving high-profile clients including Accenture, KPMG, Ford, and others. 
Developed and deployed a user-centric focus support tools page, replacing conventional methods, and enhancing customer service satisfaction by a substantial 15%. Provided documentation for future enhancements and outlined software requirements."
          />

          <Details
            position="CEO"
            company=" Teklitt Solutions"
            companyLink="https://teklittsolutions.com"
            period="2017 - Present"
            location=" Baltimore, MD"
            jobDetails="● Orchestrated the repair of over 1000 devices, encompassing cracked screens of iPads, iPhones, and laptops, achieving a 95% customer
retention rate. ● Managed a team of 2 employees, fostering a collaborative environment and streamlining repair operations to achieve a 20% increase in repair
efficiency. ● Cultivated a strong reputation for customer satisfaction, consistently exceeding expectations and maintaining a 98% customer approval
rating.Leveraged data analytics to continually enhance customer experiences."
          />

          <Details
            position="Lead Technician/Manager"
            company=" Phone Spot"
            companyLink="https://phone-spot-cellphone-accessories-and.business.site/"
            period="2017 - Present"
            location=" Baltimore, MD"
            jobDetails="● Coached and developed a team of 15 technicians in mobile phone repair and troubleshooting techniques, resulting in a 20% increase in overall
repair efficiency. My skills in data analysis played a crucial role in achieving these results.
● Managed and optimized the operations of 2 stores, consistently meeting and exceeding revenue targets by 15% through strategic resource
allocation and customer engagement.
● Demonstrated expertise in diagnosing, troubleshooting, and repairing a wide range of devices including laptops, iPhones, and iPads, contributing to
a 25% reduction in repair turnaround time.
"
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
