import PageLayout from 'layout/PageLayout'
import { motion } from "motion/react"
import HeaderWrapper from 'components/HeaderWrapper'
import MainWrapper from 'components/MainWrapper'


const About = ({ activePage, setActivePage }) => {

  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'About'}>
      <div className="py-12 px-16 w-[1120px] h-[754px] overflow-auto relative">
        {/* <motion.h1
              key='about-header'
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1, transition: { duration: 0.7, delay: 0.8 } }}
              exit={{ opacity: 0, y: "50%", transition: { duration: 0.7, delay: 0.4 } }}
              className='pb-16 pl-16
                  page_title text-[#aa5959] absolute top-4 right-6'
            > */}
        <HeaderWrapper additionalClassName={'text-[#aa5959] absolute top-4 right-6'}>
          About Me
        </HeaderWrapper>
        {/* </motion.h1> */}

        <div className='h-28'></div>

        {/* <motion.main
              key='about-main'
              initial={{ y: '50%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1, transition: { duration: 0.7, delay: 1.5 } }}
              exit={{ opacity: 0, y: "50%", transition: { duration: 0.7 } }}
              className='grid grid-cols-[1fr_1.6fr] items-center'
            > */}
        <MainWrapper additionalClassName={'grid grid-cols-[1fr_1.6fr] items-center'}>
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
        </MainWrapper>
      </div>
    </PageLayout >
  )
}

export default About