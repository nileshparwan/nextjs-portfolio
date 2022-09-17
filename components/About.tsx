import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const About = (props: Props) => {
    return (
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
            className='flex flex-col relative h-screen text-center md:text:left md:flex-row max-w-7xl px-10 
        justify-evenly mx-auto items-center'
        >

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img
                src="/profile.JPG"
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                className="-mb-20 mb:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:hh-95 
                xl:w-[500px] xl:h-[600px]"
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a {" "}
                    <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
                    background
                </h4>

                <p className='text-sm'>
                    Courteous and very enthusiastic. Koshal is a front-end developer with an interest in IT and everything that is in its orbit. I specialize in javascript and have technical experience in react, Next Js, Node Js, Express Js, jest, enzyme, git, Apollo, GraphQL, style components and many others.
                </p>
            </div>
        </motion.div>
    )
}

export default About; 