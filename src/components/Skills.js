import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex justify-center items-center font-semibold rounded-full bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl w-full mt-64 text-center">skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center bg-circularLight">
        <motion.div
          className="flex justify-center items-center font-semibold rounded-full bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>

        <Skill name="SQL" x="0vw" y="-15vw" />
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="Javascript" x="20vw" y="2vw" />
        <Skill name="CSS" x="0vw" y="15vw" />
        <Skill name="Typescript" x="-30vw" y="-10vw" />
        <Skill name="React" x="30vw" y="-10vw" />
        <Skill name="Next.Js" x="-28vw" y="15vw" />
        <Skill name="Node.js" x="15vw" y="20vw" />
        <Skill name="Python" x="0vw" y="40vw" />
        <Skill name="Tailwind CSS" x="20vw" y="-25vw" />
        <Skill name="Angular" x="0vw" y="-30vw" />
        <Skill name="AWS" x="-22vw" y="-25vw" />
        <Skill name="Git" x="27vw" y="30vw" />
        <Skill name="MongoDB" x="-20vw" y="30vw" />
      </div>
    </>
  )
}

export default Skills
