import React from 'react'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { Link } from 'react-router-dom'


const Projects = () => {

  const projects = [
    {
      name: 'Kanban Task Management',
      desc: 'Fully-functional task management app with a light/dark mode toggle',
      stacks: ['Next.js', 'TypeScript', 'Sass', 'Redux Toolkit'],
    },
    {
      name: 'Promptopia',
      desc: 'Next.js application with comprehensive CRUD AI Prompt sharing system utilizing a MongoDB database and implementing NextAuth authentication',
      stacks: ['Next.js', 'MongoDB', 'NextAuth', 'Tailwind CSS']
    },
    {
      name: 'Audiophile E-commerce Website',
      desc: 'Multi-page e-commerce website for a fictional audio hardware store',
      stacks: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS']
    }
  ]

  return (
    <section>
      <header className='bento_title flex items-center gap-2'>
        Projects
        <Link to='/projects' className=''>
          <OpenInNewRoundedIcon fontSize="small" />
        </Link>
      </header>


      <div className='h-2' />

      {projects.map((project, i) => (
        <div>
          <h1 className='font-semibold'>{project.name}</h1>
          <p className='text-sm font-light mt-1'>{project.desc}</p>
          <ul className='flex flex-wrap gap-1.5 mt-2'>
          {project.stacks.map(stack => (
            <li className='border-1 border-custom_burgundy text-custom_burgundy px-2 py-1 rounded-xl text-[11px] whitespace-nowrap'>
            {/* <li className='bg-custom_burgundy text-custom_ivory px-2 py-1 rounded-xl text-[11px] whitespace-nowrap'> */}
              {stack}
              </li>
          ))}
          </ul>

          {i !== projects.length - 1 &&
            <div className='border-t my-4' />
          }
        </div>
      ))}

      <div className='h-8' />

      <p className='text-center'>
        <Link to='/projects' className='font-bold text-custom_burgundy'>View more projects</Link>
      </p>


    </section>
  )
}

export default Projects