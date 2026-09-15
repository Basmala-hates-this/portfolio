import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Glaukopis from './components/Glaukopis'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Sidebar className="" />
      <main className="bg-linear-[135deg,var(--color-light),var(--color-bg-sidebar),var(--color-bg-main),var(--color-bg-body),var(--color-bg-card),var(--color-dark),var(--color-blue-dark),var(--color-chat-bg)]
      text-text-primary min-h-screen left-10 ">
        <Hero />
        <About />
        <Glaukopis />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
