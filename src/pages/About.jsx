import PageLayout from 'layout/PageLayout'
import HeaderWrapper from 'components/HeaderWrapper'
import MainWrapper from 'components/MainWrapper'
import pic from 'assets/pic.jpg'


const About = ({ activePage, setActivePage }) => {

  const thisPage = 'About';

  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={thisPage}>
      <HeaderWrapper additionalClassName={'text-[#aa5959]'} thisPage={thisPage} >
        About Me
      </HeaderWrapper>

      <div className='h-28 max-lg:h-16'></div>

      <MainWrapper additionalClassName={'grid grid-cols-[1fr_1.6fr] items-center max-lg:grid-cols-1 max-lg:gap-8'}>
        <img
          src={pic}
          alt="Anne Lee"
          className='w-76 grayscale hover:grayscale-0 rounded-xs justify-self-end mr-16 max-xl:mr-8 max-lg:w-52 max-lg:justify-self-center max-lg:mr-0'
        />
        <div>
          <p>
            Hi, Hola and こんにちは👋 I'm Anne.
            <br />
            I am a detail-oriented Frontend Developer
            based in Spain, passionate about crafting user-centric
            web experiences and translating designs into responsive, pixel-perfect interfaces.
            <br /><br />
            I come from a non-technical background, having transitioned from
            a career in dancing and translating to web development in 2021.
            After completing a full-stack coding bootcamp, I worked as a
            Frontend Developer at a startup building an NFT marketplace,
            a venture capital firm, and at a scientific research institute.
            <br /><br />
            Throughout my career, I have often been the sole frontend developer,
            which gave me full ownership of the frontend lifecycle, strong accountability,
            and the ability to make technical decisions independently.
            This experience also required me to learn quickly and adapt to new challenges.
            I have built products such as a Customer Relationship Management (CRM) application,
            a data portal handling large datasets with interactive data visualizations,
            and a full-stack Content Management System developed from the ground up.
            <br /><br />
            Currently, I am looking for a Frontend Developer position or a Full-stack Developer (Frontend-heavy) position, preferrably in remote. 
            I am also open for a project-based opportunities, and can commute to Barcelona occasionally.
          </p>

          <section className='pt-8 tech_stack'>
            Tech Stack:
            <ul className='mt-1'>
              <li>React</li>
              <li>Next.js</li>
              <li>Astro</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Apollo GraphQL</li>
              <li>REST API</li>
              <li>Redux Toolkit</li>
              <li>Jest</li>
              <li>Vitest</li>
              <li>React Testing Library</li>
              <li>Cypress</li>
              <li>HTML</li>
              <li>CSS (TailwindCSS, CSS-in-JS, Sass)</li>
              <li>Plotly</li>
              <li>Chart.js</li>
              <li>D3.js</li>
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

    </PageLayout >
  )
}

export default About