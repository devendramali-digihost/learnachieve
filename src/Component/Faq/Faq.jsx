import React, { useState, useEffect } from 'react';
import "./../../assets/css/faq.scss";
import "./../../assets/css/responsive.scss";
import { Link } from 'react-router-dom';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from 'react-bootstrap/Accordion';
function Faq() {
  return (
    <div className='faq'>
        <div className="breadcrumb">
            <div className="container">
                <div className="row">
                <div className="col-lg-7 col-md-8">
                    <div className="bread-content">
                    <h3 className="title">Frequently Asked Questions</h3>
                    <ul>
                        <li><Link to={""}>Home</Link></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1513 17.2432C10.9496 17.0154 10.9496 16.6461 11.1513 16.4183L15.9547 10.9974L11.1513 5.57659C10.9496 5.34874 10.9496 4.97938 11.1513 4.75153C11.3532 4.5238 11.6805 4.5238 11.8824 4.75153L17.4167 10.9974L11.8824 17.2432C11.6805 17.471 11.3532 17.471 11.1513 17.2432Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83904 17.2432C3.60834 17.0154 3.60834 16.6461 3.83904 16.4183L9.32855 10.9974L3.83904 5.57659C3.60834 5.34874 3.60834 4.97938 3.83904 4.75153C4.06973 4.5238 4.44375 4.5238 4.67444 4.75153L10.9993 10.9974L4.67444 17.2432C4.44375 17.471 4.06973 17.471 3.83904 17.2432Z" fill="white"/>
                        </svg></li>
                        <li className='active'>Frequently Asked Questions</li>

                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="page">
            <div className="box">
              <div className="container">
                <div className="title text-center">
                    <h2>Frequently Asked questions</h2>
                </div>
                <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className=" tab-container"
                >
                    <Tab eventKey="home" title="General" className="tabs">
                        < Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='faqhead'>What is Learn and Achieve Edutech Project?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='faqhead'>What is भारत SAT, and how does it benefit students?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='faqhead'>Who is eligible to participate in Bharat SAT?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className='faqhead'>How can I register for Bharat SAT?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className='faqhead'>How can Learn and Achieve help improve my child's education?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className='faqhead'>Is Learn and Achieve affiliated with any educational institutions or boards?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Tab>
                    <Tab eventKey="class2" title="Educator" className="tabs">
                      
                    < Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="6">
                                <Accordion.Header className='faqhead'>Is Learn and Achieve affiliated with any educational institutions or boards?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header className='faqhead'>What is Learn and Achieve Edutech Project?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header className='faqhead'>What is भारत SAT, and how does it benefit students?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header className='faqhead'>Who is eligible to participate in Bharat SAT?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="10">
                                <Accordion.Header className='faqhead'>How can I register for Bharat SAT?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="11">
                                <Accordion.Header className='faqhead'>How can Learn and Achieve help improve my child's education?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="12">
                                <Accordion.Header className='faqhead'>Is Learn and Achieve affiliated with any educational institutions or boards?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Tab>
                    <Tab eventKey="class3" title="BHARAT SAT" className="tabs">
                           
                        < Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="13">
                                <Accordion.Header className='faqhead'>Who is eligible to participate in Bharat SAT?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="14">
                                <Accordion.Header className='faqhead'>How can I register for Bharat SAT?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey=" 15">
                                <Accordion.Header className='faqhead'>What is Learn and Achieve Edutech Project?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="16">
                                <Accordion.Header className='faqhead'>What is भारत SAT, and how does it benefit students?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                       
                            <Accordion.Item eventKey="17">
                                <Accordion.Header className='faqhead'>How can Learn and Achieve help improve my child's education?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="18">
                                <Accordion.Header className='faqhead'>Is Learn and Achieve affiliated with any educational institutions or boards?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Tab>
                    <Tab eventKey="class4" title="Courses" className="tabs">
                            
                        < Accordion defaultActiveKey="0">

                        <Accordion.Item eventKey="19">
                                <Accordion.Header className='faqhead'>How can I register for Bharat SAT?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="20">
                                <Accordion.Header className='faqhead'>How can Learn and Achieve help improve my child's education?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="21">
                                <Accordion.Header className='faqhead'>Is Learn and Achieve affiliated with any educational institutions or boards?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="22">
                                <Accordion.Header className='faqhead'>What is Learn and Achieve Edutech Project?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="23">
                                <Accordion.Header className='faqhead'>What is भारत SAT, and how does it benefit students?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="24">
                                <Accordion.Header className='faqhead'>Who is eligible to participate in Bharat SAT?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                      
                        </Accordion>
                    </Tab>
                    <Tab eventKey="class5" title="Question Bank" className="tabs">
                            
                        < Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="28">
                                <Accordion.Header className='faqhead'>What is Learn and Achieve Edutech Project?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="29">
                                <Accordion.Header className='faqhead'>What is भारत SAT, and how does it benefit students?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        <Accordion.Item eventKey="25">
                                <Accordion.Header className='faqhead'>How can I register for Bharat SAT?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="26">
                                <Accordion.Header className='faqhead'>How can Learn and Achieve help improve my child's education?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="27">
                                <Accordion.Header className='faqhead'>Is Learn and Achieve affiliated with any educational institutions or boards?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                    
                            <Accordion.Item eventKey="30">
                                <Accordion.Header className='faqhead'>Who is eligible to participate in Bharat SAT?</Accordion.Header>
                                <Accordion.Body className='faqbody'>
                                <p>Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                      
                        </Accordion>
                    </Tab>
                </Tabs>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Faq