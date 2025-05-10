import React from 'react'
import PageLayout from 'layout/PageLayout'

const About = ({ activePage, setActivePage }) => {
  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'About'}>
      <div className="py-12 px-16 w-[1120px] overflow-auto">
        <h1 className='page_title mb-8'>About me</h1>
        <section className='bg-custom_white py-8 px-12 text-lg '>
          <p>
            Hi, Hola and こんにちは👋 I'm Anne.
            <br /><br />
            I am a detail-oriented Frontend Developer
            based in Barcelona, Spain. I am passionate about crafting user-centric
            web experiences and transforming designs into responsive, pixel-perfect interfaces.
            <br /><br />
            I come from a non-technical background, having transitioned from
            a career in dancing and translating to web development in 2021.
            After completing a full-stack coding bootcamp, I worked as a
            Frontend Developer at a startup building an NFT marketplace and
            later at a venture capital firm.
            <br /><br />
            Currently, I work at one of Europe's largest genome sequencing
            centers, where I develop a data visualization platform for a research
            project and a full-stack management app for the lab group.
          </p>
        </section>

        <div className='h-12'></div>

        <section className='bg-custom_white py-8 px-12 text-lg
          [&>ul]:flex [&>ul]:flex-wrap [&>ul]:gap-1
          [&_li]:bg-custom_orange [&_li]:w-fit [&_li]:py-1 [&_li]:px-3 [&_li]:rounded-full
          [&_li]:text-sm [&_li]:whitespace-nowrap [&_li]:text-custom_brown
        '>
          Tech stack:
          <ul className='mb-4'>
            <li>React</li>
            <li>Next.js</li>
            <li>Astro</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Apollo GraphQL</li>
            <li>REST API</li>
            <li>Redux</li>
            <li>Jest</li>
            <li>Cypress</li>
            <li>HTML</li>
            <li>CSS (TailwindCSS, CSS-in-JS, Sass)</li>
          </ul>

          And also have experience with:
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>SQL (SQLite)</li>
            <li>React Native</li>
            <li>AWS</li>
          </ul>
        </section>
      </div>
    </PageLayout>
  )
}

export default About