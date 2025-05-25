import React from 'react'
import PageLayout from 'layout/PageLayout'

const About = ({ activePage, setActivePage }) => {
  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'About'}>
      <div className="py-8 px-16 w-[1120px] h-[754px] overflow-auto bg-curve-about">
        <h1 className='page_title mb-8'>About me</h1>
        <section className='grid grid-cols-[1fr_1.5fr] items-center'>
          <img
            src='src/assets/bg_removed.png'
            alt="Anne Lee"
            className='w-58 rotate-10 justify-self-end mr-12'
          />
          <p>
            Hi, Hola and こんにちは👋 I'm Anne.
            <br />
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

        <section className='pt-8 px-12 tech_stack'>
          Proficient in:
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