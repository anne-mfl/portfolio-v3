import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import { projects } from 'data/projects'
import { motion } from "motion/react"
import HeaderWrapper from 'components/HeaderWrapper'
import MainWrapper from 'components/MainWrapper'


const Projects = ({ activePage, setActivePage }) => {

  const thisPage = 'Projects'

  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={thisPage}>
      <HeaderWrapper thisPage={thisPage}>
        Projects
      </HeaderWrapper>

      <div className='h-36'></div>

      <MainWrapper additionalClassName={''}>
        {projects.map((project) => (
          <div key={project.name} className='flex items-center gap-8 mb-14 group hover:bg-custom_yellow/40 hover:shadow-xl px-4 py-5 duration-300 rounded-md'>
            <img
              src={`src/assets/projects/${project.name}.png`}
              alt={project.name}
              className='w-80 object-cover opacity-90 group-hover:opacity-100 duration-300 shadow-lg hover:shadow-xl'
            />
            <div>
              <div className='flex items-center gap-2.5 mb-3'>
                <h2 className='text-2xl group-hover:font-medium'>{project.title}</h2>
                {project.site &&
                  <div className='flex gap-2'>
                    <a href={project.site} target='_blank' rel='noopener noreferrer' className='hover:bg-custom_greyishblue text-sm bg-custom_greyishblue/50 rounded-full px-2 py-1'>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                    <a href={project.repo} target='_blank' rel='noopener noreferrer' className='hover:bg-custom_greyishblue text-sm bg-custom_greyishblue/50 rounded-full px-1.5 py-1'>
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                  </div>
                }
              </div>
              <p className='opacity-80 text-sm mb-4'>{project.desc}</p>
              <div className='tech_stack [&_li]:bg-custom_greyishblue [&_li]:text-custom_navy'>
                <ul>
                  {project.using.map((using) => (
                    <li key={using}>{using}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </MainWrapper>
    </PageLayout>
  )
}

export default Projects