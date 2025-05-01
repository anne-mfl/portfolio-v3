import React from 'react'
import PageLayout from 'layout/PageLayout'


const Contact = ({ activePage, setActivePage }) => {
  return (
    // <div
    //   className={`bg-teal-400 h-screen duration-300 ${activePage === 'Contact' ? 'flex-1' : 'w-20'}`}
    //   onClick={() => setActivePage('Contact')}
    // >
    //   Contact
    // </div>
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Contact'}>
      <div>
        Contact
      </div>
    </PageLayout>
  )
}

export default Contact