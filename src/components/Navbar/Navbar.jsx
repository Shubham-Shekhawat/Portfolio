import React, { useState } from 'react'
import style from "./Navbar.module.css"
// import {Link} from "react-router-dom"
import {HashLink as Link} from "react-router-hash-link"
// import {logo} from "../../../src/assets/logo.png"

const Navbar = () => {
  const [clicked,setClicked] = useState(true)

  const HandleClick = ()=> {
    setClicked(!clicked);
    console.log(clicked)
    const menu = document.getElementById("menu");
    const card = document.getElementById ("card");
    if(!clicked){
      menu.className = "ri-menu-3-fill";
      card.style.display = "none";
      
      // console.log(clicked)
      
    }
   
    
    else{
      menu.className = "ri-close-line";
      card.style.display = "flex";

      // console.log(clicked)
    }
    
    
  }

  return (
    <>
    <div className={style.container}> 
        <div className={style.logo}>
          <img src="../../../src/assets/logo.png" alt="img" />
        </div>
        <div className={style.text}>
            <Link to={"#about"}>About</Link>
            <Link to={"#skills"}>Skills</Link>
            <Link to={"#project"}>Project</Link>
            <Link to={"#contact"}>Contact</Link>
        </div>        
    </div>
    <div className={style.menu} ><i id='menu' onClick={HandleClick} className='ri-menu-3-fill'></i></div>
    
    <div id='card' className={style.card_text}>
      <div className={style.menuInside} ><i id='menu' onClick={HandleClick} className='ri-menu-3-fill'></i></div>
      <Link to={"#home"}>Home</Link>
      <Link to={"#about"}>About</Link>
      <Link to={"#skills"}>Skills</Link>
      <Link to={"#project"}>Project</Link>
      <Link to={"#contact"}>Contact</Link>
    </div>
    </>
  )
}

export default Navbar