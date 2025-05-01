import React from 'react'
import PageLayout from 'layout/PageLayout'

const About = ({ activePage, setActivePage }) => {
  return (
    // <div
    //   className={`bg-teal-100 h-screen duration-300 ${activePage === 'About' ? 'flex-1' : 'w-20'}`}
    //   onClick={() => setActivePage('About')}
    // >
    //   About
    // </div>
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'About'}>
      <div>
        About meeee
      </div>
    </PageLayout>
  )
}

export default About