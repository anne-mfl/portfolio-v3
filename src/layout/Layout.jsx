import React, {useState} from 'react'
import Home from 'pages/Home'
import About from 'pages/About'
import Experience from 'pages/Experience'
import Projects from 'pages/Projects'
import Contact from 'pages/Contact'

const Layout = () => {

  const [activePage, setActivePage] = useState('Home')

  return (
    <div className='flex'>
      <Home activePage={activePage} setActivePage={setActivePage}/>
      <About activePage={activePage} setActivePage={setActivePage}/>
      <Experience activePage={activePage} setActivePage={setActivePage}/>
      <Projects activePage={activePage} setActivePage={setActivePage}/>
      <Contact activePage={activePage} setActivePage={setActivePage}/>
    </div>
  )
}

export default Layout