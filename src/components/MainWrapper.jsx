import { motion } from "motion/react"

const MainWrapper = ({ children, additionalClassName }) => {
  return (
    <motion.main
      key='main'
      initial={{ y: '30%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1, transition: { duration: 0.7, delay: 1.5 } }}
      exit={{ opacity: 0, y: "50%", transition: { duration: 0.7 } }}
      className={`${additionalClassName}`}
    >
      {children}
    </motion.main>
  )
}

export default MainWrapper