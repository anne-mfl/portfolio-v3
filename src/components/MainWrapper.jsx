import { motion } from "motion/react"

const MainWrapper = ({ children, additionalClassName }) => {
  return (
    <motion.main
      key='main'
      initial={{ y: '30%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1, transition: { duration: 0.5, delay: 1.0 } }}
      exit={{ opacity: 0, y: "30%", transition: { duration: 0.5 } }}
      className={`${additionalClassName}`}
    >
      {children}
    </motion.main>
  )
}

export default MainWrapper