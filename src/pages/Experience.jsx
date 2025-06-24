import { useState } from 'react'
import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
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

      <MainWrapper additionalClassName={''}>
        <main className='flex flex-col !justify-between min-h-[calc(100dvh-80px)] max-lg:min-h-[calc(100dvh-160px-80px)]'>

          <section className='h-20 max-lg:h-16'></section>

          <section className=''>
            {experiences.map((experience) => (
              <div key={experience.where} className='border-b py-8 pl-6 pr-12 max-lg:px-0 max-lg:py-4'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <h2 className='text-xl max-lg:text-lg max-lg:mr-4'>{experience.where}</h2>
                    {experience.website &&
                      <a href={experience.website} target='_blank' rel='noopener noreferrer' className='hover:text-custom_yellow text-sm max-lg:hidden'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>}
                  </div>
                  <p className={`text-5xl font-extralight cursor-pointer duration-300 ease-in-out transform hover:bg-custom_yellow/50 px-4 pt-2 rounded-full
               ${showDetails[experience.where] ? 'rotate-45' : ''}
               max-lg:text-3xl max-lg:font-normal max-lg:pt-1 max-lg:px-3
               `}
                    onClick={() => setShowDetails((prev) => ({ ...prev, [experience.where]: !prev[experience.where] }))}
                  >+</p>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-6 
              ${showDetails[experience.where] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
              max-lg:pl-1.5
              `}>
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
                  {experience.website &&
                    <p className='hidden max-lg:block'>
                      <a href={experience.website} target='_blank' rel='noopener noreferrer' className='text-custom_navy underline text-xs hover:text-custom_mustard'>
                        {experience.where} website
                      </a>
                    </p>
                  }
                </div>
              </div>
            ))}
          </section>

          <section className='mt-6'>
          <a href="/cv" target='_blank'>
            {/* <a href="Anne_Lee_CV.pdf" target='_blank'> */}
              <button className='rounded-full bg-custom_mustard border-none py-3 px-8 cursor-pointer hover:bg-custom_black hover:text-custom_mustard'>
                View CV
              </button>
            </a>
          </section>

        </main>
      </MainWrapper>
    </PageLayout>
  )
}

export default Experience


