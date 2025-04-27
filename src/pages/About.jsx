import React from 'react'

const About = ({activePage, setActivePage}) => {
  return (
    <div 
    className={`bg-teal-100 h-screen ${activePage === 'About' ? 'flex-1' : ''}`}
    onClick={() => setActivePage('About')}
    >
      About
      </div>
  )
}

export default About