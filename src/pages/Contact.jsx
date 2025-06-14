import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCopyright } from '@fortawesome/free-regular-svg-icons'
import { motion } from "motion/react"
import HeaderWrapper from 'components/HeaderWrapper'
import MainWrapper from 'components/MainWrapper'


const Contact = ({ activePage, setActivePage }) => {

  const thisPage = 'Contact'

  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={thisPage}>
      <HeaderWrapper thisPage={thisPage}>
        Contact
      </HeaderWrapper>

      <section className='flex flex-col justify-between h-full'>
        <div className='h-16'></div>
        <MainWrapper additionalClassName={'flex flex-col items-center justify-center text-center'}>
          <p className='max-w-[500px] mb-8 text-lg max-md:text-base max-md:px-4'>
            I am looking for a <b>Frontend Developer</b> / <b>Full-stack Developer role</b> starting <b>January&nbsp;2025</b>.
            Feel free to reach out if you think I would be a good fit for your team or if you just want to say hi!
          </p>

          <div className='mb-10'>
            <a href="mailto:anne.gemma.lee@gmail.com">
              <button className='rounded-full text-custom_white bg-custom_red border-none py-3 px-8 cursor-pointer hover:bg-custom_navy hover:text-custom_pink'>
                Say Hi
              </button>
            </a>
          </div>

          <ul className='flex gap-6 [&>li]:text-2xl'>
            <li><a href="https://github.com/anne-mfl" className='hover:text-custom_red'><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/anne-gemma-lee/" className='hover:text-custom_red'><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="mailto:anne.gemma.lee@gmail.com" className='hover:text-custom_red'><FontAwesomeIcon icon={faEnvelope} /></a></li>
          </ul>

        </MainWrapper>
        <motion.footer
          key='contact-footer'
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: "0%", transition: { duration: 0.7, delay: 1.4 } }}
          exit={{ opacity: 0, y: "50%", transition: { duration: 0.7 } }}
          className='flex justify-center items-center gap-1'>
          <FontAwesomeIcon icon={faCopyright} className='text-xs' />
          <p className='text-sm'>Anne Lee&nbsp;{getCurrentYear()}</p>
        </motion.footer>
      </section>
    </PageLayout>
  )
}

export default Contact