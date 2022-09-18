import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5]
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <motion.div
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
      >
        {
          projects.map((project, index) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <motion.img
                initial={{
                  y: -300, 
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 1.2
                }}
                viewport={{ once: true }}
                src="/project1.png"
                alt=""
              />

              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#F7Ab0A]/50'>Case Study {index + 1} of {projects.length}:</span> UPS Clone
                </h4>

                <p className='text-lg text-center md:text-left'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit at voluptatum non nihil, velit, atque dolorum maxime, quam corrupti ab cum beatae repellat quibusdam! Sint rerum esse iure soluta.
                </p>
              </div>
            </div>
          ))
        }
      </motion.div>
      <div className='w-full absolute top-[30%] bg-[#F7Ab0A]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  )
}

export default Projects;