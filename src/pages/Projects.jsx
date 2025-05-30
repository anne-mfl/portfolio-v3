import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


const Projects = ({ activePage, setActivePage }) => {

  const projects = [
    {
      name: '3domics',
      title: "3d'omics Data Portal",
      using: ['React', 'Typescript', 'TailwindCSS', 'REST API', 'Plotly', 'Chart.js'],
      repo: '',
      site: '',
      desc: '',

    },
    {
      name: 'sgt',
      title: 'Lab Website with Admin Dashboard',
      using: ['React', 'TaiwlindCSS', 'Node.js', 'Express', 'SQLite'],
      repo: '',
      site: '',
      desc: 'Designed and developed a full-stack website for a research group that displays their research, publications, and other group-related content on a dynamic frontend, with a secure admin backend for authenticated content management and full CRUD functionality.',
    },
    {
      name: 'designo',
      title: 'Designo Multi-page Website',
      using: ['Astro', 'Preact', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/designo-multipage-website',
      site: 'https://multipage-website-designo.netlify.app/',
      desc: '',
    },
    {
      name: 'kanban',
      title: 'Kanban Task Management App',
      using: ['Next.js', 'Typescript', 'Redux Toolkit', 'Sass'],
      repo: 'https://github.com/anne-mfl/kanban-task-management',
      site: 'https://kanban-task-management-quhg.vercel.app/',
      desc: '',
    },
    {
      name: 'promptopia',
      title: 'AI Prompt Sharing Full-Stack App',
      using: ['Next.js', 'NextAuth', 'MongoDB', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/promptopia',
      site: 'https://promptopia-seven-ruby.vercel.app/',
      desc: '',
    },
    {
      name: 'audiophile',
      title: 'Audiophile E-commerce Website',
      using: ['React', 'Typescript', 'Redux', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/audiophile-ecommerce-website',
      site: 'https://anne-mfl.github.io/audiophile-ecommerce-website/',
      desc: '',
    },
    {
      name: 'bookmark',
      title: 'Bookmark Landing Page',
      using: ['React', 'TypeScript', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/bookmark-landing-page',
      site: 'https://anne-mfl.github.io/bookmark-landing-page/',
      desc: '',
    },
    {
      name: 'comments',
      title: 'Interactive Comments Section',
      using: ['React', 'Redux', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/interactive-comments-section',
      site: 'https://anne-mfl.github.io/interactive-comments-section/',
      desc: '',
    },
    {
      name: 'v2',
      title: 'Portfolio v2',
      using: ['React', 'Typescript', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/interactive-comments-section',
      site: 'https://anne-mfl.github.io/interactive-comments-section/',
      desc: '',
    },
    {
      name: 'v1',
      title: 'Portfolio v1',
      using: ['React', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/interactive-comments-section',
      site: 'https://anne-mfl.github.io/interactive-comments-section/',
      desc: '',
    },
  ]


  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Projects'}>
      <div className="py-12 px-16 w-[1120px] h-screen overflow-auto bg-curve-projects">
        <h1 className='page_title mb-8'>Projects</h1>
        {projects.map((project) => (
          <div key={project.name}>
            <img src={`src/assets/projects/${project.name}.png`} alt={project.name} className='w-80 object-cover mb-4' />
            <div className='flex items-center gap-2.5 mb-3'> 
              <h2 className='text-2xl'>{project.title}</h2>
              {project.site &&
                <a href={project.site} target='_blank' rel='noopener noreferrer' className='hover:text-custom_red text-sm'>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>}
            </div>
            <div className='tech_stack [&_li]:bg-custom_red [&_li]:text-custom_pink mb-8'>
              <ul>
                {project.using.map((using) => (
                  <li key={using}>{using}</li>
                ))}
              </ul>
            </div>
          </div>
        ))

        }
      </div>
    </PageLayout>
  )
}

export default Projects