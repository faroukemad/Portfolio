import React, { useState ,useEffect} from "react";
import './intro.scss'
import { FaBehance ,FaLinkedin ,FaGithub,FaCodepen} from "react-icons/fa";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import {  motion,  } from "framer-motion";
import { FiTriangle } from "react-icons/fi";
import { GiCircle } from "react-icons/gi";
import { GoDash } from "react-icons/go";
import { BiRectangle } from "react-icons/bi";

export default function Intro({menuOpen,setMenuOpen,backOpen,setBackOpen}) {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const updateShapesPosition = () => {
    const newPosition = { x: mousePosition.x / 10, y: mousePosition.y / 10 };
  
    document.querySelectorAll('.moving-shape').forEach(shape => {
      shape.style.transition = 'transform 0.2s';
      shape.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    });
    document.querySelectorAll('.moving-shape2').forEach(shape => {
      shape.style.transition = 'transform 0.2s';
      shape.style.transform = `translate(-${newPosition.x}px, -${newPosition.y}px)`;
    });
  
    requestAnimationFrame(updateShapesPosition);
  };
  

  useEffect(() => {
    requestAnimationFrame(updateShapesPosition);
  }, [mousePosition]);
  
    const navAnimation = {
        show: { 
          transition:{
            staggerChildren:.4,
            delayChildren:2.8,
            ease:"easeInOut"
          }}}
          const iconAnimation = {
            hidden: { opacity: 0},
            show: { 
              opacity: 1,
              transition:{
                staggerChildren:.4,
                delayChildren:0.8,
                ease:"easeInOut"
              }}}
          const typingContainer = {
            hidden: { opacity: 0},
            show: { 
              opacity: 1,
              transition:{
                delay:3.5,
                staggerChildren: 0.14,
              }}
          }
          const typingText = {
            hidden: { opacity: 0, y:"-20px"},
            show: { 
              opacity: 1, 
              y:"0",
              transition:{
                ease:'easeInOut',
              }
            }
          }
          const explainProduct = {
            hidden: { opacity: 0, y:"-20px"},
            show: { 
              opacity: 1, 
              y:"0", 
              transition:{
                delay:3.2,
                ease:"easeInOut"
              }
            }
          }

          const explainButton = {
            hidden: { opacity: 0, y:"40px"},
            show: { 
              opacity: 1, 
              y:"0", 
              transition:{
                delay:4.5,
                ease:"easeInOut"
              }
            }
          }
          const navText = {
            hidden: { 
              opacity: 0,
              x:'30px',
            },
            show: { 
              opacity: 1,
              x:0,
              transition:{
                ease:"easeInOut",
                duration:0.5,
              }
            }
          }
  return (

    <div className={"intro"} id="intro">
        <motion.div className="wrapper"  variants={navAnimation}
             initial="hidden"
             animate='show'>
            
            <div className="left">
                <motion.h1 variants={explainProduct} className={"fade1 "+ (backOpen && "active")}>Hey, I'm Farouk</motion.h1>
                <motion.h2 variants={typingContainer}>  
               { Array.from("Front-End Developer").map((word,i) => (
              <motion.span className={"fade2 "+ (backOpen && "active")} key={i} variants={typingText}>{word}</motion.span>
              ))}
                    </motion.h2>
                <div className='btnClass'>
                    <div className='btn'  variants={explainButton }  onClick={()=>setMenuOpen(!menuOpen)} > Let's Talk <MdOutlineKeyboardDoubleArrowRight style={{ fill: 'black' }} className='arrow'/> </div>
                </div>
            </div>
            <div className="right">
                <motion.div variants={iconAnimation} className="icons">
                    <motion.a href='https://www.linkedin.com/in/farouk-emad-8231a2164/' variants={navText} className='el' target="_blank" rel="noreferrer"> 
                        <FaLinkedin className={"icon1 "+ (backOpen && "active2")} 
                       
                        />
                    </motion.a>
                    <motion.a href='https://github.com/faroukemad' variants={navText} className='el' target="_blank" rel="noreferrer">
                        <FaGithub   className={"icon2 "+ (backOpen && "active3")} 
                       />
                    </motion.a>
                    <motion.a href='https://codepen.io/faroukemad'  variants={navText} className='el' target="_blank" rel="noreferrer">
                        <FaCodepen  className={"icon3 "+ (backOpen && "active4")}/>
                    </motion.a>
                        <motion.a href='https://www.behance.net/faroukemad' variants={navText} className='el' target="_blank" rel="noreferrer"> 
                            <FaBehance  className={"icon4 "+ (backOpen && "active5")} />
                        </motion.a>
                       
                        
                </motion.div>
             </div>
             
        </motion.div>
        <motion.div className="" variants={iconAnimation}>
                
                <FiTriangle className="triangle1 moving-shape" />
                <FiTriangle className="triangle2 moving-shape2" />
                <FiTriangle className="triangle3 moving-shape" />
                <GiCircle className="triangle4 moving-shape2" />
                <GiCircle className="triangle5 moving-shape" />
                <GiCircle className="triangle6 moving-shape2" />
                <GoDash className="triangle7 moving-shape2" />
                <GoDash className="triangle8 moving-shape2" />
                <GoDash className="triangle9 moving-shape2" />
                <BiRectangle className="triangle10 moving-shape" />
                <BiRectangle className="triangle11 moving-shape" />
              </motion.div>
    </div>
  )
}
