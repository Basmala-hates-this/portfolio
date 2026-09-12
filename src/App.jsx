import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Glaukopis from './components/Glaukopis'
import Projects from './components/Projects'

function App() {

  return (
    <main>
      <Hero />
      <About />
      <Glaukopis />
      <Projects />
    </main>
  )
}

export default App
