import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import Work from '../components/Work';
import Skill from '../components/Skill'
import About from '../components/About';
import Contact from '../components/Contact'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <Skill />
      <About />
      <Contact />
    </div>
  )
}

export default Home
