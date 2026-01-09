import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from 'pages/Home'
import About from 'pages/About'
import Experience from 'pages/Experience'
import Projects from 'pages/Projects'
import Contact from 'pages/Contact'
import Logo from 'pages/Logo';
import CVViewer from 'pages/CVViewer';


function App() {

  const [activePage, setActivePage] = useState('Projects')
  // const [activePage, setActivePage] = useState('Home')

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={
        <div className='font-gilroy flex bg-custom_navy max-lg:flex-col max-lg:h-dvh'>
          <Home activePage={activePage} setActivePage={setActivePage} />
          <About activePage={activePage} setActivePage={setActivePage} />
          <Experience activePage={activePage} setActivePage={setActivePage} />
          <Projects activePage={activePage} setActivePage={setActivePage} />
          <Contact activePage={activePage} setActivePage={setActivePage} />
        </div>
      } />
        <Route path="/cv" element={<CVViewer />} />
        <Route path="/logo" element={<Logo />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
