import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from 'pages/Home'
import About from 'pages/About'
import Experience from 'pages/Experience'
import Projects from 'pages/Projects'
import Contact from 'pages/Contact'


function App() {

  const [activePage, setActivePage] = useState('Experience')

  return (
    <BrowserRouter>
      {/* <Routes> */}
      {/* <Route path="/" element={<BaseLayout />} /> */}
      <div className='font-gilroy flex bg-custom_navy
        max-lg:flex-col max-lg:h-dvh
      '>
        <Home activePage={activePage} setActivePage={setActivePage} />
        <About activePage={activePage} setActivePage={setActivePage} />
        <Experience activePage={activePage} setActivePage={setActivePage} />
        <Projects activePage={activePage} setActivePage={setActivePage} />
        <Contact activePage={activePage} setActivePage={setActivePage} />
      </div >
    </BrowserRouter>
  )
}

export default App
