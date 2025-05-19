import React, { useState } from 'react'
import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Experience = ({ activePage, setActivePage }) => {

  const [showDetails, setShowDetails] = useState({})
  console.log(showDetails)

  const experiences = [
    {
      title: 'Frontend Developer',
      where: 'Centro Nacional de Análisis Genómico (CNAG)',
      period: 'June 2024 - Present',
      descriptions: [
        'Create data visualization platform for a research project',
        'Design and build a new web site for the lab',
        'Develop full-stack management app for the lab',
      ],
      stacks: ['React', 'JS', 'TS', 'Tailwind CSS', 'Plotly', 'Node.js', 'Express', 'SQLite', 'REST API', 'Git'],
      website: 'https://www.cnag.eu/'
    },
    {
      title: 'Frontend Developer',
      where: 'Nauta Capital',
      period: 'October 2022 - September 2023',
      descriptions: [
        'Maintain and implement new feature of a data-driven investment platform and its Chrome Extension',
        'Develop CRM web application from scratch',
        'Conduct unit tests and integration tests',
      ],
      stacks: ['React', 'JS', 'TS', 'GraphQL', 'Webpack', 'Babel', 'Jest', 'React Testing Library', 'CSS-in-JS (Stitches)', 'Git'],
      website: 'https://nautacapital.com/'
    },
    {
      title: 'Frontend Developer',
      where: 'Mavon GmbH',
      period: 'July 2021 - April 2022',
      descriptions: ["Build company's landing page and web page, converting Figma mocks made by designers to interfaces"],
      stacks: ['React', 'JS', 'Node', 'Express', 'MongoDB', 'Git']
    },
    {
      title: 'JavaScript Full-Stack Bootcamp',
      where: 'Barcelona Code School',
      period: 'May 2021 - July 2021',
      descriptions: ['Intensive full-stack training on web and mobile development with JavaScript MERN stack and React Native'],
      stacks: ['HTML', 'CSS', 'JS', 'Node', 'Express', 'MongoDB', 'React', 'React Native'],
      website: 'https://barcelonacodeschool.com/'
    },
  ]

  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Experience'}>
      <div className="py-12 px-16  w-[1120px] overflow-auto">
        <h1 className='page_title mb-8'>Experience</h1>

        <section className=''>
          {experiences.map((experience) => (
            <div key={experience.where} className='border-b py-10 pl-6'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <h2 className='text-xl'>{experience.where}</h2>
                  {experience.website &&
                    <a href={experience.website} target='_blank' rel='noopener noreferrer' className='hover:text-blue-600 text-sm'>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>}
                </div>
                <p className={`text-5xl mr-12 font-extralight cursor-pointer duration-300 ease-in-out transform ${showDetails[experience.where] ? 'rotate-45' : ''}`}
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
        </section>

        <div className='h-12'></div>

        <div>
          <a href="">
            <button className='rounded-full border border-[#2E2E2E] py-3 px-8 cursor-pointer hover:bg-[#2E2E2E] hover:text-custom_orange'>View CV</button>
          </a>
        </div>
      </div>
    </PageLayout>
  )
}

export default Experience