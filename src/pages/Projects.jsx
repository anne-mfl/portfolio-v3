import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import { projects } from 'data/projects'
import HeaderWrapper from 'components/HeaderWrapper'
import MainWrapper from 'components/MainWrapper'


const Projects = ({ activePage, setActivePage }) => {

  const thisPage = 'Projects'

  const projectImages = import.meta.glob("../assets/projects/*.png", { eager: true });

  const images = Object.fromEntries(
    Object.entries(projectImages).map(([path, module]) => {
      const fileName = path.split("/").pop().replace(".png", "");
      return [fileName, module.default];
    })
  );

  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={thisPage}>
      <HeaderWrapper thisPage={thisPage}>
        Projects
      </HeaderWrapper>

      <div className='h-36 max-lg:h-16'></div>

      <MainWrapper additionalClassName={'[&>div:last-child]:mb-0 max-lg:grid max-lg:grid-cols-2 max-lg:gap-8 max-md:grid-cols-1 max-md:gap-0'}>
        {projects.map((project) => (
          <div
            key={project.name}
            className='flex items-center gap-8 mb-14 group hover:bg-custom_yellow/40 hover:shadow-xl px-4 py-5 duration-100 rounded-md hover:-translate-y-1
            max-xl:flex-col max-md:mx-12 max-md:mb-10 max-sm:mx-0
           '>
            <img
              // src={`src/assets/projects/${project.name}.png`}
              src={images[project.name]}
              alt={project.name}
              className='w-80 object-cover rounded-md opacity-90 group-hover:opacity-100 duration-100 shadow-lg hover:shadow-xl'
            />
            <div>
              <div className='flex items-center gap-2.5 mb-3 max-xl:justify-center max-lg:flex-col max-lg:gap-1'>
                <h2 className='text-2xl group-hover:font-semibold duration-100 max-md:text-xl max-md:font-medium'>
                  {project.title}
                </h2>
                {project.site &&
                  <div className='flex max-md:gap-4'>
                    <a href={project.site} target='_blank' rel='noopener noreferrer' className='hover:bg-custom_greyishblue text-sm  rounded-full px-2 pt-1.5 pb-1 max-lg:text-xs max-lg:px-1.5'>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                    <a href={project.repo} target='_blank' rel='noopener noreferrer' className='hover:bg-custom_greyishblue text-sm  rounded-full px-1.5 pt-1.5 pb-1 max-lg:text-xs max-lg:px-1.5'>
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                  </div>
                }
              </div>
              <p className='opacity-80 text-sm mb-4 max-xl:text-center'>{project.desc}</p>
              <div className='tech_stack [&_li]:bg-custom_greyishblue [&_li]:text-custom_navy'>
                <ul className='max-xl:w-fit max-xl:mx-auto'>
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