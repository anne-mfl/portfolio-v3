import React from 'react'

const Contact = ({ activePage, setActivePage }) => {
  return (
    <div
      className={`bg-teal-400 h-screen ${activePage === 'Contact' ? 'flex-1' : ''}`}
      onClick={() => setActivePage('Contact')}
    >
      Contact
    </div>
  )
}

export default Contact