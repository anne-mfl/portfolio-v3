import React from 'react'
import PageLayout from 'layout/PageLayout'


const Contact = ({ activePage, setActivePage }) => {
  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Contact'}>
      <div className="py-10 px-16 min-h-screen  w-[1100px] overflow-auto relative">
        <h1 className='page_title text-[#ebd7ce] absolute top-4 left-6' >Contact</h1>
        <div className='h-36'></div>
      </div>
    </PageLayout>
  )
}

export default Contact