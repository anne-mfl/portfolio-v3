import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "motion/react"

const PageLayout = ({ children, activePage, setActivePage, thisPage }) => {

  const getDelay = () => {
    switch (thisPage) {
      case 'About':
        return 0.1;
      case 'Experience':
        return 0.2;
      case 'Projects':
        return 0.3;
      case 'Contact':
        return 0.4;
      default:
        return 0.5;
    }
  }

  let changePage = false

  // useEffect(()=> {
  //   const timer = setTimeout(() => {
  //     changePage = true;
  //   }, 400);
  //   return () => clearTimeout(timer);
  // }, [activePage])

  // console.log({changePage, thisPage, activePage})

  return (
    <AnimatePresence mode='wait'>

      <motion.div
        key={thisPage}
        initial={thisPage === 'Home' ? {} : { y: '-100%', opacity: 0.5 }}
        animate={thisPage === 'Home' ? {} : { y: '0%', opacity: 1, transition: { duration: 0.1, delay: getDelay() } }}
        exit={{ opacity: 0, y: "-100%", transition: { duration: 0.4, delay: 0.8 } }}
        className={`h-screen duration-500 delay-700
          ${activePage === thisPage ? 'flex-1 min-w-20' : 'w-20'}
          ${thisPage === 'Home' && 'bg-custom_navy text-custom_white'}
          ${thisPage === 'About' && 'bg-custom_red text-custom_white'}
          ${thisPage === 'Experience' && 'bg-custom_greyishblue text-custom_black'}
          ${thisPage === 'Projects' && 'bg-custom_mustard text-custom_black'}
          ${thisPage === 'Contact' && 'bg-custom_pink text-custom_black'}
        `}
        onClick={() => setActivePage(thisPage)}
      >
        <div className='overflow-auto h-full'>
        {children}
      </div>

      
        {/* {
        thisPage === activePage
        // changePage && thisPage === activePage
          ?
          <div className='overflow-auto h-full'>{children}</div>
          :
          <div className='h-screen flex justify-center items-end'>
            <h1 className={`${thisPage === 'Projects' || thisPage === 'Experience' || thisPage === 'Contact' ? 'text-custom_dark_yellow' : 'text-custom_yellow'} -rotate-90 my-12`}>
              {thisPage}
            </h1>
          </div>
      } */}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageLayout

