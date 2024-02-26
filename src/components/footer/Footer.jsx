import React from 'react'
import './footer.scss'
export default function Footer() {
    
  return (
    <div className='footer' id="footer">
        <div className="wrapper">
        
            <div className="imgCont" >
            <div className='nav'> Top</div>
                <a  className="x"href="#topbar">
                    <img src="assests/f-logo.png"alt="" ></img>
                   
                </a>
            </div>

            <div className="social">
                <a href='https://www.linkedin.com/in/farouk-emad-8231a2164/'className="linkdin soc" > Linkedin</a>
                <a href='https://www.behance.net/faroukemad' className="behance soc">Behance</a>
                <a href='https://github.com/faroukemad' className="github soc">Github</a>
                <a href='https://codepen.io/faroukemad' className="codepen soc">CodePen</a>
            </div>
   
            <div className="word">
            <span>Copyright &#169; 2023 Farouk Emad</span>
            </div>
        </div>
            
    </div>
  )
}
