import React, { useEffect} from "react";
import { useAnimation, motion } from "framer-motion";
import {useInView} from "react-intersection-observer";
import './about.scss';
import Pdf from '../../Farouk Emad Resume.pdf';

  const About = () => {
    const { ref, inView } = useInView({
      threshold: 0.4,
    });
   
    const controls = useAnimation();
    const sideControls = useAnimation();

    useEffect(() => {
      if (inView) {
        controls.start('visible');
        sideControls.start('animate');

      }
    }, [controls,sideControls, inView]);
  
    const animation = {
      hidden: {
        opacity: 0,
        y: -50,
      },
      visible: {
        opacity: 1,
        y: 0
        ,
      },
    };
    const sideAnimation = {
        hidden: {
            width: '100%',
        },
        animate: {
            width: 0,
           
        },
      };
  return (
    <div className='about' id='about'>
        <div className="wrapper">

        {/* <div className="back">
          <img src="assests/about.jpg" alt="" />
        </div> */}

            <div className="aboutMe">


            <motion.div style={{position:"relative"}} ref={ref} 
             animate={controls} initial="hidden" variants={animation} transition= {{
              duration: 0.5,
              delay:0.25,
              ease: 'easeOut',
             }}>
            <motion.div initial="hidden" animate={sideControls} variants={sideAnimation}  transition={ {
            duration: 0.5,
            ease: 'easeIn',
          }}
                style={{ position:"absolute",left:0,top:0,bottom:0,right:0,background:"lightblue",zIndex:20}}
                 />

                <h1 className='abouth1'>About</h1>                
                </motion.div>

              <motion.div style={{position:"relative"}} ref={ref} 
              animate={controls} initial="hidden" variants={animation} transition= {{
              duration: 0.5,
              delay:0.25,
              ease: 'easeOut',
             }}>
            <motion.div initial="hidden" animate={sideControls} variants={sideAnimation}  transition={{
            duration: 0.5,
            ease: 'easeIn',
          }} 
                style={{ position:"absolute",left:0,top:0,bottom:0,right:0,background:"lightblue",zIndex:20}}
                 />

                <p>Experienced junior front-end developer with 1.5 years in creating visually appealing websites. Proven track record in writing clean, efficient code and collaborating on high-quality projects. Specialized in UI enhancements, responsive design, and
                    achieving significant user engagement. Eager to contribute skills and creativity to innovative projects within a supportive
                    team.
                </p>
                </motion.div>


                <motion.div style={{position:"relative"}} ref={ref} 
             animate={controls} initial="hidden" variants={animation} transition= {{
              duration: 0.5,
              delay:0.25,
              ease: 'easeOut',
             }}>
            <motion.div initial="hidden" animate={sideControls} variants={sideAnimation}  transition={ {
            duration: 0.5,
            ease: 'easeIn',
          }} 
                style={{ position:"absolute",left:0,top:0,bottom:0,right:0,background:"lightblue",zIndex:20}}
                 />

                <div className="cvDiv">
                  
                <a href = {Pdf}   target = "_blank" className='cv' rel="noreferrer">My Resume</a>
                </div>
                </motion.div>
            </div>
            
            
        </div>



    </div>
  )
}
export default About;