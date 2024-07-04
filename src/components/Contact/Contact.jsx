import React from 'react'
import style from '../Contact/Contact.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div id='contact' className={style.container}>
        <div className={style.part1}>
            <div className={style.header}>
                <div className={style.line}></div>
                <h1>Contact Me</h1>
                <div className={style.line}></div>
            </div>
            <div className={style.details}>
                <motion.div
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1.5,delay:1.2}}
                className={style.detail}>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:shubhamshekhawat080@gmail.com">shubhamshekhawat080@gmail.com</a>
                </motion.div>
                <motion.div
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1.5,delay:1.2}}
                className={style.detail}>
                    <i className="ri-phone-line"></i>
                    9588787484
                </motion.div>
                <motion.div
                initial={{y:100,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:1.5,delay:1.2}}
                className={style.detail}>
                    <i className="ri-map-pin-line"></i>
                    Bhiwani, Haryana, India
                </motion.div>
            </div>
        </div>
        <div className={style.medium}>
            <div className={style.medium_line}></div>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:3}}

            className={style.link}>
                <Link className={style.i} to={"https://www.instagram.com/shubham_shekhawat_786/"}><i className="ri-instagram-line"></i></Link>
                <Link className={style.i} ><i className="ri-twitter-x-line"></i></Link>
                <Link className={style.i} to={"https://www.linkedin.com/in/shubham-shekhawat-06b440223/"}><i className="ri-linkedin-fill"></i></Link>
                <Link className={style.i} to={"https://github.com/Shubham-Shekhawat"}><i className="ri-github-fill"></i></Link>
            </motion.div>
            <div className={style.medium_line}></div>
        </div>
        <div className={style.part2}>
            <motion.h1
            initial={{x:-200,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.5,delay:1.2}}
            >"Thanks For Scrolling"</motion.h1>
            {/* <img src="../../assets/Namste.jpg" alt="Ram Ram" /> */}
        </div>
    </div>
  )
}

export default Contact