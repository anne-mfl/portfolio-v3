import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='h-12 px-12 flex justify-between items-center shadow-sm '>
      {/* <img src={require('assets/logo3.png')} alt='Anne Lee logo' className='h-8'/> */}
      <h1 className='font-montserrat text-2xl text-custom_burgundy'>
        <Link to='/'>
          <span className='font-bold'>ANNE</span>
          <span className='font-light'>LEE</span>
        </Link>
      </h1>
      <ul className='flex items-center gap-6 font-poppins'>
        <li><Link to='/experience'>Experience</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar