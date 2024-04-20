import React from 'react'
import './topbar.scss'
import { VscColorMode} from "react-icons/vsc";
import {motion} from 'framer-motion';

export default function Topbar({backOpen,setBackOpen,menuOpen,setMenuOpen}) {
   
    const navAnimation = {
        show: { 
          transition:{
            staggerChildren:.4,
            delayChildren:0.8,
            ease:"easeInOut"
          }}}
          const navText = {
            hidden: {
              opacity: 0,
              y:'-130px',
            },
            show: { 
              opacity: 1,
              y:0,
              transition:{
                ease:"easeInOut",
                duration:0.5,
              }
            }
          }
          const starItem = {
            hidden: { 
              opacity:0,
              x:'-100px',
              y:'-100px',
            },
            show: { 
              opacity:1,
              x:0,
              y:0,
              transition:{
                duration:1.5,
                ease:"easeIn",
                
              }
            }
          }
          const imageSource = backOpen
          ? "assests/f-logo2.png"
          : "assests/f-logo.png";

  return (
      
    <div className={"topbar " } id='topbar' >
        <motion.div className="wrapper" variants={navAnimation}
             initial="hidden"
             animate='show'
                       >
            <div className="left">

                <div className="leftComp">
                    <motion.img variants={navText} className='element' src={imageSource} alt=""></motion.img>
                </div>
            </div>

            <div className="right">

                <div className="rightComp">
                    <motion.a href="#projects" variants={navText} className={"element "+ (backOpen && "active")}>Case Studies</motion.a>
                    <motion.a href="#about" variants={navText} className={"element "+ (backOpen && "active")}>  About </motion.a>    
                    <motion.div className={"element "+ (backOpen && "active")} variants={navText} onClick={()=>setMenuOpen(!menuOpen)}>  Contact </motion.div> 
                    <div className="color element ">
                   
                    <motion.a variants={navText} href="#topbar" >
                    <VscColorMode className={"elementDiv "+ (backOpen && "active2")} onClick={()=>setBackOpen(!backOpen)}/>       
                    </motion.a>
                    </div>

                </div>
            </div>

            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                  <span></span>
                </label>

                <ul class="menu__box">
               
                <motion.div className={"element " + (backOpen && "active")} variants={navText} onClick={() => {  window.location.href = '#projects'; }}>
                  <label className={"element " + (backOpen && "active")} htmlFor="menu__toggle">Case Studies</label>
                </motion.div>

                
                  <div class="greymenuline"></div>
                  <motion.div className={"element " + (backOpen && "active")} variants={navText} onClick={() => {  window.location.href = '#about'; }}>
                  <label className={"element " + (backOpen && "active")} htmlFor="menu__toggle"> About</label>
                </motion.div>
   
                  <div class="greymenuline"></div>
                  <motion.div className={"element "+ (backOpen && "active")} variants={navText} onClick={()=>setMenuOpen(!menuOpen)}>  Contact </motion.div> 
                  <div class="greymenuline"></div>
                 
                  <div className="color element ">
                    <motion.div variants={navText} onClick={() => { setBackOpen(!backOpen); window.location.href = '#topbar'; }}>
                    <label htmlFor="menu__toggle"> 
                      <VscColorMode className={"elementDiv " + (backOpen && "active2")} /></label>
                    </motion.div>
                  </div>
                  
                </ul>
              </div>

        </motion.div>

    </div>
   
   
  )
}
