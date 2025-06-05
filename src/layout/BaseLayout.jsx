import React, { useState, useEffect } from 'react'
import Home from 'pages/Home'
import About from 'pages/About'
import Experience from 'pages/Experience'
import Projects from 'pages/Projects'
import Contact from 'pages/Contact'
import { AnimatePresence, motion } from "motion/react"

const BaseLayout = () => {

  const [activePage, setActivePage] = useState('Home')



  return (
    <div className='flex bg-custom_navy'>
      {/* <AnimatePresence mode='wait'> */}
      <Home activePage={activePage} setActivePage={setActivePage} />
      <About activePage={activePage} setActivePage={setActivePage} />
      <Experience activePage={activePage} setActivePage={setActivePage} />
      <Projects activePage={activePage} setActivePage={setActivePage} />
      <Contact activePage={activePage} setActivePage={setActivePage} />
    {/* </AnimatePresence> */}
    </div >
  )
}

export default BaseLayout