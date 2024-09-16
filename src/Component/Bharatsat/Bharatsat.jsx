import React, { useState, useEffect } from 'react';
import "./../../assets/css/bharatsat.scss";
import "./../../assets/css/responsive.scss";
import { Link } from 'react-router-dom';
import bharat1 from "./../../assets/img/bharat1.png"
import bharat2 from "./../../assets/img/bharat2.png"
import bharat3 from "./../../assets/img/bharat3.png"
import bharat4 from "./../../assets/img/bharat4.png"
import bharat5 from "./../../assets/img/bharat5.png"

function Bharatsat() {
  return (
    <div className='bharatsat'>
        <div className="breadcrumb">
            <div className="container">
                <div className="row">
                <div className="col-lg-7 col-md-8">
                    <div className="bread-content">
                    <h3 className="title">Bharat SAT Scholarship
                    Examination</h3>
                    {/* <div class="divider"></div> */}
                    <ul>
                        <li><Link to={""}>Home</Link></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1513 17.2432C10.9496 17.0154 10.9496 16.6461 11.1513 16.4183L15.9547 10.9974L11.1513 5.57659C10.9496 5.34874 10.9496 4.97938 11.1513 4.75153C11.3532 4.5238 11.6805 4.5238 11.8824 4.75153L17.4167 10.9974L11.8824 17.2432C11.6805 17.471 11.3532 17.471 11.1513 17.2432Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83904 17.2432C3.60834 17.0154 3.60834 16.6461 3.83904 16.4183L9.32855 10.9974L3.83904 5.57659C3.60834 5.34874 3.60834 4.97938 3.83904 4.75153C4.06973 4.5238 4.44375 4.5238 4.67444 4.75153L10.9993 10.9974L4.67444 17.2432C4.44375 17.471 4.06973 17.471 3.83904 17.2432Z" fill="white"/>
                        </svg></li>
                        <li className='active'>Bharat SAT</li>

                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="page">
           
            <div className="imggallary">
                <div className="container">
                    <div className=" d-flex justify-content-center">
                        <div class="title text-center">
                            <h2>Introducing Bharat SAT: Unlocking Potential <br /> through Education</h2>
                            <p>Welcome to Bharat SAT, a flagship initiative of the "Learn and Achieve" Edutech project, aimed at transforming the educational landscape of India. Bharat SAT is an All India level examination specially designed for K12 classes, catering to students from 1st to 12th standard. This initiative stands out for its unique approach, combining competition and diagnosis to empower students on their educational journey.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="leftimg">
                                <img src={bharat2} alt="" className="img1" />
                                <img src={bharat5} alt="" className="img2" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="centerimg">
                                <img src={bharat1} alt="" className="img1" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="rightimg">
                                <img src={bharat4} alt="" className="img3" />
                                <img src={bharat3} alt="" className="img4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlight">
                <div className="container">
                <div className=" d-flex justify-content-center">
                    <div class="title text-center">
                        <h2>Key Highlights</h2>
                    </div>
                </div>
                <div className="highbox">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cont box1">
                                <h4><span>01</span>. All India Level Examination:</h4>
                                <p>BHARAT SAT is an examination that spans the entire nation, bringing students from every corner of the country together in the pursuit of knowledge and excellence.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cont box2">
                                <h4><span>02</span>. All India Level Examination:</h4>
                                <p>BHARAT SAT is an examination that spans the entire nation, bringing students from every corner of the country together in the pursuit of knowledge and excellence.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cont box3">
                                <h4><span>03</span>. All India Level Examination:</h4>
                                <p>BHARAT SAT is an examination that spans the entire nation, bringing students from every corner of the country together in the pursuit of knowledge and excellence.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cont box4">
                                <h4><span>04</span>. All India Level Examination:</h4>
                                <p>BHARAT SAT is an examination that spans the entire nation, bringing students from every corner of the country together in the pursuit of knowledge and excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="benefits">
                <div className="container">
                <div className=" d-flex justify-content-center">
                    <div class="title text-center">
                        <h2>Key Highlights</h2>
                    </div>
                </div>
                <div className="list">
                    <ul>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M10.0246 22.3559C14.7116 22.3559 18.5112 18.5563 18.5112 13.8694C18.5112 9.18236 14.7116 5.38281 10.0246 5.38281C5.33764 5.38281 1.53809 9.18236 1.53809 13.8694C1.53809 18.5563 5.33764 22.3559 10.0246 22.3559Z" fill="#DCDCDC"/>
                            <path d="M10.1209 20.427L10.0133 20.2436C8.36907 17.4421 3.99974 11.497 3.95561 11.4373L3.89258 11.3517L5.38118 9.88053L10.0933 13.1709C13.0602 9.32091 15.8281 6.67659 17.6335 5.1324C19.6086 3.44322 20.8942 2.66558 20.9072 2.65813L20.9364 2.64062H23.4615L23.2203 2.85543C17.017 8.38072 10.2933 20.1242 10.2263 20.2422L10.1209 20.427Z" fill="#F6821F"/>
                            </svg><p>Skill Enhancement: Participating in BHARAT SAT encourages students to develop a broad spectrum of skills, from problem-solving to time management, fostering their holistic growth.</p></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M10.0246 22.3559C14.7116 22.3559 18.5112 18.5563 18.5112 13.8694C18.5112 9.18236 14.7116 5.38281 10.0246 5.38281C5.33764 5.38281 1.53809 9.18236 1.53809 13.8694C1.53809 18.5563 5.33764 22.3559 10.0246 22.3559Z" fill="#DCDCDC"/>
                            <path d="M10.1209 20.427L10.0133 20.2436C8.36907 17.4421 3.99974 11.497 3.95561 11.4373L3.89258 11.3517L5.38118 9.88053L10.0933 13.1709C13.0602 9.32091 15.8281 6.67659 17.6335 5.1324C19.6086 3.44322 20.8942 2.66558 20.9072 2.65813L20.9364 2.64062H23.4615L23.2203 2.85543C17.017 8.38072 10.2933 20.1242 10.2263 20.2422L10.1209 20.427Z" fill="#F6821F"/>
                            </svg><p>Healthy Competition: Healthy competition is the cornerstone of personal development. BHARAT SAT instills a sense of competitiveness in students, motivating them to strive for excellence.</p></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M10.0246 22.3559C14.7116 22.3559 18.5112 18.5563 18.5112 13.8694C18.5112 9.18236 14.7116 5.38281 10.0246 5.38281C5.33764 5.38281 1.53809 9.18236 1.53809 13.8694C1.53809 18.5563 5.33764 22.3559 10.0246 22.3559Z" fill="#DCDCDC"/>
                            <path d="M10.1209 20.427L10.0133 20.2436C8.36907 17.4421 3.99974 11.497 3.95561 11.4373L3.89258 11.3517L5.38118 9.88053L10.0933 13.1709C13.0602 9.32091 15.8281 6.67659 17.6335 5.1324C19.6086 3.44322 20.8942 2.66558 20.9072 2.65813L20.9364 2.64062H23.4615L23.2203 2.85543C17.017 8.38072 10.2933 20.1242 10.2263 20.2422L10.1209 20.427Z" fill="#F6821F"/>
                            </svg><p>Scholarships: With monthly scholarships awarded to the top performers at various levels, BHARAT SAT eases the financial burden on families, making quality education more accessible.</p></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M10.0246 22.3559C14.7116 22.3559 18.5112 18.5563 18.5112 13.8694C18.5112 9.18236 14.7116 5.38281 10.0246 5.38281C5.33764 5.38281 1.53809 9.18236 1.53809 13.8694C1.53809 18.5563 5.33764 22.3559 10.0246 22.3559Z" fill="#DCDCDC"/>
                            <path d="M10.1209 20.427L10.0133 20.2436C8.36907 17.4421 3.99974 11.497 3.95561 11.4373L3.89258 11.3517L5.38118 9.88053L10.0933 13.1709C13.0602 9.32091 15.8281 6.67659 17.6335 5.1324C19.6086 3.44322 20.8942 2.66558 20.9072 2.65813L20.9364 2.64062H23.4615L23.2203 2.85543C17.017 8.38072 10.2933 20.1242 10.2263 20.2422L10.1209 20.427Z" fill="#F6821F"/>
                            </svg><p>Identify Potential: BHARAT SAT's diagnostic aspect helps students and educators identify their strengths and weaknesses, enabling them to tailor their educational paths for optimal growth.</p></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M10.0246 22.3559C14.7116 22.3559 18.5112 18.5563 18.5112 13.8694C18.5112 9.18236 14.7116 5.38281 10.0246 5.38281C5.33764 5.38281 1.53809 9.18236 1.53809 13.8694C1.53809 18.5563 5.33764 22.3559 10.0246 22.3559Z" fill="#DCDCDC"/>
                            <path d="M10.1209 20.427L10.0133 20.2436C8.36907 17.4421 3.99974 11.497 3.95561 11.4373L3.89258 11.3517L5.38118 9.88053L10.0933 13.1709C13.0602 9.32091 15.8281 6.67659 17.6335 5.1324C19.6086 3.44322 20.8942 2.66558 20.9072 2.65813L20.9364 2.64062H23.4615L23.2203 2.85543C17.017 8.38072 10.2933 20.1242 10.2263 20.2422L10.1209 20.427Z" fill="#F6821F"/>
                            </svg><p>National Recognition: Achieving success in BHARAT SAT is a badge of honor, signifying excellence at a national level, which can open doors to a world of opportunities.</p></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="satcta">
                <div className="container">
                    <p>Join us in this remarkable journey of knowledge, competition, and self-improvement with Bharat SAT. Together, we are shaping a brighter future for India's young minds. Discover your potential, compete, and succeed with Bharat SAT.</p>
                    <div className="bnr-btn btn-box">
                        <button type="button" className="btn">
                            Student Registration
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
            </div>
      
        </div>
    </div>
  )
}

export default Bharatsat