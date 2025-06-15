import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react"

const PageLayout = ({ children, activePage, setActivePage, thisPage }) => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
      console.log(`Screen width: ${window.innerWidth}px`)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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
      initial={
        thisPage === 'Home'
          ? {}
          : screenWidth > 1023
            ? { y: '-100%', opacity: 0.5 }
            : { x: '-100%', opacity: 0.5 }
      }
      animate={
        thisPage === 'Home'
          ? {}
          : screenWidth > 1023
            ? { y: '0%', opacity: 1, transition: { duration: 0.1, delay: getDelay() } }
            : { x: '0%', opacity: 1, transition: { duration: 0.1, delay: getDelay() } }
      }
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.4, delay: 0.8 } }}
      className={`h-screen duration-500 delay-700 overflow-auto
          ${activePage === thisPage ? 'flex-1 min-w-20 max-lg:min-h-10' : 'w-20 max-lg:h-10 max-lg:min-h-10 max-lg:w-full overflow-hidden'}
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
          <div className={`py-10 px-16 overflow-auto relative max-lg:h-full max-lg:px-4
            ${thisPage === 'Home' && 'h-screen flex justify-start items-end max-lg:pl-4 max-sm:pr-8'}
            ${thisPage === 'Contact' && 'h-screen pb-2 max-lg:h-[calc(100dvh-160px)]'}
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
             max-lg:h-full max-lg:items-center max-lg:justify-end 
            "
          >
            <h1 className={`${thisPage === 'Home' || thisPage === 'About' ? 'text-custom_yellow' : 'text-custom_dark_yellow'} -rotate-90 py-12
              max-lg:rotate-none max-lg:py-0 max-lg:px-6 
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

