import React from 'react'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { Link } from 'react-router-dom'

const Experience = () => {

  const experiences = [
    {
      position: 'Frontend Developer',
      company: 'CNAG',
      // company: 'CNAG (Centro Nacional de Análisis Genómico)',
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
      position: 'Frontend Developer',
      company: 'Nauta Capital',
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
      position: 'Frontend Developer',
      company: 'Mavon GmbH',
      period: 'July 2021 - April 2022',
      descriptions: ["Build company's landing page and web page, converting Figma mocks made by designers to interfaces"],
      stacks: ['React', 'JS', 'Node', 'Express', 'MongoDB', 'Git']
    },
    // {
    //   position: 'JavaScript Full-Stack Bootcamp',
    //   company: 'Barcelona Code School',
    //   period: 'May 2021 - July 2021',
    //   descriptions: ['Intensive full-stack training on web and mobile development with JavaScript MERN stack and React Native'],
    //   stacks: ['HTML', 'CSS', 'JS', 'Node', 'Express', 'MongoDB', 'React', 'React Native'],
    //   website: 'https://barcelonacodeschool.com/'
    // },
  ]

  return (
    <section>
      <header className='bento_title flex items-center gap-2'>
        Experience
        <Link to='/experience' className=''>
          <OpenInNewRoundedIcon fontSize="small" />
        </Link>
      </header>

      <div className='h-2' />

      {experiences.map((experience, i) => (
        <div>
          <h1 className='font-semibold'>{experience.position}</h1>
          at&nbsp;
          <Link to={experience.website} target="_blank" rel="noopener noreferrer" className='underline text-sm'>
            {experience.company}
          </Link>
          <p className='text-sm font-light mt-1'>{experience.period}</p>

          {i !== experiences.length - 1 &&
            <div className='border-t my-4' />
          }
        </div>
      ))}

      <div className='h-7' />

      <p className='text-center'>
        <Link to='/experience' className='font-bold text-custom_burgundy'>View detail</Link>
      </p>


    </section>
  )
}

export default Experience