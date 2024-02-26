import React, { useEffect} from "react";
import { useAnimation, motion } from "framer-motion";
import {InView,useInView} from "react-intersection-observer";
import {SiJquery ,SiHtml5,SiCss3,SiReact,SiBootstrap ,SiJavascript,SiLaravel } from "react-icons/si";
import Slider from './Slider';
import './projects.scss'


//import Fade from 'react-reveal/Fade'

  //  const [ref, inView] = useInView({
   //     threshold: 1,
    //    triggerOnce: false
    //  });
    
    //  const variants = {
    //    visible: { opacity: 1, scale: 1 },
     //   hidden: { opacity: 0, scale: 0.65 }
     // };
     const Projects = () => {
      
      
        function FadeInWhenVisible({ children }) {
          const controls = useAnimation();
          const [ref, inView] = useInView();
          
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1,y:0, scale: 1 },
        hidden: { opacity: 0,y:-50, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}
        
function Box() {
  return (
    <div className="iconDiv1">
    <div className="tools">
      <h2>Tools Used </h2>
      </div>
      <div className="iconUsed">
      <SiHtml5 className="icon1"/>
      <SiCss3 className="icon2"/>
      <SiReact className="icon3"/>
      <SiBootstrap className="icon4"/>
      </div>
      </div>

  );
}
function Box2() {
  return (
    <div className="iconDiv1">
    <div className="tools">
      <h2>Tools Used </h2>
      </div>
      <div className="iconUsed">
      <SiHtml5 className="icon1"/>
      <SiCss3 className="icon2"/>
      <SiJavascript className="icon5"/>
      </div>
      </div>

  );
}
function Box3() {
  return (
    <div className="iconDiv1">
    <div className="tools">
      <h2>Tools Used </h2>
      </div>
      <div className="iconUsed">
      <SiHtml5 className="icon1"/>
      <SiCss3 className="icon2"/>
      <SiLaravel className="icon6"/>
      <SiBootstrap className="icon4"/>
      <SiJavascript className="icon5"/>
      <SiJquery className="icon7"/>

      </div>
      </div>

  );
}

    // animate={inView ? "visible" : "hidden"}
           //         variants={variants}  exit="hidden" transition={{ duration: 2 }}   ref={ref} 
  return (
    <div className='projects' id="projects">
        <div className="wrapper">
            
                
            <Slider/>


            <div  className="images">


            <div className="grid ">
                        
                        <InView threshold={0.25}>{({ref,inView})=>(
    
                                                    
                            <motion.figure ref={ref} initial={{opacity:0}}
                            animate={inView ? {opacity:1,scale:1} : {opacity:0,scale:0.5}}
                            transition={{ duration: 1.5 }} 
    
    
                            className="effect-apollo image2">
                                <img src="assests/coffeetime.png" alt=""/>
                                <figcaption className='clock'>
                                    <h2>Coffee <span>Time</span></h2>
                                    <a href="http://coffeetime.epizy.com/" target="_blank" rel="noreferrer">View more</a>
                                </figcaption>			
                                </motion.figure>
                            )}
                            
                            </InView >
                        </div>
    
                        <FadeInWhenVisible>
                        <Box />
                        </FadeInWhenVisible>
    


                    <div  
                     className="grid ">
                         <InView threshold={0.25}>{({ref,inView})=>(

                         
                        <motion.figure ref={ref} initial={{opacity:0}}
                        animate={inView ? {opacity:1,scale:1} : {opacity:0,scale:0.5}}
                        transition={{ duration: 1.5 }} 


                        className="effect-apollo image1">
                            <img src="assests/test3.png" alt=""></img>
                            <figcaption className='port'>
                                <h2>Portfolio <span></span></h2>
                                <a href="https://www.behance.net/gallery/166970145/Portfolio-Web-Page" target="_blank" rel="noreferrer">View more</a>
                            </figcaption>			
                        </motion.figure>
                        
                        )}
                        </InView>
                    </div>

                    <FadeInWhenVisible>
                    <Box />
                    </FadeInWhenVisible>

            <div className="grid ">
                        
                        <InView threshold={0.25}>{({ref,inView})=>(
    
                                                    
                            <motion.figure ref={ref} initial={{opacity:0}}
                            animate={inView ? {opacity:1,scale:1} : {opacity:0,scale:0.5}}
                            transition={{ duration: 1.5 }} 
    
    
                            className="effect-apollo image2">
                                <img src="assests/CaltaGroup.png" alt=""/>
                                <figcaption className='clock'>
                                <h2><span> Calta </span></h2>
                                    <a href="https://thecaltagroup.com/" target="_blank" rel="noreferrer">View more</a>
                                </figcaption>			
                                </motion.figure>
                            )}
                            
                            </InView >
                        </div>
    
                        <FadeInWhenVisible>
                        <Box3 />
                        </FadeInWhenVisible>



            <div className="grid ">
                        
                        <InView threshold={0.25}>{({ref,inView})=>(
    
                                                    
                            <motion.figure ref={ref} initial={{opacity:0}}
                            animate={inView ? {opacity:1,scale:1} : {opacity:0,scale:0.5}}
                            transition={{ duration: 1.5 }} 
    
    
                            className="effect-apollo image2">
                                <img src="assests/Oscar.png" alt=""/>
                                <figcaption className='clock'>
                                    <h2><span style={{color:'black'}}> Oscar </span></h2>
                                    <a href="https://oscarstores.com/" target="_blank" rel="noreferrer">View more</a>
                                </figcaption>			
                                </motion.figure>
                            )}
                            
                            </InView >
                        </div>
    
                        <FadeInWhenVisible>
                        <Box3 />
                        </FadeInWhenVisible>


                        <div className="grid ">
                        
                        <InView threshold={0.25}>{({ref,inView})=>(
    
                                                    
                            <motion.figure ref={ref} initial={{opacity:0}}
                            animate={inView ? {opacity:1,scale:1} : {opacity:0,scale:0.5}}
                            transition={{ duration: 1.5 }} 
    
    
                            className="effect-apollo image2">
                                <img src="assests/r-write.png" alt=""/>
                                <figcaption className='clock'>
                                    <h2><span> R-write </span></h2>
                                    <a href="https://r-write.com/" target="_blank" rel="noreferrer">View more</a>
                                </figcaption>			
                                </motion.figure>
                            )}
                            
                            </InView >
                        </div>
    
                        <FadeInWhenVisible>
                        <Box3 />
                        </FadeInWhenVisible>



         
            
              
                    

               
                    

                    {/* <div className="grid ">
                    <InView threshold={0.25}>{({ref,inView})=>(

                                                                        
                        <motion.figure ref={ref} initial={{opacity:0}}
                        animate={inView ? {opacity:1,scale:1} : {opacity:0,scale:0.5}}
                        transition={{ duration: 1.5 }} 


                        className="effect-apollo image3">
                            <img src="assests/test2.png" alt=""/>
                            <figcaption>
                                <h2>Palindrome <span>Checker</span></h2>
                                <a href="https://codepen.io/faroukemad/pen/RweaOxB" target="_blank" rel="noreferrer">View more</a>
                            </figcaption>			
                            </motion.figure>
                        )}
                        </InView>
                        
                        
                    </div>

                    <FadeInWhenVisible>
                    <Box2 />
                    </FadeInWhenVisible> */}


            </div>
        </div>
    </div>
  );
};
export default Projects;
