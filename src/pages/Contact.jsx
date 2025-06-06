import PageLayout from 'layout/PageLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCopyright } from '@fortawesome/free-regular-svg-icons'
import { motion } from "motion/react"
import HeaderWrapper from 'components/HeaderWrapper'
import MainWrapper from 'components/MainWrapper'


const Contact = ({ activePage, setActivePage }) => {

  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <PageLayout activePage={activePage} setActivePage={setActivePage} thisPage={'Contact'}>
      <div className="py-10 h-screen overflow-auto relative">
        {/* <motion.h1
              key='contact-header'
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1, transition: { duration: 0.7, delay: 0.8 } }}
              exit={{ opacity: 0, y: "50%", transition: { duration: 0.7, delay: 0.4 } }}
              className='page_title text-[#ebd7ce] absolute top-4 right-6'
              > */}
        <HeaderWrapper additionalClassName={'text-[#ebd7ce] absolute top-4 right-6'}>
          Contact
        </HeaderWrapper>
        {/* </motion.h1> */}

        <div className='h-36'></div>

        {/* <motion.main
          key='contact-main'
          initial={{ y: '50%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1, transition: { duration: 0.7, delay: 1.5 } }}
          exit={{ opacity: 0, y: "50%", transition: { duration: 0.7 } }}
          className='flex flex-col items-center justify-center text-center h-[calc(100vh-300px)]'> */}
        <MainWrapper additionalClassName={'flex flex-col items-center justify-center text-center h-[calc(100vh-300px)]'}>
         <p className='max-w-[440px] mb-12 text-lg'>
            I am looking for a <b>Frontend Developer</b> / <b>Full-stack Developer role</b> starting <b>January 2025</b>.
            <br />
            Feel free to reach out if you think I would be a good fit for your team or if you just want to say hi!
          </p>

          <div className='mb-10'>
            <a href="mailto:anne.gemma.lee@gmail.com">
              <button className='rounded-full text-custom_black bg-custom_red border-none py-3 px-8 cursor-pointer hover:bg-custom_black hover:text-custom_red'>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7, delay: 2 } }}
          exit={{ opacity: 0, y: "50%", transition: { duration: 0.7 } }}
          className='flex justify-center items-center gap-1 absolute bottom-2 w-full'>
          <FontAwesomeIcon icon={faCopyright} className='text-xs' />
          <p className='text-sm'>Anne Lee&nbsp;{getCurrentYear()}</p>
        </motion.footer>
      </div>
    </PageLayout>
  )
}

export default Contact