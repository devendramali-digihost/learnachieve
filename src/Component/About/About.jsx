import React, { useState, useEffect } from 'react';
import "./../../assets/css/responsive.scss";
import "./../../assets/css/about.scss"
import { Link } from 'react-router-dom';
import imgabout3 from "./../../assets/img/about2.png";
import imgabout4 from "./../../assets/img/about4.png";

function About() {
  return (
    <>
      <div className="about-page">
        <div className="breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8">
                <div className="bread-content">
                  <h3 className="title">About Learn and Achieve</h3>

                  <ul>
                    <li><Link to={""}>Home</Link></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1513 17.2432C10.9496 17.0154 10.9496 16.6461 11.1513 16.4183L15.9547 10.9974L11.1513 5.57659C10.9496 5.34874 10.9496 4.97938 11.1513 4.75153C11.3532 4.5238 11.6805 4.5238 11.8824 4.75153L17.4167 10.9974L11.8824 17.2432C11.6805 17.471 11.3532 17.471 11.1513 17.2432Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83904 17.2432C3.60834 17.0154 3.60834 16.6461 3.83904 16.4183L9.32855 10.9974L3.83904 5.57659C3.60834 5.34874 3.60834 4.97938 3.83904 4.75153C4.06973 4.5238 4.44375 4.5238 4.67444 4.75153L10.9993 10.9974L4.67444 17.2432C4.44375 17.471 4.06973 17.471 3.83904 17.2432Z" fill="white"/>
                    </svg></li>
                    <li className='active'>About Us</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div className="container">
        <div className="page">
            <div className="row">
              <div className="col-lg-6 col-md-9">
                <div className="connt connt-1">
                  <h4>Building Strong Educational Foundations</h4>
                  <p>At Learn and Achieve, we are a passionate group of young individuals with diverse backgrounds and dynamic personalities who share a common vision: to revolutionize the Indian educational system...</p>
                  <div className="img">

                  </div>
                </div>
                
              </div>
              <div className="col-lg-6 col-md-9">
                <div className="connt connt-2">
                  <h4>Empowering the Next Generation.</h4>
                  <p>We believe in equipping children with the knowledge and skills they need to confidently face the challenges of an AI-driven future. Our mission is to make every child academically and mentally robust, arming them with fundamental skills that will be their pillars of strength as they navigate the modern world.</p>
                  <div className="img">

                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-9">
                <div className="connt connt-3">
                <div className="img">
                      <img src={imgabout3} alt="" />
                  </div>
                  <h4>Bharat SAT:  <br />
                  A Path to Success</h4>
                  <p>One of our significant initiatives is the Bharat SAT, a scientifically designed, skill-based all-India level scholarship examination. Bharat SAT is not only competitive but also diagnostic in nature. It plays a crucial role in helping students identify their strengths and weaknesses, enabling them to improve their skills continually.</p>
                  
                </div>
              </div>
              <div className="col-lg-6 col-md-9">
                <div className="connt connt-4">
                
                  <h4>Join Us on the Journey</h4>
                  <p>Learn and Achieve is dedicated to enhancing the educational experience of students across India. We invite you to join us on this remarkable journey to build a brighter future for the next generation. </p>
                  <div className="img">
                      <img src={imgabout4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About