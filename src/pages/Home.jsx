import React from 'react'
import PageLayout from 'layout/PageLayout'
import logo from 'assets/logo_3.gif'

const Home = ({ activePage, setActivePage }) => {
  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Home'}>
      <div className='h-screen flex justify-center items-center w-[1120px]'>
        <main className='w-fit'>
          <div className='w-fit mb-12'>
            <h1 className='page_title text-8xl font-bold mb-2'>Anne Lee</h1>
            <h2 className='text-2xl text-right'>Frontend Developer</h2>
          </div>
          {/* <img src={logo} alt="Anne Lee logo" className='w-130 mb-12'/> */}
          <ul className='[&>li]:list-none'>
            <li> 📍Barcelona, Spain</li>
            <li> 🎨 Frontend Developer with three years of hands-on experience</li>
            <li> 🛠️ Experience and knowkedge in backend development</li>
            <li> ☁️ AWS Certified Cloud Practitioner</li>
          </ul>
        </main>
      </div>
    </PageLayout>
  )
}

export default Home