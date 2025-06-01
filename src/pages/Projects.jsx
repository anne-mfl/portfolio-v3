import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'


const Projects = ({ activePage, setActivePage }) => {

  const projects = [
    {
      name: '3domics',
      title: "3d'omics Data Portal",
      using: ['React', 'Typescript', 'TailwindCSS', 'REST API', 'Plotly', 'Chart.js'],
      repo: '',
      site: '',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at eros eget eros tristique molestie ac quis neque. Ut pulvinar mauris ut dolor tincidunt pretium. Morbi eleifend imperdiet est nec interdum. Donec nec purus eget sem ultrices varius. Proin rhoncus neque eu enim rutrum, nec fringilla est luctus. Nam euismod euismod ipsum nec eleifend. Vivamus faucibus mollis est a euismod.',

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
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at eros eget eros tristique molestie ac quis neque. Ut pulvinar mauris ut dolor tincidunt pretium.',
    },
    {
      name: 'kanban',
      title: 'Kanban Task Management App',
      using: ['Next.js', 'Typescript', 'Redux Toolkit', 'Sass'],
      repo: 'https://github.com/anne-mfl/kanban-task-management',
      site: 'https://kanban-task-management-quhg.vercel.app/',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at eros eget eros tristique molestie ac quis neque. Ut pulvinar mauris ut dolor tincidunt pretium.',
    },
    {
      name: 'promptopia',
      title: 'AI Prompt Sharing Full-Stack App',
      using: ['Next.js', 'NextAuth', 'MongoDB', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/promptopia',
      site: 'https://promptopia-seven-ruby.vercel.app/',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at eros eget eros tristique molestie ac quis neque. Ut pulvinar mauris ut dolor tincidunt pretium.',
    },
    {
      name: 'audiophile',
      title: 'Audiophile E-commerce Website',
      using: ['React', 'Typescript', 'Redux', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/audiophile-ecommerce-website',
      site: 'https://anne-mfl.github.io/audiophile-ecommerce-website/',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at eros eget eros tristique molestie ac quis neque. Ut pulvinar mauris ut dolor tincidunt pretium.',
    },
    {
      name: 'bookmark',
      title: 'Bookmark Landing Page',
      using: ['React', 'TypeScript', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/bookmark-landing-page',
      site: 'https://anne-mfl.github.io/bookmark-landing-page/',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at eros eget eros tristique molestie ac quis neque. Ut pulvinar mauris ut dolor tincidunt pretium.',
    },
    {
      name: 'comments',
      title: 'Interactive Comments Section',
      using: ['React', 'Redux', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/interactive-comments-section',
      site: 'https://anne-mfl.github.io/interactive-comments-section/',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at eros eget eros tristique molestie ac quis neque. Ut pulvinar mauris ut dolor tincidunt pretium.',
    },
    {
      name: 'v2',
      title: 'Portfolio v2',
      using: ['React', 'Typescript', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/interactive-comments-section',
      site: 'https://anne-mfl.github.io/interactive-comments-section/',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at eros eget eros tristique molestie ac quis neque. Ut pulvinar mauris ut dolor tincidunt pretium.',
    },
    {
      name: 'v1',
      title: 'Portfolio v1',
      using: ['React', 'TailwindCSS'],
      repo: 'https://github.com/anne-mfl/interactive-comments-section',
      site: 'https://anne-mfl.github.io/interactive-comments-section/',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at eros eget eros tristique molestie ac quis neque. Ut pulvinar mauris ut dolor tincidunt pretium.',
    },
  ]


  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Projects'}>
      <div className="py-10 px-16 w-[1120px] h-screen overflow-auto relative">

        <h1 className='page_title mb-12 text-[#e4c8a1] absolute top-4 right-6'>Projects</h1>

        <div className='h-36'></div>

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
        ))

        }
      </div>
    </PageLayout>
  )
}

export default Projects