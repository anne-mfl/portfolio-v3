import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import { projects } from 'data/projects'
import { AnimatePresence, motion } from "motion/react"

const Projects = ({ activePage, setActivePage }) => {

  const isActive = activePage === 'Projects'


  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Projects'}>
      <AnimatePresence mode='wait'>
        {isActive ? (
          <div className="py-10 px-16 w-[1120px] h-screen overflow-auto relative">

            <motion.h1
              key='projects-header'
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1, transition: { duration: 0.7, delay: 0.8 } }}
              exit={{ opacity: 0, y: "50%", transition: { duration: 0.7, delay: 0.4 } }}
              className='page_title mb-12 text-[#e4c8a1] absolute top-4 right-6'>
              Projects
            </motion.h1>

            <div className='h-36'></div>

            <motion.main
              key='projects-main'
              initial={{ y: '50%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1, transition: { duration: 0.7, delay: 1.5 } }}
              exit={{ opacity: 0, y: "50%", transition: { duration: 0.7 } }}

            >
              {projects.map((project) => (
                <div key={project.name} className='flex items-center gap-8 mb-20'>
                  <img src={`src/assets/projects/${project.name}.png`} alt={project.name} className='w-80 object-cover' />
                  <div>
                    <div className='flex items-center gap-2.5 mb-3'>
                      <h2 className='text-2xl'>{project.title}</h2>
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
            </motion.main>
          </div>
        ) : (
          <motion.div
            key="projects-tab"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex justify-center items-end "
          >
            <h1 className="text-custom_dark_yellow -rotate-90 my-12">
              Projects
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  )
}

export default Projects