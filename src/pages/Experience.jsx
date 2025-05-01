import React from 'react'
import PageLayout from 'layout/PageLayout'

const Experience = ({ activePage, setActivePage }) => {
  return (
    // <div
    //   className={`bg-teal-200 h-screen duration-300 ${activePage === 'Experience' ? 'flex-1' : 'w-20'}`}
    //   onClick={() => setActivePage('Experience')}
    // >
    //   Experience
    // </div>
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Experience'}>
      <div>
        Experience
      </div>
    </PageLayout>
  )
}

export default Experience