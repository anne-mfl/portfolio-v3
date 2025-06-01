import React from 'react'
import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const Contact = ({ activePage, setActivePage }) => {
  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Contact'}>
      <div className="py-10 px-16 w-[1100px] h-screen overflow-auto relative">
        <h1 className='page_title text-[#ebd7ce] absolute top-4 right-6' >Contact</h1>

        <div className='h-36'></div>

        <main className='flex flex-col items-center justify-center text-center h-[calc(100vh-360px)]'>
          <p className='max-w-[700px] mb-12 text-lg'>
            I am looking for a frontend developer role / junior backend developer role / full-stack developer role
            starting January 2025. Feel free to reach out if you think I would be a good fit for your team or if you just want to say hi!
          </p>

          <div className='mb-10'>
            <a href="mailto:anne.gemma.lee@gmail.com">
              <button className='rounded-full text-custom_black bg-custom_red border-none py-3 px-8 cursor-pointer hover:bg-custom_black hover:text-custom_red'>
                Say Hi
              </button>
            </a>
          </div>

          <ul className='flex gap-6 [&>li]:text-2xl'>
            <li><a href="https://github.com/anne-mfl" className='hover:text-custom_red'><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/anne-gemma-lee/" className='hover:text-custom_red'><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="mailto:anne.gemma.lee@gmail.com" className='hover:text-custom_red'><FontAwesomeIcon icon={faEnvelope} /></a></li>
          </ul>
        </main>
      </div>
    </PageLayout>
  )
}

export default Contact