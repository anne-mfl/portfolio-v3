import React from 'react'
import PageLayout from 'layout/PageLayout'


const Contact = ({ activePage, setActivePage }) => {
  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Contact'}>
      <div className="py-12 px-16  w-[1100px] overflow-auto">
        <h1 className='page_title mb-8 text-[#ebd7ce]' >Contact</h1>
      </div>
    </PageLayout>
  )
}

export default Contact