import React from 'react'
import PageLayout from 'layout/PageLayout'

const Home = ({ activePage, setActivePage }) => {
  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Home'}>
      <div className='w-full h-screen flex justify-center items-center'>
        <main className=''>
          <h1 className='text-8xl font-bold'>Anne Lee</h1>
          <h2 className='text-2xl mb-4'>Frontend Developer</h2>
          <ul className='[&>li]:list-none'>
            <li> 📍Barcelona, Spain</li>
            <li> 🎨 Frontend Developer with three years of hands-on development</li>
            <li> 🛠️ Experience and knowkedge in backend development</li>
            <li> ☁️ AWS Certified Cloud Practitioner</li>
          </ul>
        </main>
      </div>
    </PageLayout>
  )
}

export default Home