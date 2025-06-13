import { useState } from 'react'
import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { motion } from "motion/react"
import { experiences } from 'data/experience'
import HeaderWrapper from 'components/HeaderWrapper'
import MainWrapper from 'components/MainWrapper'


const Experience = ({ activePage, setActivePage }) => {

  const [showDetails, setShowDetails] = useState({})
  const thisPage = 'Experience'

  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={thisPage}>
      <HeaderWrapper thisPage={thisPage}>
        Experience
      </HeaderWrapper>

      <MainWrapper additionalClassName={'mt-24 max-lg:mt-16'}>
        {experiences.map((experience) => (
          <div key={experience.where} className='border-b py-8 pl-6 pr-12'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <h2 className='text-xl'>{experience.where}</h2>
                {experience.website &&
                  <a href={experience.website} target='_blank' rel='noopener noreferrer' className='hover:text-custom_yellow text-sm'>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>}
              </div>
              <p className={`text-5xl font-extralight cursor-pointer duration-300 ease-in-out transform hover:bg-custom_yellow/50 px-4 pt-2 rounded-full ${showDetails[experience.where] ? 'rotate-45' : ''}`}
                onClick={() => setShowDetails((prev) => ({ ...prev, [experience.where]: !prev[experience.where] }))}
              >+</p>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-6  ${showDetails[experience.where] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
              <h3 className='text-lg font-bold mt-6'>{experience.title}</h3>
              <p className='text-sm mb-3'>{experience.period}</p>
              <ul className='list-disc pl-5 mb-4'>
                {experience.descriptions.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
              <div className='tech_stack mb-4'>
                <ul>
                  {experience.stacks.map((stack) => (
                    <li key={stack}>{stack}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className='h-12'></div>
        <div>
          <a href="">
            <button className='rounded-full bg-custom_mustard border-none py-3 px-8 cursor-pointer hover:bg-custom_black hover:text-custom_mustard'>View CV</button>
          </a>
        </div>
      </MainWrapper>
    </PageLayout>
  )
}

export default Experience


