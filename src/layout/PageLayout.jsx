import { AnimatePresence, motion } from "motion/react"

const PageLayout = ({ children, activePage, setActivePage, thisPage }) => {

  const getDelay = () => {
    switch (thisPage) {
      case 'About': return 0.1;
      case 'Experience': return 0.2;
      case 'Projects': return 0.3;
      case 'Contact': return 0.4;
      default: return 0.5;
    }
  }

  const isActive = activePage === thisPage;

  return (

    <motion.div
      key={thisPage}
      initial={thisPage === 'Home' ? {} : { y: '-100%', opacity: 0.5 }}
      animate={thisPage === 'Home' ? {} : { y: '0%', opacity: 1, transition: { duration: 0.1, delay: getDelay() } }}
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.4, delay: 0.8 } }}
      className={`h-screen duration-500 delay-700 overflow-auto
          ${activePage === thisPage ? 'flex-1 min-w-20 max-lg:min-h-14' : 'w-20 max-lg:h-14 max-lg:min-h-14 max-lg:w-full'}
          ${thisPage === 'Home' && 'bg-custom_navy text-custom_white'}
          ${thisPage === 'About' && 'bg-custom_red text-custom_white'}
          ${thisPage === 'Experience' && 'bg-custom_greyishblue text-custom_black'}
          ${thisPage === 'Projects' && 'bg-custom_mustard text-custom_black'}
          ${thisPage === 'Contact' && 'bg-custom_pink text-custom_black'}
        `}
      onClick={() => setActivePage(thisPage)}
    >

      <AnimatePresence mode='wait'>
        {isActive ? ( // Render page
          <div className={`py-10 px-16 overflow-auto relative max-lg:h-full max-lg:px-8
            ${thisPage === 'Home' && 'h-screen flex justify-start items-end max-lg:items-center'}
            ${thisPage === 'Contact' && 'h-screen pb-2'}
          `}>
            {children}
          </div>
        ) : ( // Render tab
          <motion.div
            key="tab"
            initial={{ x: '10%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1, transition: { duration: 0.5 } }}
            exit={{ x: "10%", opacity: 0, transition: { duration: 0.5 } }}
            className="h-screen flex justify-center items-end cursor-pointer
             max-lg:items-start max-lg:justify-start
            "
          >
            <h1 className={`${thisPage === 'Home' || thisPage === 'About' ? 'text-custom_yellow' : 'text-custom_dark_yellow'} -rotate-90 py-12
              max-lg:rotate-0 max-lg:py-4 max-lg:pl-6
            `}>
              {thisPage}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default PageLayout

