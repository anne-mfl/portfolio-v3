import React from 'react'

const Experience = ({ activePage, setActivePage }) => {
  return (
    <div
      className={`bg-teal-200 h-screen ${activePage === 'Experience' ? 'flex-1' : ''}`}
      onClick={() => setActivePage('Experience')}
    >
      Experience
    </div>
  )
}

export default Experience