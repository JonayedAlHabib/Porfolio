import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import Work from '../components/Work';
import Skill from '../components/Skill'
import About from '../components/About';
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <Skill />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
