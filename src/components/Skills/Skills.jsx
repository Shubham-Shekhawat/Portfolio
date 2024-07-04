import React from 'react'
import style from "../Skills/Skills.module.css"
import {motion} from 'framer-motion'

const techAnimation = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
           
        },
    },
});

const Skills = () => {
  return (
    <div id='skills' className={style.container}>
        <motion.h1
        initial={{y:-100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:2}}
        >Technologies</motion.h1>
        <motion.div
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1.5}}
        className={style.techs}>
            <motion.div 
            variants={techAnimation(2.5)}
            initial="initial"
            animate="animate"
            
            className={style.tech}>
                <img src="../../../src/assets/react.png" alt="react" />
                <h3>React</h3>
            </motion.div>
            <motion.div 
            variants={techAnimation(2.5)}
            initial="initial"
            animate="animate"
            className={style.tech}>
                <img src="../../../src/assets/Express.png" alt="Express" />
                <h3>Expess JS</h3>
            </motion.div>
            <motion.div 
             variants={techAnimation(2.5)}
             initial="initial"
             animate="animate"
            className={style.tech}>
                <img src="../../../src/assets/nodejs.png" alt="node" />
                <h3>Node JS</h3>
            </motion.div>
            <motion.div 
             variants={techAnimation(2.5)}
             initial="initial"
             animate="animate"
            className={style.tech}>
                <img src="../../../src/assets/mongodb.png" alt="mongo" />
                <h3>MongoDB</h3>
            </motion.div>
            <motion.div 
             variants={techAnimation(2.5)}
             initial="initial"
             animate="animate"
            className={style.tech}>
                <img src="../../../src/assets/mysql.png" alt="sql" />
                <h3>SQL</h3>
            </motion.div>
            <motion.div
             variants={techAnimation(2.5)}
             initial="initial"
             animate="animate"
            className={style.tech}>
                <img className={style.learning} src="../../../src/assets/learning.jpg" alt="react" />
                {/* <h3>Continued</h3> */}
                <h3>Learning . . .</h3>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Skills