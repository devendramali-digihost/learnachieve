import React, { useState, useEffect } from 'react';
import "./../../assets/css/studentregistration.scss";
import "./../../assets/css/responsive.scss";
import { Link } from 'react-router-dom';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import OtpInput from 'react-otp-input';
function Studentregistration() {
    const [activeTab, setActiveTab] = useState('home');
    const [otp, setOtp] = useState('');
    const handleSelect = (key) => {
      setActiveTab(key);
    };
  
    const getClassName = (tabKey) => {
      if (tabKey === 'home') {
        return activeTab !== 'home' ? 'line' : '';
      } else if (tabKey === 'class2') {
        return activeTab === 'class3' ? 'line' : '';
      }
      return '';
    };

    const [seconds, setSeconds] = useState(180); // 3 minutes = 180 seconds

    useEffect(() => {
      if (seconds > 0) {
        const interval = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [seconds]);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);

    const handleClick = () => {
        setIsActive(prevState => !prevState); // Toggle the state
       
      };

    const handleClick1 = () => {

        setIsActive1(prevState => !prevState); // Toggle the state
      };


  return (
    <div className="studernt-resitration">
          <div className="breadcrumb">
            <div className="container">
                <div className="row">
                <div className="col-lg-7 col-md-8">
                    <div className="bread-content">
                    <h3 className="title">Student Registration</h3>
                    <ul>
                        <li><Link to={""}>Home</Link></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1513 17.2432C10.9496 17.0154 10.9496 16.6461 11.1513 16.4183L15.9547 10.9974L11.1513 5.57659C10.9496 5.34874 10.9496 4.97938 11.1513 4.75153C11.3532 4.5238 11.6805 4.5238 11.8824 4.75153L17.4167 10.9974L11.8824 17.2432C11.6805 17.471 11.3532 17.471 11.1513 17.2432Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83904 17.2432C3.60834 17.0154 3.60834 16.6461 3.83904 16.4183L9.32855 10.9974L3.83904 5.57659C3.60834 5.34874 3.60834 4.97938 3.83904 4.75153C4.06973 4.5238 4.44375 4.5238 4.67444 4.75153L10.9993 10.9974L4.67444 17.2432C4.44375 17.471 4.06973 17.471 3.83904 17.2432Z" fill="white"/>
                        </svg></li>
                        <li className='active'>Student registration</li>

                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="page">
            <div className="box">
              <div className="container">
               <div className="form">
                <form >
                <Tabs
                activeKey={activeTab}
                onSelect={handleSelect}
                className="tab-container"
                >
                    <Tab
                        eventKey="home"
                        title={
                        <span  className={`icon ${getClassName('home')} ${activeTab === 'home' ? 'active' : ''} ${isActive ? 'dark' : ''} ` }>
                            <div className="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.0003 5C13.5111 5 11.5559 6.93676 11.5559 9.25C11.5559 11.5632 13.5111 13.5 16.0003 13.5C18.4895 13.5 20.4449 11.5632 20.4449 9.25C20.4449 6.93676 18.4895 5 16.0003 5ZM9.55591 9.25C9.55591 5.76425 12.4758 3 16.0003 3C19.525 3 22.4449 5.76425 22.4449 9.25C22.4449 12.7357 19.525 15.5 16.0003 15.5C12.4758 15.5 9.55591 12.7357 9.55591 9.25ZM19.5553 19.9579C17.2002 19.5696 14.8005 19.5696 12.4454 19.9579L12.1684 20.0036C9.59877 20.4272 7.66699 22.7303 7.66699 25.482C7.66699 26.3512 8.34098 27 9.1045 27H22.8962C23.6597 27 24.3337 26.3512 24.3337 25.482C24.3337 22.7303 22.4019 20.4272 19.8323 20.0036L19.5553 19.9579ZM19.8806 17.9845L20.1577 18.0301C23.7393 18.6207 26.3337 21.7987 26.3337 25.482C26.3337 27.394 24.825 29 22.8962 29H9.1045C7.17562 29 5.66699 27.394 5.66699 25.482C5.66699 21.7987 8.26143 18.6207 11.843 18.0301L12.1201 17.9845C14.6906 17.5607 17.3101 17.5607 19.8806 17.9845Z" fill="#424242" />
                            </svg>
                            </div>
                            <span>Personal Details</span>
                        </span>
                        }
                    >
                        <div className="details">
                            <h3>Personal Details</h3>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label htmlFor="">First Name</label>
                                    <input className="form-control" type="text" placeholder='Enter your first name' />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">Middle Name</label>
                                    <input className="form-control" type="text" placeholder='Enter your Middle Name' />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">Last Name</label>
                                    <input className="form-control" type="text" placeholder='Enter your Last Name' />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">Date Of Birth</label>
                                    <input className="form-control" type="date" placeholder='Enter your DOB' />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">Gender</label>
                                     <select className='form-select' name="" id="">
                                        <option value="select">select</option>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                     </select>
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">School Name</label>
                                    <input className="form-control" type="text" placeholder='Enter your School Name' />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">Medium</label>
                                     <select className='form-select' name="" id="">
                                        <option value="select">select</option>
                                        <option value="English">English</option>
                                        <option value="Marathi">Marathi</option>
                                     </select>
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">Class</label>
                                     <select className='form-select' name="" id="">
                                        <option value="select">select</option>
                                        <option value="12th">12th</option>
                                        <option value="11th">11th</option>
                                        <option value="10th">10th</option>
                                        <option value="9th">9th</option>
                                        <option value="8th">8th</option>
                                     </select>
                                </div>
                                <div className="col-lg-12 d-flex justify-content-end" >
                                <div className=" btn-box">
                                    <button type='button' className='btn'  eventKey="class2" >Next </button>
                                    <svg className='box-1' xmlns="http://www.w3.org/2000/svg" width="27" height="10" viewBox="0 0 27 10" fill="none">
                                        <path d="M27 9.999C19.4 1.999 8.5 0.665665 4 0.998998H0.5V9.999H27Z" fill="#F6821F"/>
                                    </svg>
                                    <svg className='box-2' xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                        <path d="M16 26C15.2 14 5 3.66667 0 0H43.5L43 42C35 31.5 21.5 27 16 26Z" fill="#F6821F"/>
                                    </svg>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab
                        eventKey="class2"
                        title={
                        <span onClick={handleClick} className={`icon ${getClassName('class2')} ${activeTab === 'class2' ? 'active' : ''} ${isActive1 ? 'dark' : ''}`}>
                            <div className="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.8158 3.96673C9.41299 2.67776 7.25679 2.67776 5.854 3.96673C5.79655 4.01952 5.73523 4.08086 5.65559 4.16052L4.45892 5.35717C3.25478 6.56133 2.74928 8.29722 3.1187 9.9596C5.21466 19.3915 12.5807 26.7575 22.0125 28.8535C23.6749 29.2228 25.4108 28.7173 26.6149 27.5132L27.8115 26.3167C27.8912 26.2369 27.9525 26.1756 28.0053 26.1181C29.2944 24.7153 29.2944 22.5591 28.0053 21.1564C27.9525 21.0988 27.8912 21.0375 27.8115 20.9579L25.8525 18.9988C24.4924 17.6387 22.4383 17.2496 20.6751 18.0183C19.6656 18.4583 18.4896 18.2356 17.7109 17.4569L14.5152 14.2612C13.7365 13.4825 13.5139 12.3066 13.9539 11.2971C14.7224 9.53382 14.3335 7.47978 12.9733 6.11965L11.0142 4.16054C10.9346 4.08088 10.8732 4.01952 10.8158 3.96673ZM7.20722 5.43942C7.84484 4.85352 8.82494 4.85352 9.46256 5.43942C9.48458 5.45965 9.51343 5.48817 9.61486 5.5896L11.5591 7.53386C12.3378 8.31253 12.5605 9.48846 12.1205 10.4979C11.3518 12.2612 11.7408 14.3152 13.101 15.6753L16.2967 18.8712C17.6568 20.2313 19.7109 20.6203 21.4741 19.8516C22.4836 19.4116 23.6596 19.6344 24.4383 20.4131L26.3825 22.3573C26.4839 22.4587 26.5124 22.4876 26.5327 22.5096C27.1185 23.1472 27.1185 24.1273 26.5327 24.7649C26.5124 24.7869 26.4839 24.8157 26.3825 24.9172L25.2007 26.0989C24.4801 26.8196 23.4412 27.1221 22.4464 26.9011C13.7727 24.9736 6.99858 18.1995 5.07107 9.52573C4.85 8.53088 5.15251 7.49202 5.87314 6.7714L7.05494 5.5896C7.15635 5.48818 7.1852 5.45965 7.20722 5.43942Z" fill="#424242" />
                            </svg>
                            </div>
                            <span>Contact Details</span>
                        </span>
                        }
                    >
                        <div className="details">
                            <h3>Contact Details</h3>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label htmlFor="">Email</label>
                                    <input className="form-control" type="text" placeholder='Enter your email id' />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">Mobile</label>
                                    <input className="form-control" type="text" placeholder='Enter your mobile no' />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">Address Line-1</label>
                                    <input className="form-control" type="text" placeholder='Enter your address' />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">Address Line-2</label>
                                    <input className="form-control" type="text" placeholder='Enter your address' />
                                </div>
                                
                                <div className="col-lg-4">
                                    <label htmlFor="">State</label>
                                     <select className='form-select' name="" id="">
                                        <option value="Select State">Select State</option>
                                        <option value="Maharastra">Maharastra</option>
                                        <option value="Gujrat">Gujrat</option>
                                     </select>
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">District</label>
                                     <select className='form-select' name="" id="">
                                        <option value="Select district">Select district</option>
                                        <option value="Nandurbar">Nandurbar</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Thane">Thane</option>
                                     </select>
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">Taluka</label>
                                     <select className='form-select' name="" id="">
                                        <option value="Select district">Select Taluka</option>
                                        <option value="Nandurbar">Nandurbar</option>
                                        <option value="Akkalkuha">Akkalkuha</option>
                                        <option value="Shahda">Shahda</option>
                                        <option value="Akrani">Akrani</option>
                                        <option value="Taloda">Taloda</option>
                                        <option value="Navapur">Navapur</option>
                                     </select>
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="">Pin code</label>
                                    <input className="form-control" type="text" placeholder='Enter your pin code' />
                                </div>
                                
                                <div className="col-lg-12 d-flex justify-content-end" >
                                <div className=" btn-box">
                                    <button type='button' className='btn'  eventKey="class3">Next </button>
                                    <svg className='box-1' xmlns="http://www.w3.org/2000/svg" width="27" height="10" viewBox="0 0 27 10" fill="none">
                                        <path d="M27 9.999C19.4 1.999 8.5 0.665665 4 0.998998H0.5V9.999H27Z" fill="#F6821F"/>
                                    </svg>
                                    <svg className='box-2' xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                        <path d="M16 26C15.2 14 5 3.66667 0 0H43.5L43 42C35 31.5 21.5 27 16 26Z" fill="#F6821F"/>
                                    </svg>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab
                        eventKey="class3"
                        title={
                        <span onClick={handleClick1}  className={`icon ${activeTab === 'class3' ? 'active' : ''}`}>
                            <div className="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M4.54688 30.3333C4.00021 30.3333 3.54688 29.88 3.54688 29.3333C3.54688 23.64 9.13353 19 16.0003 19C17.3469 19 18.6668 19.1733 19.9468 19.5333C20.4801 19.68 20.7869 20.2267 20.6403 20.76C20.4936 21.2933 19.9468 21.6 19.4136 21.4533C18.3203 21.1467 17.1736 21 16.0003 21C10.2402 21 5.54688 24.7333 5.54688 29.3333C5.54688 29.88 5.09354 30.3333 4.54688 30.3333Z" fill="#424242"/>
                                <path d="M15.9997 17.0052C11.773 17.0052 8.33301 13.5652 8.33301 9.33854C8.33301 5.11188 11.773 1.67188 15.9997 1.67188C20.2263 1.67188 23.6663 5.11188 23.6663 9.33854C23.6663 13.5652 20.2263 17.0052 15.9997 17.0052ZM15.9997 3.67188C12.8797 3.67188 10.333 6.21854 10.333 9.33854C10.333 12.4585 12.8797 15.0052 15.9997 15.0052C19.1197 15.0052 21.6663 12.4585 21.6663 9.33854C21.6663 6.21854 19.1197 3.67188 15.9997 3.67188Z" fill="#424242"/>
                                <path d="M23.9993 30.3385C21.786 30.3385 19.706 29.1652 18.586 27.2585C17.986 26.2985 17.666 25.1652 17.666 24.0052C17.666 22.0585 18.5327 20.2585 20.0393 19.0585C21.1593 18.1652 22.5727 17.6719 23.9993 17.6719C27.4927 17.6719 30.3327 20.5119 30.3327 24.0052C30.3327 25.1652 30.0127 26.2985 29.4127 27.2719C29.0793 27.8319 28.6527 28.3385 28.146 28.7652C27.0394 29.7785 25.5593 30.3385 23.9993 30.3385ZM23.9993 19.6719C23.0127 19.6719 22.0793 20.0052 21.2927 20.6319C20.266 21.4452 19.666 22.6852 19.666 24.0052C19.666 24.7919 19.8793 25.5652 20.2927 26.2319C21.066 27.5385 22.4927 28.3385 23.9993 28.3385C25.0527 28.3385 26.066 27.9519 26.8393 27.2585C27.186 26.9652 27.4794 26.6185 27.6927 26.2452C28.1193 25.5652 28.3327 24.7919 28.3327 24.0052C28.3327 21.6185 26.386 19.6719 23.9993 19.6719Z" fill="#424242"/>
                                <path d="M23.2395 26.3273C22.9862 26.3273 22.7329 26.234 22.5329 26.034L21.2129 24.714C20.8262 24.3273 20.8262 23.6872 21.2129 23.3005C21.5995 22.9138 22.2395 22.9138 22.6262 23.3005L23.2662 23.9406L25.3995 21.9672C25.7995 21.5938 26.4395 21.6206 26.8129 22.0206C27.1862 22.4206 27.1595 23.0606 26.7595 23.434L23.9195 26.0605C23.7195 26.2338 23.4795 26.3273 23.2395 26.3273Z" fill="#424242"/>
                            </svg>
                        </div>
                        <span>OTP Verification</span>
                        </span>
                    }
                    >
                     <div className="details">
                            <h3>Contact Details</h3>
                            <span>A One-Time Password has been sent to XXXXXXXX83.</span>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label htmlFor="">OTP</label>
                                    <div className="otp">
                                    <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    renderSeparator={" "}
                                    renderInput={(props) => <input {...props} />}
                                    />
                                    </div>
                                  
                                    <div className='resendotp'>
                                        <span>{formatTime(seconds)}</span>
                                        <button>Resend OTP</button>
                                    </div>
                                </div>
                           
                                
                                <div className="col-lg-12 d-flex justify-content-end" >
                                <div className=" btn-box">
                                    <button type='button' className='btn'>Submit </button>
                                    <svg className='box-1' xmlns="http://www.w3.org/2000/svg" width="27" height="10" viewBox="0 0 27 10" fill="none">
                                        <path d="M27 9.999C19.4 1.999 8.5 0.665665 4 0.998998H0.5V9.999H27Z" fill="#F6821F"/>
                                    </svg>
                                    <svg className='box-2' xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                        <path d="M16 26C15.2 14 5 3.66667 0 0H43.5L43 42C35 31.5 21.5 27 16 26Z" fill="#F6821F"/>
                                    </svg>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
                </form>
               </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Studentregistration