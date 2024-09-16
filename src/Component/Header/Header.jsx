import React, { useState, useEffect } from 'react';
import "./../../assets/css/Header.scss"
import logo from "./../../assets/img/logo.png"
import { NavLink } from 'react-router-dom';
function Header() {
    const [isFixed, setIsFixed] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (currentScrollTop > lastScrollTop) {
          // Scroll down
          setIsFixed(false);
        } else {
          // Scroll up
          setIsFixed(true);
        }
        
        setLastScrollTop(currentScrollTop);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollTop]);
  return (

        <header className={`menu  ${isFixed ? 'fixed' : ''}`}>
            <div className="head ">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div> 
                    <div className="menu">
                        <ul>
                            <li><NavLink to={""} className={({isActive})=>`${isActive ? "active" : " "}`} >Home</NavLink></li>
                            <li><NavLink to={"about"} className={({isActive})=>`${isActive ? "active" : " "}`}>About</NavLink></li>
                            
                            <li><NavLink to={"services"} className={({isActive})=>`${isActive ? "active" : " "}`}>Our Services</NavLink></li>
                          
                            <li><NavLink to={"bharat-sat"} className={({isActive})=>`${isActive ? "active" : " "}`}>Bharat SAT</NavLink></li>
                            <li><NavLink to={"contact"} className={({isActive})=>`${isActive ? "active" : " "}`}>Contact</NavLink></li>
          
                            {/* <li>Rewards</li> */}
                            <li><NavLink to={"Join-us"} className={({isActive})=>`${isActive ? "active" : " "}`}>Join as a Coordinator</NavLink></li>
                            
                        </ul>
                    </div>
                    <div className="head-btn btn-box">
                        <button type='button' onClick={()=>{  window.location.href = "/student-registration"; }} className='btn'>Login </button>
                        <svg className='box-1' xmlns="http://www.w3.org/2000/svg" width="27" height="10" viewBox="0 0 27 10" fill="none">
                            <path d="M27 9.999C19.4 1.999 8.5 0.665665 4 0.998998H0.5V9.999H27Z" fill="#F6821F"/>
                        </svg>
                        <svg className='box-2' xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                            <path d="M16 26C15.2 14 5 3.66667 0 0H43.5L43 42C35 31.5 21.5 27 16 26Z" fill="#F6821F"/>
                        </svg>
                        
                    </div>
                </div>
            </div>
        </header>
   
  )
}

export default Header