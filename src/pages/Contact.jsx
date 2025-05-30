import React from 'react'
import PageLayout from 'layout/PageLayout'


const Contact = ({ activePage, setActivePage }) => {
  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Contact'}>
      <div
        className="py-12 px-16 w-[1120px] h-screen overflow-auto bg-curve-contact bg-[position:bottom_right] bg-no-repeat bg-cover bg-fixed"
        style={{ backgroundImage: "url('src/assets/shapes/pink.svg')",  }}
      >
        <h1 className='page_title mb-8' >Contact</h1>
      </div>
    </PageLayout>
  )
}

export default Contact