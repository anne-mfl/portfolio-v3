import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { motion } from "motion/react"

const Home = ({ activePage, setActivePage }) => {

  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Home'}>
      <section>
        <motion.div
          key='home-header'
          initial={{ y: '10%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1, transition: { duration: 0.4, delay: 0.5 } }}
          exit={{ opacity: 0, y: "10%", transition: { duration: 0.4, delay: 0.4 } }}
        >
          <h1 className='page_title font-bold'>Anne Lee</h1>
          <h2 className='page_title text-xl font-semibold mb-8'>Frontend Developer</h2>
        </motion.div>

        <motion.div
          key='home-main'
          initial={{ y: '10%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1, transition: { duration: 0.4, delay: 0.8 } }}
          exit={{ opacity: 0, y: "10%", transition: { duration: 0.4 } }}
        >
          <p className='mb-8 max-md:text-sm'>
            <b>React Frontend Developer</b> with 3+ years of
            <span>&nbsp;</span>
            <br className='max-sm:hidden' />
            experience turning ideas into fast, intuitive web apps.
            {/* <span>&nbsp;</span>
            <br className='max-sm:hidden' />
            based in <b>Spain</b>. */}
            <span>&nbsp;</span>
            <br className='max-sm:hidden' />
            Also skilled in <b>Backend Development</b> and
            <span>&nbsp;</span>
            <br className='max-sm:hidden' />
            an <b>AWS Certified Cloud Practitioner</b>.
          </p>
          {/* <ul className='[&>li]:list-none mb-8'>
                  <li> 📍&nbsp;&nbsp;Barcelona, Spain</li>
                  <li> 🎨&nbsp;&nbsp;Frontend Developer with 3+ years of hands-on experience</li>
                  <li> 🛠️&nbsp;&nbsp;Experience and knowkedge in backend development</li>
                  <li> ☁️&nbsp;&nbsp;AWS Certified Cloud Practitioner</li>
                </ul> */}
          <ul className='flex gap-4 [&>li]:text-2xl'>
            <li><a href="https://github.com/anne-mfl" target='_blank' className='hover:text-custom_red'><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/anne-gemma-lee/" target='_blank' className='hover:text-custom_red'><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="mailto:anne.gemma.lee@gmail.com" target='_blank' className='hover:text-custom_red'><FontAwesomeIcon icon={faEnvelope} /></a></li>
          </ul>
        </motion.div>
      </section>
    </PageLayout>
  )
}

export default Home
