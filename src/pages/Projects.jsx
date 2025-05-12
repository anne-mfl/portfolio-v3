import React from 'react'
import PageLayout from 'layout/PageLayout'


const Projects = ({ activePage, setActivePage }) => {
  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Projects'}>
      <div className="py-12 px-16 overflow-auto">
        <h1 className='page_title mb-8'>Projects</h1>
      </div>
    </PageLayout>
  )
}

export default Projects