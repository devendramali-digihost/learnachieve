import React, { useState, useEffect } from 'react';
import "./../../assets/css/privacypolicy.scss";
import "./../../assets/css/responsive.scss";
import { Link } from 'react-router-dom';


function Termsandcondition() {
  return (
    <div className='privacypolicy'>
    <div className="breadcrumb"> 
        <div className="container">
            <div className="row">
            <div className="col-lg-7 col-md-8">
                <div className="bread-content">
                <h3 className="title">Terms and conditions</h3>
                <ul>
                    <li><Link to={""}>Home</Link></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1513 17.2432C10.9496 17.0154 10.9496 16.6461 11.1513 16.4183L15.9547 10.9974L11.1513 5.57659C10.9496 5.34874 10.9496 4.97938 11.1513 4.75153C11.3532 4.5238 11.6805 4.5238 11.8824 4.75153L17.4167 10.9974L11.8824 17.2432C11.6805 17.471 11.3532 17.471 11.1513 17.2432Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83904 17.2432C3.60834 17.0154 3.60834 16.6461 3.83904 16.4183L9.32855 10.9974L3.83904 5.57659C3.60834 5.34874 3.60834 4.97938 3.83904 4.75153C4.06973 4.5238 4.44375 4.5238 4.67444 4.75153L10.9993 10.9974L4.67444 17.2432C4.44375 17.471 4.06973 17.471 3.83904 17.2432Z" fill="white"/>
                    </svg></li>
                    <li className='active'>Terms and conditions</li>

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
              <h2>Terms and conditions</h2>
          </div>
          <div className="que">
            <h3>1. Minimum Participation Requirement</h3>
            <p>District-level participation must consist of a minimum of 1100 students in each class/grade to qualify for the scholarship program.</p>
            <h3>2. Honest Examination Conduct</h3>
            <p>Participating students are required to take the exam with utmost honesty and sincerity, adhering to ethical standards throughout the assessment.</p>
            <h3>3. Flexibility in Exam Venue</h3>
            <p>Students have the liberty to take the examination from their homes or any other location of their choice with a stable internet connection.</p>
            <h3>4. Personal Devices</h3>
            <p>Participants must utilize their own devices—smartphones, tablets, laptops, or desktop computers—to take the exam.</p>
            <h3>5. Examination Format</h3>
            <p>The online exam will be conducted for 200 marks, with merit rank holders further undergoing a 100 marks personal interview at a designated venue by the Learn and Achieve Edutech team.</p>
            <h3>6. Scholarship Disbursement</h3>
            <p>Scholarship amounts will be disbursed on a monthly basis, directly into the scholarship holders' bank accounts via money transfer.</p>
            <h3>7. Exclusively Online Exam</h3>
            <p>The examination will solely be conducted online; no pen-and-paper tests will be administered.</p>
            <h3>8. Preparation Material Access</h3>
            <p>Learn and Achieve Edutech will provide preparation materials in the form of a Question Bank and mock tests, accessible to students on their digital dashboard. These packages for respective grades will be available for purchase at prices determined by the Learn and Achieve Edutech team.</p>
            <h3>9. Question Composition</h3>
            <p>There is a guarantee that 80% of the questions will be sourced from the provided Question Bank, while the remaining 20% will be based on the respective grade syllabus, including higher difficulty levels</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Termsandcondition