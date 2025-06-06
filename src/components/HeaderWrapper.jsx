import { motion } from "motion/react"

const HeaderWrapper = ({ children, additionalClassName }) => {
  return (
    <motion.h1
      key='header'
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1, transition: { duration: 0.7, delay: 0.8 } }}
      exit={{ opacity: 0, y: "50%", transition: { duration: 0.7, delay: 0.4 } }}
      className={`page_title ${additionalClassName}`}
    >
      {children}
    </motion.h1 >
  )
}

export default HeaderWrapper