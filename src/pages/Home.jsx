import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import Work from '../components/Work';
import Skill from '../components/Skill'
import About from '../components/About';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <Skill />
      <About />
    </div>
  )
}

export default Home
