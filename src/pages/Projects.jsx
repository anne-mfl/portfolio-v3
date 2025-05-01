import React from 'react'
import PageLayout from 'layout/PageLayout'


const Projects = ({ activePage, setActivePage }) => {
  return (
    // <div
    //   className={`bg-teal-300 h-screen duration-300 ${activePage === 'Projects' ? 'flex-1' : 'w-20'}`}
    //   onClick={() => setActivePage('Projects')}
    // >
    //   Projects
    // </div>
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Projects'}>
      <div>
        Projects
      </div>
    </PageLayout>
  )
}

export default Projects