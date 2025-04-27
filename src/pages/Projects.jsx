import React from 'react'

const Projects = ({ activePage, setActivePage }) => {
  return (
    <div
      className={`bg-teal-300 h-screen ${activePage === 'Projects' ? 'flex-1' : ''}`}
      onClick={() => setActivePage('Projects')}
    >
      Projects
    </div>
  )
}

export default Projects