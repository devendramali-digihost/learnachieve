import React from 'react'
import { Link } from 'react-router-dom'
import service1 from "./../../assets/img/service1.png";
import service2 from "./../../assets/img/service2.png";
import service3 from "./../../assets/img/service3.png";
import service4 from "./../../assets/img/service4.png";
import service5 from "./../../assets/img/service5.png";
import "./../../assets/css/service.scss"
function Service() {
  return (
    <>
        <div className="service">
            <div className="breadcrumb">
            <div className="container">
                <div className="row">
                <div className="col-lg-7 col-md-8">
                    <div className="bread-content">
                    <h3 className="title">Services</h3>
                    {/* <div class="divider"></div> */}
                    <ul>
                        <li><Link to={""}>Home</Link></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1513 17.2432C10.9496 17.0154 10.9496 16.6461 11.1513 16.4183L15.9547 10.9974L11.1513 5.57659C10.9496 5.34874 10.9496 4.97938 11.1513 4.75153C11.3532 4.5238 11.6805 4.5238 11.8824 4.75153L17.4167 10.9974L11.8824 17.2432C11.6805 17.471 11.3532 17.471 11.1513 17.2432Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83904 17.2432C3.60834 17.0154 3.60834 16.6461 3.83904 16.4183L9.32855 10.9974L3.83904 5.57659C3.60834 5.34874 3.60834 4.97938 3.83904 4.75153C4.06973 4.5238 4.44375 4.5238 4.67444 4.75153L10.9993 10.9974L4.67444 17.2432C4.44375 17.471 4.06973 17.471 3.83904 17.2432Z" fill="white"/>
                        </svg></li>
                        <li className='active'>Services</li>

                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="page">
                <div className="container">
                    <div className="service service1">
                        <div className="content">
                            <h2>
                            Empowering Students with Free E-Learning Services
                            </h2>
                            <p>At Learn and Achieve, our mission is to empower students, parents, and educators with free services that foster learning and growth. We understand the importance of quality education, and to that end, we offer a range of services to support K12 students. Our YouTube channel, filled with educational content, is just a click away. In addition, we provide direct links to YouTube videos and insightful blogs that cater to the diverse needs of students, ensuring that they have the resources they need to excel in their studies.</p>
                        </div>
                        <img src={service1} alt="" />

                    </div>
                    <div className="service service2">
                        <img src={service2} alt="" />
                        <div className="content">
                            <h2>
                            Empowering Students with Free E-Learning Services
                            </h2>
                            <p>At Learn and Achieve, our mission is to empower students, parents, and educators with free services that foster learning and growth. We understand the importance of quality education, and to that end, we offer a range of services to support K12 students. Our YouTube channel, filled with educational content, is just a click away. In addition, we provide direct links to YouTube videos and insightful blogs that cater to the diverse needs of students, ensuring that they have the resources they need to excel in their studies.</p>
                        </div>
                    </div>
                    <div className="service service3">
                        <div className="content">
                            <h2>
                            Empowering Students with Free E-Learning Services
                            </h2>
                            <p>At Learn and Achieve, our mission is to empower students, parents, and educators with free services that foster learning and growth. We understand the importance of quality education, and to that end, we offer a range of services to support K12 students. Our YouTube channel, filled with educational content, is just a click away. In addition, we provide direct links to YouTube videos and insightful blogs that cater to the diverse needs of students, ensuring that they have the resources they need to excel in their studies.</p>
                        </div>
                        <img src={service3} alt="" />

                    </div>
                    <div className="service service4">
                        <img src={service4} alt="" />
                        <div className="content">
                            <h2>
                            Empowering Students with Free E-Learning Services
                            </h2>
                            <p>At Learn and Achieve, our mission is to empower students, parents, and educators with free services that foster learning and growth. We understand the importance of quality education, and to that end, we offer a range of services to support K12 students. Our YouTube channel, filled with educational content, is just a click away. In addition, we provide direct links to YouTube videos and insightful blogs that cater to the diverse needs of students, ensuring that they have the resources they need to excel in their studies.</p>
                        </div>
                        

                    </div>
                    <div className="service service5">
                        <div className="content">
                            <h2>
                            Empowering Students with Free E-Learning Services
                            </h2>
                            <p>At Learn and Achieve, our mission is to empower students, parents, and educators with free services that foster learning and growth. We understand the importance of quality education, and to that end, we offer a range of services to support K12 students. Our YouTube channel, filled with educational content, is just a click away. In addition, we provide direct links to YouTube videos and insightful blogs that cater to the diverse needs of students, ensuring that they have the resources they need to excel in their studies.</p>
                        </div>
                        <img src={service5} alt="" />

                    </div>
                 
                </div>
            </div>
        </div>
    </>
  )
}

export default Service