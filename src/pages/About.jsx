import React from 'react'
import PageLayout from 'layout/PageLayout'

const About = ({ activePage, setActivePage }) => {
  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'About'}>

      <div className="py-12 px-16 w-[1120px] h-[754px] overflow-auto relative">
        {/* <div
        className="py-12 px-16 w-[1120px] h-screen overflow-auto bg-curve-contact bg-[position:top_-300px_left_-160px] bg-no-repeat bg-size-[600px]"
        style={{ backgroundImage: "url('src/assets/shapes/red.svg')"}}
      > */}

        <h1 className='page_title text-[#aa5959] absolute top-4 right-6'>About me</h1>
        {/* <h1 className='page_title relative z-10'>
          About me
          <div className='bg-[#733a3a] h-24 w-80 -ml-16 -mt-16 z-0'>&nbsp;</div>
        </h1> */}

        <div className='h-28'></div>

        <main className='grid grid-cols-[1fr_1.6fr] items-center'>
          <img
            src='src/assets/bg_removed.png'
            alt="Anne Lee"
            className='w-68 rotate-10 justify-self-end mr-12'
          />
          <div>
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

            <section className='pt-8 tech_stack'>
              Proficient in:
              <ul className='mb-4 mt-1'>
                <li>React</li>
                <li>Next.js</li>
                <li>Astro</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Apollo GraphQL</li>
                <li>REST API</li>
                <li>Redux</li>
                <li>Jest</li>
                <li>Vitest</li>
                <li>Cypress</li>
                <li>HTML</li>
                <li>CSS (TailwindCSS, CSS-in-JS, Sass)</li>
              </ul>

              And also have experience with:
              <ul className='mt-1'>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>SQL (SQLite)</li>
                <li>React Native</li>
                <li>AWS</li>
              </ul>
            </section>
          </div>
        </main>

      </div>
    </PageLayout>
  )
}

export default About