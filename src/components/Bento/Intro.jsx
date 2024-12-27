import React from 'react'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Intro = () => {
  return (
    <section className='flex justify-between'>
      <div>
        <header className='bento_title'>Hi, Hola and こんにちは! I'm Anne 👋</header>
        <ul>
          <li className='mb-1'><PlaceIcon /> Barcelona, Spain</li>
          <li> - Frontend Developer with three years of hands-on development</li>
          <li> - Experience and knowkedge in backend development</li>
          <li> - AWS Certified Cloud Practitioner</li>
        </ul>

        <div className='h-6'></div>

        <ul className='flex items-center gap-3
        [&>a]:group [&>a]:hover:link
        [&>a]:rounded-xl [&>a]:bg-custom_burgundy [&>a]:text-custom_ivory hover:[&>a]:bg-custom_burgundy/70 [&>a]:h-9 [&>a]:w-14 [&>a]:flex [&>a]:items-center [&>a]:justify-center 
        [&>li]:group-hover:link
        [&>a>li>svg]:text-2xl 
      '>
          <Link to="https://www.linkedin.com/in/anne-gemma-lee/" target="_blank" rel="noopener noreferrer">
            <li><LinkedInIcon /> </li>
          </Link>
          <Link to="https://github.com/anne-mfl" target="_blank" rel="noopener noreferrer">
            <li><GitHubIcon /></li>
          </Link>
          <Link to="mailto:anne.gemma.lee@gmail.com" target="_blank" rel="noopener noreferrer">
            <li><MailOutlineIcon /></li>
          </Link>

        </ul>
      </div>

      <div>
        <img src={require('assets/pic2.png')} alt='Anne Lee Picture' className='w-48 h-48 rounded-full rotate-6' />
      </div>
    </section>
  )
}

export default Intro