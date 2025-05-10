import React, { useState } from 'react'
import PageLayout from 'layout/PageLayout'

const Experience = ({ activePage, setActivePage }) => {

  const [showDetails, setShowDetails] = useState({

  })

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
      <div className="py-12 px-16 w-[1120px] overflow-auto">
        <h1 className='page_title mb-8'>Experience</h1>

        <section>
          {experiences.map((experience) => (
            <div className='border-b'>
              <div className='flex justify-between items-center py-10'>
                <h2 className='text-xl'>{experience.where}</h2>
                <p className={`text-5xl mr-12 font-extralight cursor-pointer duration-300 ${showDetails[experience.where] ? 'rotate-45' : ''}`}
                  onClick={() => setShowDetails((prev) => ({ ...prev, [experience.where]: !prev[experience.where] }))}
                >+</p>
              </div>
              {showDetails[experience.where] && (
                  <div className='text-lg'>
                    <h3 className='text-lg font-bold'>{experience.title}</h3>
                    <p className='text-sm'>{experience.period}</p>
                    <ul className='list-disc pl-5'>
                      {experience.descriptions.map((description, index) => (
                        <li key={index}>{description}</li>
                      ))}
                    </ul>
                    <p className='text-sm'>Tech stack: {experience.stacks.join(', ')}</p>
                    {experience.website && <a href={experience.website} target='_blank' rel='noopener noreferrer' className='text-sm text-blue-500 underline'>Website</a>}
                  </div>
                )
              }
              <p></p>
            </div>
          ))}
        </section>

        <div className='h-12'></div>

        <div>
          <button className='rounded-full border py-3 px-6'>View CV</button>
        </div>
      </div>
    </PageLayout>
  )
}

export default Experience