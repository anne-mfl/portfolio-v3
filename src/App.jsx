import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from 'pages/Home'
import About from 'pages/About'
import BaseLayout from 'src/layout/BaseLayout';
import Projects from 'pages/Projects'
import Logo from 'pages/Logo';

function App() {

  return (
    <BrowserRouter>
      <div className='font-gilroy'>
        <Routes>
          <Route path="/" element={<BaseLayout />} />
          <Route path="/logo" element={<Logo />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
