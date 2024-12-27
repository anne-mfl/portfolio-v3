import React from 'react'
import Intro from './Intro'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Education from './Education'
import CV from './CV'
import Contact from './Contact'

const Bento = () => {
  return (
    <div className='px-36 py-12 grid grid-cols-4 gap-3 
    [&>div]:shadow-sm [&>div]:bg-custom_white [&>div]:rounded-md [&>div]:border-0.5 [&>div]:border-neutral-300 [&>div]:p-5
    '>
      <div className='col-span-3 row-span-1'>
        <Intro />
      </div>
      <div className='col-span-1 row-span-3'>
        <About />
      </div>
      <div className='col-span-1 row-span-3'>
        <Projects />
      </div>
      <div className='col-span-1 row-span-2'>
        <Experience />
      </div>
      <div className='col-span-1 row-span-1'>
        <CV />
      </div>
      <div className='col-span-1 row-span-1'>
        <Education />
      </div>
      <div className='col-span-3 row-span-1'>
        <Contact />
      </div>
    </div>
  )
}

export default Bento