import React from 'react'
import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { AnimatePresence, motion } from "motion/react"


const Contact = ({ activePage, setActivePage }) => {

  const isActive = activePage === 'Contact'


  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Contact'}>
      <AnimatePresence mode='wait'>
        {isActive ? (
          <div className="py-10 px-16 w-[1100px] h-screen overflow-auto relative">
            <motion.h1
              key='contact-header'
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1, transition: { duration: 0.7, delay: 0.8 } }}
              exit={{ opacity: 0, y: "50%", transition: { duration: 0.7, delay: 0.4 } }}
              className='page_title text-[#ebd7ce] absolute top-4 right-6' >
              Contact
            </motion.h1>

            <div className='h-36'></div>

            <motion.main
              key='contact-main'
              initial={{ y: '50%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1, transition: { duration: 0.7, delay: 1.5 } }}
              exit={{ opacity: 0, y: "50%", transition: { duration: 0.7 } }}
              className='flex flex-col items-center justify-center text-center h-[calc(100vh-360px)]'>
              <p className='max-w-[700px] mb-12 text-lg'>
                I am looking for a Frontend Developer / Full-stack Developer role
                starting January 2025.
                <br />
                Feel free to reach out if you think I would be a good fit for your team or if you just want to say hi!
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
            </motion.main>
          </div>
        ) : (
          <motion.div
            key="contact-tab"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex justify-center items-end "
          >
            <h1 className="text-custom_dark_yellow -rotate-90 my-12">
              Contact
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  )
}

export default Contact