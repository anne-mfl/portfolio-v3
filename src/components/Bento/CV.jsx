import React from 'react'
import { Link } from 'react-router-dom'

const CV = () => {
  return (
    <section className='flex flex-col h-full'>
      <header className='bento_title flex items-center gap-2'>
        CV
      </header>

      <p className='flex grow flex-col justify-center items-center'>
        <Link to='/' className='font-bold text-custom_burgundy'>View my resume</Link>
      </p>
    </section>
  )
}

export default CV