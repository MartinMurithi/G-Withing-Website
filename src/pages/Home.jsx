import React from 'react'
import NavBar from '../components/Nav/NavBar';
import Hero from '../components/Hero/Hero';
import About from '../components/About-us/AboutUs';

function Home() {
  return (
    <div>
        <NavBar />
        <Hero />
        <About />
    </div>
  )
}

export default Home