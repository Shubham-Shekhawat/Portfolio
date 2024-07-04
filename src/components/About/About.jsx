import React from 'react'
import style from "../About/About.module.css"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div id='about' className={style.container} >
      <h1>About</h1>
      <div className={style.content}>
        <motion.img
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1,delay:1.2}}
         src="../../../src/assets/about.jpg" alt="aboutimg" />
        <motion.p
        initial={{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1,delay:1.2}}
        >I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including <span> React, Express.js, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB </span>. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects</motion.p>
      </div>
      
    </div>
  )
}

export default About