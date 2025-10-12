import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className='h-[100vh] bg-black'></div>
    </main>
  )
} 

export default App