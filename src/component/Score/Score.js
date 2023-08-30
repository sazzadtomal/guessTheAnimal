import React from 'react'
import { motion } from 'framer-motion'
const Score = ({score}) => {
  
  
    return (
        score? <motion.div
        initial={{ x:"100%" }}
        animate={{x:"0"}}
        transition={{ duration: 0.5 }}
    >
        <div className='absolute unselectable w-full text-2xl  md:text-4xl top-36 md:top-48 font-bold z-30 text-white flex  justify-center'>Score: {score}/100</div>
      </motion.div>: ""
  )
}

export default Score