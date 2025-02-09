import React from 'react'
import {delay, motion} from "framer-motion"
const Banner2 = () => {
  return (
    <div className='container my-14'>

    <div
   
    className='text-center bg-[#F9F9F9] py-20 flex flex-col justify-center items-center gap-5'>
      <motion.h2
       initial = {{opacity : 0 , x : 100}}
       whileInView={{opacity:1 , x: 0}}
       transition={{duration:1}}
      className='leading-relaxed text-3xl font-bold '>Get 20% Discount On Your First Order, Are You Ready To Buy
      </motion.h2>
      <motion.p
      initial = {{opacity : 0 , x : 100}}
      whileInView={{opacity:1 , x: 0}}
      transition={{duration:1 , delay : .5}}
      >We will make sure you get the right and the best quality products for your workout</motion.p>
      <motion.div 
      initial = {{opacity : 0 , x : 300}}
      whileInView={{opacity:1 , x: 0}}
      transition={{duration:1 , delay:.7 }}
      className='flex justify-center gap-5'>
      <button className='primary-btn'>Learn More</button>
      <button className='font-semibold py-3 px-6 rounded-md hover:!scale-110 duration-300 text-primary border-2 border-primary '>Stay In Touch</button>
      </motion.div>
    
    </div>


    </div>
  )
}

export default Banner2