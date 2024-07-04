import React from 'react'
import style from "../Projects/Projects.module.css"
import "../../../src/assets/projects/Project TODO.png"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div id='project' className={style.container}>
        <motion.h1
        initial={{y:-100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:2}}
        >Projects</motion.h1>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:4}}
        className={style.projects}>
            <div className={style.project}>
              <img src="../../../src/assets/projects/Project TODO.png" alt="ToDo" />
              <h2>To-Do App</h2>
              <Link className={style.gitHubLink} to={"https://github.com/Shubham-Shekhawat/FullStackEoDo"}>Code</Link> 
            </div>
            <div className={style.project}>
              <img src="../../../src/assets/learning.jpg" alt="ToDo" />
              <h2>Upcoming ...</h2>
              {/* <Link className={style.gitHubLink} to={""}>Code</Link>  */}
            </div>
        </motion.div>
    </div>
  )
}

export default Projects