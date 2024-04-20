import './App.css';
import Topbar from "./components/topbar/Topbar";
import Intro from  "./components/intro/Intro";
import Projects from './components/projects/Projects';

import Email from './components/email/Email';
import {useState,useEffect} from "react";
import About from './components/about/About';
import Footer from './components/footer/Footer';
import HashLoader from "react-spinners/HashLoader";
import { motion, useScroll, useSpring } from "framer-motion";


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const[menuOpen, setMenuOpen]= useState(false)
  const [backOpen,setBackOpen]= useState(false)
  const [loading,setLoading]=useState(false)
  const [load,setLoad]=useState(false)

 // useEffect(() => {
 //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
 // }, []);

  useEffect(()=>{
    setLoading(true)
    window.scrollTo(0,0);
    setTimeout(()=>{
      setLoading(false);
      
    },3000)
  },[])



  



  return (
  
    <div className="App "  >
      <motion.div  className='progressBar'style={{ scaleX }}/>
   {  
     loading ?

     <div class="spinner">
    <div class="spinner1"></div>
      </div>

     :
 
     <div className={'sections '}>
          

        <div>

          <div className={"back " + (backOpen && "background") }>
            <div className={"x " + (menuOpen && "blurr") }>
            <Topbar  backOpen={backOpen} setBackOpen={setBackOpen} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Intro  menuOpen={menuOpen} setMenuOpen={setMenuOpen} backOpen={backOpen} setBackOpen={setBackOpen}/>
          </div>
          </div>
        </div>
        <Email menuOpen={menuOpen} setMenuOpen={setMenuOpen} load={load} setLoad={setLoad}/>
        <Projects/>
        <About/>
        <Footer/>
      </div>
        }
    </div>
  );
}

export default App;
