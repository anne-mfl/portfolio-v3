import React from 'react'
import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
// import logo from 'assets/logo_3.gif'

const Home = ({ activePage, setActivePage }) => {
  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Home'}>
      <div className='h-screen flex justify-start items-end w-[1120px] '>
        <main className='pb-16 pl-16'>
          {/* <h1 className='page_title text-7xl font-bold relative z-10'>
            Anne Lee
            <div className='bg-[#1a2e40] h-28 w-70 -ml-16 -mt-20 z-0'>&nbsp;</div>
          </h1> */}
          <h1 className='page_title text-7xl font-bold'>Anne Lee</h1>
          <h2 className='page_title text-xl font-semibold mb-8'>Frontend Developer</h2>
          <p className='mb-8'>
            <b>Frontend Developer</b> at <a href="https://www.cnag.eu/" className='underline text-custom_yellow'>CNAG</a> with 3+ years of
            <br />
            experience turning ideas into fast, intuitive web apps.
            <br />
            Also skilled in <b>Backend Development</b> and
            <br />
            an <b>AWS Certified Cloud Practitioner</b>.
          </p>
          {/* <p className='mb-8'>
          Currently a <b>Frontend Developer</b> at&nbsp;
          <a href="" className='underline text-custom_yellow'>CNAG</a>,
          three years of experience in building user-centric web applications.
          Experience with <b>Backend Development</b> and a <b>AWS Certified Cloud Practitioner</b>
        </p> */}
          <ul className='flex gap-4 [&>li]:text-2xl'>
            <li><a href="https://github.com/anne-mfl" className='hover:text-custom_yellow'><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/anne-gemma-lee/" className='hover:text-custom_yellow'><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="mailto:anne.gemma.lee@gmail.com" className='hover:text-custom_yellow'><FontAwesomeIcon icon={faEnvelope} /></a></li>
          </ul>
        </main>
        {/* <main className='w-fit'>
          <div className='w-fit mb-12'>
            <h1 className='page_title text-9xl font-bold mb-2'>Anne Lee</h1>
            <h2 className='text-2xl text-right'>Frontend Developer</h2>
          </div>
          <ul className='[&>li]:list-none'>
            <li> 📍Barcelona, Spain</li>
            <li> 🎨 Frontend Developer with three years of hands-on experience</li>
            <li> 🛠️ Experience and knowkedge in backend development</li>
            <li> ☁️ AWS Certified Cloud Practitioner</li>
          </ul>
        </main> */}
      </div>
    </PageLayout>
  )
}

export default Home