import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
  return (
    <div
      className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'
    >
      <Head>
        <title>Koshal's Portfolio</title>
      </Head>

      <Header />

      {/* Hero  */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About  */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experience  */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-center'>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-center'>
        <Projects />
      </section>

      {/* contact me */}
      <section id="contactme" className='snap-start'>
        <ContactMe />
      </section>
    </div>
  )
}

export default Home
