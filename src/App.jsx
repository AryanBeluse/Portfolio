import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Project from './components/Project'
import Contact from './components/Contact'
import Intro from './components/Intro'
import Skills from './components/Skills'


function App() {
  return (
    <div >  {/*'mx-4 sm:mx[10%]'*/} {/*'mx-auto px-4 sm:px-[10%] max-w-[1440px]'*/}

      <Navbar />
      <Intro />
      <Skills />
      <Project />
      <Contact />


    </div>
  )
}

export default App
