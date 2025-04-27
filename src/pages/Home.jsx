import React from 'react'

const Home = ({ activePage, setActivePage }) => {
  return (
    <div
      className={`bg-teal-50 h-screen ${activePage === 'Home' ? 'flex-1' : ''}`}
      onClick={() => setActivePage('Home')}
    >
      Home
    </div>
  )
}

export default Home