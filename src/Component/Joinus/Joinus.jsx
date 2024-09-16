import React, { useState, useEffect } from 'react';
import "./../../assets/css/joinus.scss";
import "./../../assets/css/responsive.scss";
import { Link } from 'react-router-dom';
import coordinator from "./../../assets/img/coordinator.png";
import gift from "./../../assets/img/gift.png";
import key from "./../../assets/img/key.png";
import form from "./../../assets/img/form.png";
import contact2 from "./../../assets/img/contact2.png";
import joincta from "./../../assets/img/joincta.png";

function Joinus() {
  return (
    <div className="joinus">
         <div className="breadcrumb">
            <div className="container">
                <div className="row">
                <div className="col-lg-7 col-md-8">
                    <div className="bread-content">
                        <p className='text-white mb-0'>Join Learn and Achieve Edutech as a Coordinator for</p>
                    <h3 className="title">Bharat SAT Examination</h3>
                    <ul>
                        <li><Link to={""}>Home</Link></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1513 17.2432C10.9496 17.0154 10.9496 16.6461 11.1513 16.4183L15.9547 10.9974L11.1513 5.57659C10.9496 5.34874 10.9496 4.97938 11.1513 4.75153C11.3532 4.5238 11.6805 4.5238 11.8824 4.75153L17.4167 10.9974L11.8824 17.2432C11.6805 17.471 11.3532 17.471 11.1513 17.2432Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83904 17.2432C3.60834 17.0154 3.60834 16.6461 3.83904 16.4183L9.32855 10.9974L3.83904 5.57659C3.60834 5.34874 3.60834 4.97938 3.83904 4.75153C4.06973 4.5238 4.44375 4.5238 4.67444 4.75153L10.9993 10.9974L4.67444 17.2432C4.44375 17.471 4.06973 17.471 3.83904 17.2432Z" fill="white"/>
                        </svg></li>
                        <li className='active'>Join as a Co-ordinator</li>

                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="page">
            <div className="howcan">
                <div className="container">
                    <div className="row">
                    
                    <div className="col-lg-6">
                        <div className="join">
                            <h2>Who Can Join?</h2>
                            <p>If you're 18 years or older and have completed your 12th grade, you're eligible to join us as a Coordinator. Your age and qualification are your assets in this endeavor.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="para">
                            <p>Are you a passionate individual looking to make a positive impact on the education landscape? Are you motivated to empower students in their quest for success? If so, we invite you to become a Coordinator with Learn and Achieve Edutech, where opportunities abound and your potential is unlimited.</p>
                            <div className="cordinater">
                                <img src={coordinator} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="catagary">
                <div className="container">
                    <div className=" d-flex justify-content-center">
                        <div class="title text-center">
                            <h2>Two Exciting Categories</h2>
                        </div>
                    </div>
                    <div className="catagarybox">
                        <div className="direct">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="cordinatetitle">
                                        <h3>Direct Coordinator</h3>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="cordpara">
                                        <p>As a Direct Coordinator, you'll directly engage with parents and students, helping them register for the prestigious BHARAT SAT Examination and offering our top-notch online study materials. Be the guiding light on their educational journey.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="direct indirect">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="cordinatetitle">
                                        <h3>Indirect Coordinator</h3>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="cordpara">
                                        <p>If you prefer working with schools, our Indirect Coordinator role is perfect for you. Collaborate with our Learn and Achieve Edutech team to enroll students in the BHARAT SAT Examination through their schools. Team up with us to make education accessible to all.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="excellence">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="choice">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="recognizing path">
                                            <h4>Your Choice, Your Path</h4>
                                            <p>Choose the category that resonates with your skills and interests. We trust you to make the best choice for your unique abilities. After selection and appointment by Learn and Achieve Edutech, you'll embark on an exciting journey in your chosen domain.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="recognizing rewards">
                                            <h4>Rewards for Excellence</h4>
                                            <p>At Learn and Achieve Edutech, we believe in recognizing and rewarding your performance. You'll earn commissions that directly reflect your dedication and results. The harder you work, the more you can achieve.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="recognizing rewards2">
                                            <div className="img">
                                                <img src={gift} alt="" />
                                            </div>
                                            <div className="cont">
                                                <h4>Rewards for Excellence</h4>
                                                <p>At Learn and Achieve Edutech, we believe in recognizing and rewarding your performance. You'll earn commissions that directly reflect your dedication and results. The harder you work, the more you can achieve.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="key">
                                <h4>Compliance is Key</h4>
                                <p>Every Coordinator must adhere to the terms and conditions of Learn and Achieve. We prioritize ethical conduct, transparency, and dedication to our mission of fostering quality education.</p>
                                <div className="img">
                                    <img src={key} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="joinus">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="jpinusform">
                                <h3>Join Us</h3>
                                <form>
                                    
                                    <div className="form-box">
                                        <label >Name</label>
                                        <input  className="form-control" type="text" placeholder='Enter your name'/>
                                    </div>
                                
                                    <div className="form-box">
                                        <label >Email</label>
                                        <input  className="form-control" type="text" placeholder='Enter your email id'/>
                                    </div>
                                
                                    <div className="form-box">
                                        <label >Mobile No</label>
                                        <input  className="form-control" type="text" placeholder='Enter your mobile no'/>
                                    </div>
                                
                                    <div className="form-box">
                                        <label >Date Of Birth</label>
                                        <input type="date" className="form-control" name="" id="" />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className=" btn-box">
                                            <button type="button" className="btn">
                                            Get Started
                                            </button>
                                            <svg
                                            className="box-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="27"
                                            height="10"
                                            viewBox="0 0 27 10"
                                            fill="none"
                                            >
                                            <path
                                                d="M27 9.999C19.4 1.999 8.5 0.665665 4 0.998998H0.5V9.999H27Z"
                                                fill="#F6821F"
                                            />
                                            </svg>
                                            <svg
                                            className="box-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="43"
                                            height="42"
                                            viewBox="0 0 43 42"
                                            fill="none"
                                            >
                                            <path
                                                d="M16 26C15.2 14 5 3.66667 0 0H43.5L43 42C35 31.5 21.5 27 16 26Z"
                                                fill="#F6821F"
                                            />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                </form>
                                <div className="log">
                                    <img src={form} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact2">
                                <img src={contact2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="joincta">
                <div className="container">
                    <div className="cta">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="joincontent">
                                    <h3>Register today and be the catalyst for change in education</h3>
                                    <p>Take the step towards a fulfilling and rewarding journey by becoming a Coordinator for BHARAT SAT Examination with Learn and Achieve Edutech. Let's shape the future of education together!</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="img">
                                    <img src={joincta} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Joinus