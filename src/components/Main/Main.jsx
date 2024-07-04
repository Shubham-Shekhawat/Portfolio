import React from 'react'
import style from '../Main/Main.module.css'
import { Home_CONTENT } from '../../constants'
import { motion } from "framer-motion"
import { HashLink as Link } from 'react-router-hash-link'

const containerAnimation= (delay)=>({
  hidden:{x:-100,opacity :0},
  visible : {
    x:0,
    opacity:1,
    transition:{duration:0.8,delay:delay}
  },
});

const Main = () => {
  return (
    <div id='home' className={style.container}>
        <div className={style.text}>
            <motion.h1 
              variants={containerAnimation(0)}
              initial="hidden"
              whileInView="visible"
            >I'M <motion.span whileHover={{ scale: 1.2 }}>Shubham Shekhawat</motion.span></motion.h1>
            <motion.p 
              variants={containerAnimation(.5)}
              initial="hidden"
              whileInView="visible"
            >{Home_CONTENT}</motion.p>
            <motion.button 
              variants={containerAnimation(1)}
              initial="hidden"
              whileInView="visible"
            ><Link className={style.button} to={'#contact'}>Contact Me</Link></motion.button>
        </div>
        <motion.div
        initial={{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:.5,delay:1.5}}
        className={style.image}>
            <img src="../../src/assets/kevinRushProfile.jpg" alt="Hero" />
        </motion.div>
       
    </div>
  )
}

export default Main