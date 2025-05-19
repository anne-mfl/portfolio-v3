import React from 'react'
import PageLayout from 'layout/PageLayout'


const Projects = ({ activePage, setActivePage }) => {

  const projects = [
    {
      name: '3domics',
      title: "3d'omics Data Portal",
      using: 'React/Typescript/TailwindCSS/REST API/Plotly/Chart.js',
      repo: '',
      site: '',
      desc: '',
    },
    {
      name: 'sgt',
      title: 'Lab Website with Admin Dashboard',
      using: 'React/TaiwlindCSS/Node.js/Express/SQLite',
      repo: '',
      site: '',
      desc: 'Designed and developed a full-stack website for a research group that displays their research, publications, and other group-related content on a dynamic frontend, with a secure admin backend for authenticated content management and full CRUD functionality.',
    },
    {
      name: 'designo',
      title: 'Designo Multi-page Website',
      using: 'Astro/Preact/TailwindCSS',
      repo: 'https://github.com/anne-mfl/designo-multipage-website',
      site: 'https://multipage-website-designo.netlify.app/',
      desc: '',
    },
    {
      name: 'kanban',
      title: 'Kanban Task Management App',
      using: 'Next.js/Typescript/Redux Toolkit/Sass',
      repo: 'https://github.com/anne-mfl/kanban-task-management',
      site: 'https://kanban-task-management-quhg.vercel.app/',
      desc: '',
    },
    {
      name: 'promptopia',
      title: 'AI Prompt Sharing Full-Stack App',
      using: 'Next.js/NextAuth/ MongoDB/TailwindCSS',
      repo: 'https://github.com/anne-mfl/promptopia',
      site: 'https://promptopia-seven-ruby.vercel.app/',
      desc: '',
    },
    {
      name: 'audiophile',
      title: 'Audiophile E-commerce Website',
      using: 'React/Typescript/Redux/TailwindCSS',
      repo: 'https://github.com/anne-mfl/audiophile-ecommerce-website',
      site: 'https://anne-mfl.github.io/audiophile-ecommerce-website/',
      desc: '',
    },
    {
      name: 'bookmark',
      title: 'Bookmark Landing Page',
      using: 'React/TypeScript/TailwindCSS',
      repo: 'https://github.com/anne-mfl/bookmark-landing-page',
      site: 'https://anne-mfl.github.io/bookmark-landing-page/',
      desc: '',
    },
    {
      name: 'comments',
      title: 'Interactive Comments Section',
      using: 'React/Redux/TailwindCSS',
      repo: 'https://github.com/anne-mfl/interactive-comments-section',
      site: 'https://anne-mfl.github.io/interactive-comments-section/',
      desc: '',
    },
  ]


  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Projects'}>
      <div className="py-12 px-16 overflow-auto">
        <h1 className='page_title mb-8'>Projects</h1>
      </div>
    </PageLayout>
  )
}

export default Projects