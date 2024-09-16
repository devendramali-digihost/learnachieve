import React, { useState, useEffect } from 'react';
import "./../../assets/css/home.scss";
import "./../../assets/css/responsive.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {useTypewriter,Cursor} from "react-simple-typewriter"
import img1 from "./../../assets/img/img1.png";
import img2 from "./../../assets/img/img2.png";
import img3 from "./../../assets/img/img3.png";
import slide2 from "./../../assets/img/slide2.png";
import slide3 from "./../../assets/img/slide3.png";
import back2 from "./../../assets/img/back2.png";
import back4 from "./../../assets/img/back4.png";
import about from "./../../assets/img/about.png";
import cat1 from "./../../assets/img/cta1.png";
import cta3 from "./../../assets/img/cta3.png";
import qr from "./../../assets/img/qr.png";
import pre1 from "./../../assets/img/pre1.png";
import mobile from "./../../assets/img/mobile.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { NavItem } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    items: 1,
    smartSpeed: 1000,
  };
  const options1 = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><g clip-path="url(#clip0_328_20969)"><path d="M19.5 0C30.2527 0 39 8.74735 39 19.5C39 30.2526 30.2527 39 19.5 39C8.74735 39 0 30.2526 0 19.5C0 8.74735 8.74735 0 19.5 0ZM13.4761 20.6489L21.6011 28.7738C21.918 29.0907 22.334 29.25 22.75 29.25C23.166 29.25 23.5821 29.0907 23.8989 28.7738C24.5343 28.1385 24.5343 27.1115 23.8989 26.4761L16.9227 19.5L23.8988 12.5239C24.5342 11.8885 24.5342 10.8615 23.8988 10.2262C23.2635 9.5908 22.2365 9.5908 21.6011 10.2262L13.4761 18.3512C12.8407 18.9865 12.8407 20.0135 13.4761 20.6489Z" fill="#C1C1C1"/></g><defs><clipPath id="clip0_328_20969"><rect width="39" height="39" fill="white" transform="matrix(-1 0 0 1 39 0)"/></clipPath></defs></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none"><g clip-path="url(#clip0_328_20965)"><path d="M19.5 0C8.74735 0 0 8.74735 0 19.5C0 30.2526 8.74735 39 19.5 39C30.2526 39 39 30.2526 39 19.5C39 8.74735 30.2526 0 19.5 0ZM25.5239 20.6489L17.3989 28.7738C17.082 29.0907 16.666 29.25 16.25 29.25C15.834 29.25 15.4179 29.0907 15.1011 28.7738C14.4657 28.1385 14.4657 27.1115 15.1011 26.4761L22.0773 19.5L15.1012 12.5239C14.4658 11.8885 14.4658 10.8615 15.1012 10.2262C15.7365 9.5908 16.7635 9.5908 17.3989 10.2262L25.5239 18.3512C26.1593 18.9865 26.1593 20.0135 25.5239 20.6489Z" fill="#F6821F"/></g><defs><clipPath id="clip0_328_20965"> <rect width="39" height="39" fill="white"/> </clipPath> </defs></svg>',
    ],

    responsive: {
      0: {
        items: 1,
        center: false,
      },
      400: {
        items: 1,
        center: false,
      },
      650: {
        items: 1,
        center: false,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };


  return (
    <>
      <div className="wrap">
        <div className="banner-container">
          <OwlCarousel className="owl-theme" {...options} loop margin={10}>
            <div className="item item11">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="containt">
                      <p className="upper">Learn and Achieve</p>
                      <h3>
                        Learn Everyday Any New Skills Online with Top
                        <span className='hignt1'>Instructors.</span>
                      </h3>
                      <p>
                        Learn and Achieve is dedicated to enhancing the
                        educational experience of students across India. We
                        invite you to join us on this remarkable journey to
                        build a brighter future for the next generation.
                      </p>
                      <div className="bnr-btn btn-box">
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
                  </div>
                  <div className="col-lg-6 position-relative">
                    <div className="side-content">
                      <div className="img-box">
                        <div className="img1 item-img">
                          <img src={img1} alt="" />
                          <div className="item">
                            <div className="items item1"></div>
                            <div className="items item2"></div>
                            <div className="items item3"></div>
                            <div className="items item4"></div>
                          </div>
                        </div>
                        <div className="img2 item-img">
                          <img src={img2} alt="" />
                        </div>
                        <div className="img3 item-img">
                          <img src={img3} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="back-img">
                      <div className="back1 back">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="167"
                          height="80"
                          viewBox="0 0 197 104"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_328_20812)">
                            <path
                              d="M141.705 39.8438L155.068 42.4907"
                              stroke="#F6821F"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M155.44 42.3462L185.307 28.9453L162.078 46.3261"
                              stroke="#F6821F"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M141.222 38.4941C159.008 33.0117 176.896 27.8757 194.888 23.0859"
                              stroke="#F6821F"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M162.054 46.765C167.102 46.5996 172.152 46.6102 177.204 46.7968"
                              stroke="#F6821F"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M196.013 23.1875C189.677 31.8904 182.848 40.2233 175.558 48.1452"
                              stroke="#F6821F"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M154.097 43.4297C154.546 48.0464 154.717 52.6859 154.609 57.3232"
                              stroke="#F6821F"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M161.434 46.3828C159.332 50.0991 157.231 53.8157 155.129 57.5325"
                              stroke="#F6821F"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M155.421 57.4915C159.44 53.7045 163.619 50.0979 167.959 46.6719"
                              stroke="#F6821F"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M147.901 50.2488C140.995 56.7033 142.297 65.283 140.813 73.0889C138.46 85.467 126.877 97.7341 108.774 101.827C94.315 105.095 77.5986 102.625 65.4506 96.5637C53.3025 90.5022 45.5113 81.2262 42.1825 71.5C40.7684 67.3646 40.103 63.0694 41.1148 58.8837C43.4177 49.3554 54.3009 41.4089 67.2104 36.6727C70.1685 35.4761 73.3022 34.7704 76.4878 34.5834C79.7898 34.4929 83.3428 35.4315 84.8658 37.3434C86.6243 39.5465 85.1437 42.3906 82.3409 44.0749C79.5381 45.7592 75.7235 46.5155 71.9965 47.0435C51.8643 49.9025 29.14 47.0824 14.4833 37.6551C-0.173449 28.2279 -4.2723 11.7963 7.94505 1"
                              stroke="#F6821F"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-dasharray="9.74 9.74"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_328_20812">
                              <rect
                                width="197"
                                height="104"
                                fill="white"
                                transform="matrix(-1 0 0 1 197 0)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="back2 back">
                        <img src={back2} alt="" />
                      </div>
                      <div className="back3 back">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="59"
                          height="69"
                          viewBox="0 0 59 69"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_328_20943)">
                            <path
                              d="M1.0217 23.2728L27.6297 67.1318C27.8297 67.4548 28.0667 67.8098 28.4387 67.8738C28.7887 67.8846 29.1293 67.7591 29.3887 67.5238C38.5 61.1098 47.583 54.6565 56.6377 48.1638C56.9509 48.0465 57.2278 47.8489 57.4406 47.5908C57.6533 47.3327 57.7944 47.0231 57.8497 46.6933C57.9051 46.3634 57.8726 46.0248 57.7557 45.7114C57.6388 45.398 57.4415 45.1209 57.1837 44.9078C46.3743 29.6883 34.7883 15.0356 22.4717 1.00781L5.2817 13.6208C4.36318 14.1907 3.59226 14.9695 3.0317 15.8938C2.68043 16.7314 2.49925 17.6305 2.4987 18.5388L2.0547 25.2128"
                              stroke="#F6821F"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M3.23 15.3047C6.89197 17.9384 10.2118 21.0178 13.113 24.4717C8.77757 24.1163 4.41427 24.3291 0.134003 25.1047"
                              stroke="#F6821F"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M14.4485 17.6638L21.5645 13.3828"
                              stroke="#F6821F"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M14.9934 30.4405L28.5534 21.1875"
                              stroke="#F6821F"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M21.091 31.8281C23.7886 30.3782 26.2779 28.5701 28.491 26.4531"
                              stroke="#F6821F"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M24.2883 44.5598C28.8783 40.5473 33.9548 37.1281 39.3983 34.3828"
                              stroke="#F6821F"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M31.476 44.7103L39.182 38.7812"
                              stroke="#F6821F"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M33.3303 48.0782L41.1523 42.3672"
                              stroke="#F6821F"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_328_20943">
                              <rect
                                width="58.614"
                                height="68.634"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="back4 back">
                        <img src={back4} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item item22">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="containt">
                      <p className="upper">Learn and Achieve</p>
                      <h3>
                      Start learning <span className='hignt'>Courses</span> Education from.
                      </h3>
                      <p>
                        Learn and Achieve is dedicated to enhancing the
                        educational experience of students across India. We
                        invite you to join us on this remarkable journey to
                        build a brighter future for the next generation.
                      </p>
                      <div className="bnr-btn btn-box">
                        <button type="button" className="btn">
                          Get Started{" "}
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
                  <div className="col-lg-6">
                    <div className="side-content">
                      <div className="img-box">
                      
                        <div className="img4">
                          <img src={slide2} alt="" />
                        </div>
                      
                      </div>
                    </div>
                  </div>
                </div>
           
              </div>
            </div> 
            <div className="item item3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="containt">
                      <p className="upper">Learn and Achieve</p>
                      <h3>
                        <span>Empowering</span> the Next Generation
                      </h3>
                      <p>
                        Learn and Achieve is dedicated to enhancing the
                        educational experience of students across India. We
                        invite you to join us on this remarkable journey to
                        build a brighter future for the next generation.
                      </p>
                      <div className="bnr-btn btn-box">
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
                  </div>
                  <div className="col-lg-6 position-relative">
                    <div className="side-content">
                      <div className="img-box">
                          <img src={slide3} alt="" />
                      </div>
                    </div>
                    <div className="back-img">
                      <div className="back22 back">
                          <img src={back2} alt="" />
                      </div>
                      <div className="back23 back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                          <path d="M33.1803 17.515C34.1516 18.0874 35.0454 18.5825 35.7684 18.9707C35.0466 19.335 34.1574 19.7994 33.1923 20.3384C30.7837 21.6834 27.8174 23.5388 25.8326 25.4946C23.7815 27.5158 21.8418 30.5672 20.4371 33.0494C19.8554 34.0775 19.357 35.0231 18.9715 35.781C18.5617 35.0225 18.0318 34.0728 17.4157 33.039C15.9385 30.5605 13.918 27.5166 11.8353 25.4902C9.88605 23.5936 7.01187 21.7415 4.67944 20.3843C3.72197 19.8272 2.84291 19.3462 2.13679 18.9714C2.84373 18.5726 3.7272 18.0602 4.69083 17.4687C7.0195 16.0394 9.88641 14.1067 11.8406 12.1771C13.8609 10.1821 15.8776 7.23059 17.3674 4.82948C18.0035 3.80424 18.5516 2.86611 18.9722 2.12504C19.3684 2.86587 19.8842 3.80015 20.485 4.81974C21.9023 7.22495 23.8386 10.1839 25.8274 12.1726C27.8161 14.1614 30.7751 16.0977 33.1803 17.515Z" stroke="#004080" stroke-width="2"/>
                        </svg>
                      </div>
                      <div className="back21 back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="197" height="104" viewBox="0 0 197 104" fill="none">
                          <g clip-path="url(#clip0_373_2872)">
                            <path d="M55.2951 39.8438L41.9316 42.4907" stroke="#F6821F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M41.5597 42.3462L11.6934 28.9453L34.9218 46.3261" stroke="#F6821F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M55.7783 38.4941C37.9924 33.0117 20.1037 27.8757 2.11218 23.0859" stroke="#F6821F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M34.9461 46.765C29.8977 46.5996 24.8476 46.6102 19.7959 46.7968" stroke="#F6821F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M0.987305 23.1875C7.32305 31.8904 14.1524 40.2233 21.4419 48.1452" stroke="#F6821F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M42.9034 43.4297C42.4538 48.0464 42.2826 52.6859 42.3908 57.3232" stroke="#F6821F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M35.5663 46.3828C37.6677 50.0991 39.7693 53.8157 41.8712 57.5325" stroke="#F6821F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M41.5787 57.4915C37.5597 53.7045 33.3805 50.0979 29.041 46.6719" stroke="#F6821F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M49.0988 50.2488C56.0046 56.7033 54.7029 65.283 56.1871 73.0889C58.5402 85.467 70.1233 97.7341 88.2255 101.827C102.685 105.095 119.401 102.625 131.549 96.5637C143.698 90.5022 151.489 81.2262 154.818 71.5C156.232 67.3646 156.897 63.0694 155.885 58.8837C153.582 49.3554 142.699 41.4089 129.79 36.6727C126.831 35.4761 123.698 34.7704 120.512 34.5834C117.21 34.4929 113.657 35.4315 112.134 37.3434C110.376 39.5465 111.856 42.3906 114.659 44.0749C117.462 45.7592 121.277 46.5155 125.003 47.0435C145.136 49.9025 167.86 47.0824 182.517 37.6551C197.173 28.2279 201.272 11.7963 189.055 1" stroke="#F6821F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-dasharray="9.74 9.74"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_373_2872">
                              <rect width="197" height="104" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    
                  </div>
                </div>
                
              </div>
            </div>
          </OwlCarousel>
        </div>
        <div className="about" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-content">
                 <img src={about} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <div className="title">
                    <span>Learn about us</span>
                    <h2>Join Us on the Journey</h2>
                    <p>
                      Learn and Achieve is dedicated to enhancing the
                      educational experience of students across India. We invite
                      you to join us on this remarkable journey to build a
                      brighter future for the next generation.
                    </p>
                  </div>
                  <div className="usp">
                    
                    <div className="point">
                      <div className="imgs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_328_20705)">
                            <path
                              d="M32.6606 30.7119C32.6606 31.9684 33.6562 32.9966 34.9 33.0491V34.9028H4.29105C1.98016 34.9028 0.1 33.0227 0.1 30.7118C0.1 28.401 1.98016 26.5209 4.29105 26.5209H5.04506C6.33513 26.5209 7.38444 25.4715 7.38444 24.1815C7.38444 22.9251 6.38892 21.8969 5.14506 21.8443V19.9906H26.6744C28.9853 19.9906 30.8654 21.8708 30.8654 24.1816C30.8654 24.9826 30.6393 25.7315 30.2478 26.3686L30.1542 26.5209H30.333H34.9V28.3746C33.6562 28.4272 32.6606 29.4555 32.6606 30.7119ZM8.7042 21.8422H8.52542L8.61899 21.9946C9.01028 22.6316 9.23611 23.3806 9.23611 24.1815C9.23611 24.9825 9.01021 25.7315 8.61899 26.3685L8.52544 26.5209H8.7042H26.6743C27.9644 26.5209 29.0137 25.4715 29.0137 24.1815C29.0137 22.8916 27.9644 21.8422 26.6743 21.8422H8.7042ZM31.3409 33.0512H31.5196L31.4261 32.8989C31.0348 32.2619 30.8089 31.5128 30.8089 30.7119C30.8089 29.911 31.0348 29.162 31.426 28.5249L31.5196 28.3726H31.3408H26.6743H4.29105C3.00098 28.3726 1.95167 29.422 1.95167 30.7119C1.95167 32.0019 3.00098 33.0512 4.29105 33.0512H31.3409Z"
                              fill="#F6821F"
                              stroke="white"
                              stroke-width="0.2"
                            />
                            <path
                              d="M26.094 7.31526L26.0339 7.34142V7.40694V15.8953C23.2497 16.7303 20.4129 17.2381 17.5001 17.2381C14.587 17.2383 11.7505 16.7303 8.96614 15.8953V7.40694V7.34142L8.90606 7.31526L4.92884 5.58332L17.5 0.10907L30.0712 5.58332L26.094 7.31526ZM24.1088 14.5208L24.1831 14.501V14.4242V8.29992V8.14731L24.0431 8.20824L17.5 11.0575L10.9568 8.20824L10.8169 8.14731V8.29992V14.4242V14.501L10.8911 14.5208C15.2285 15.6748 19.7716 15.6748 24.1088 14.5208ZM17.5399 2.14585L17.5 2.12847L17.4601 2.14585L9.77682 5.49164L9.56627 5.58332L9.77682 5.675L17.4601 9.02072L17.5 9.0381L17.5399 9.02072L25.2232 5.675L25.4337 5.58332L25.2232 5.49164L17.5399 2.14585Z"
                              fill="#F6821F"
                              stroke="white"
                              stroke-width="0.2"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_328_20705">
                              <rect width="35" height="35" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4>Building Strong Educational Foundations</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    </div>
                    <div className="point">
                      <div className="imgs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_328_20712)">
                            <path
                              d="M20.4307 6.82222L20.3416 6.91811L20.4575 6.97886C22.4986 8.04837 23.8941 10.1875 23.8941 12.6465V13.3301C23.8941 13.8411 23.4798 14.2555 22.9688 14.2555H12.0312C11.5202 14.2555 11.1059 13.8411 11.1059 13.3301V12.6465C11.1059 10.1875 12.5014 8.04837 14.5425 6.97886L14.6584 6.91811L14.5693 6.82222C13.9053 6.10748 13.4984 5.15138 13.4984 4.10156C13.4984 1.89519 15.2936 0.1 17.5 0.1C19.7064 0.1 21.5016 1.89519 21.5016 4.10156C21.5016 5.15138 21.0947 6.10748 20.4307 6.82222ZM21.9304 12.4047H22.0383L22.0301 12.2971C21.851 9.95439 19.8878 8.10312 17.5 8.10312C15.1122 8.10312 13.149 9.95439 12.9699 12.2971L12.9617 12.4047H13.0696H21.9304ZM19.6508 4.10156C19.6508 2.91553 18.686 1.95078 17.5 1.95078C16.314 1.95078 15.3492 2.91553 15.3492 4.10156C15.3492 5.28759 16.314 6.25234 17.5 6.25234C18.686 6.25234 19.6508 5.28759 19.6508 4.10156Z"
                              fill="#F6821F"
                              stroke="white"
                              stroke-width="0.2"
                            />
                            <path
                              d="M28.7962 17.4827L28.9477 17.5737V17.397V10.7285C28.9477 8.71061 30.5895 7.06875 32.6074 7.06875C33.8715 7.06875 34.9 8.09729 34.9 9.36133V19.8197C34.9 22.5842 33.6487 25.1425 31.4666 26.8397L30.5017 27.5903C29.3871 28.4571 28.7477 29.7647 28.7477 31.1766V33.9707C28.7477 34.4818 28.3333 34.8961 27.8223 34.8961H19.6191C19.1081 34.8961 18.6938 34.4818 18.6938 33.9707V24.8234C18.6938 22.5465 19.9189 20.4245 21.8908 19.2859L25.0766 17.4467L25.0266 17.3601L25.0766 17.4467C26.2687 16.7584 27.6916 16.8191 28.7962 17.4827ZM26.7969 33.0453H26.8969V32.9453V31.1766C26.8969 29.189 27.7965 27.3497 29.3654 26.1294L30.3303 25.3789C32.058 24.0351 33.0492 22.0085 33.0492 19.8197V9.36133C33.0492 9.11763 32.8511 8.91953 32.6074 8.91953C31.6099 8.91953 30.7984 9.73095 30.7984 10.7285V19.298C30.7984 20.3577 30.2282 21.3455 29.3104 21.8754L26.2342 23.6514L26.2842 23.738L26.2342 23.6514C25.7916 23.9069 25.2257 23.7554 24.9701 23.3127L24.8835 23.3627L24.9701 23.3127C24.7145 22.8701 24.8661 22.3041 25.3088 22.0486L25.2588 21.962L25.3088 22.0486L28.3114 20.315L28.3114 20.315C28.4495 20.2353 28.4998 20.1122 28.5173 20.0467C28.5348 19.9814 28.5528 19.8497 28.4731 19.7116L28.3865 19.7616L28.4731 19.7116C28.2316 19.2932 27.8411 18.9937 27.3746 18.8687L27.3487 18.9653L27.3746 18.8687C26.9082 18.7437 26.4203 18.8079 26.002 19.0494L26.052 19.136L26.002 19.0494L22.8162 20.8887L22.8662 20.9753L22.8162 20.8887C21.4149 21.6978 20.5445 23.2053 20.5445 24.8234V32.9453V33.0453H20.6445H26.7969Z"
                              fill="#F6821F"
                              stroke="white"
                              stroke-width="0.2"
                            />
                            <path
                              d="M6.05234 17.3942V17.5709L6.20383 17.48C6.49391 17.3058 6.81027 17.1711 7.1464 17.081C8.0908 16.8279 9.07672 16.9578 9.92349 17.4467L13.1092 19.2859C15.0811 20.4244 16.3062 22.5465 16.3062 24.8234V33.9707C16.3062 34.4818 15.8919 34.8961 15.3809 34.8961H7.17773C6.66667 34.8961 6.25234 34.4818 6.25234 33.9707V31.1766C6.25234 29.7647 5.61288 28.4572 4.49833 27.5903L3.53344 26.8398L3.47204 26.9187L3.53344 26.8398C1.35129 25.1426 0.1 22.5842 0.1 19.8197V9.36133C0.1 8.09729 1.12854 7.06875 2.39258 7.06875C4.41048 7.06875 6.05234 8.71061 6.05234 10.7285V17.3942ZM8.10312 32.9453V33.0453H8.20312H14.3555H14.3555H14.4555V32.9453V24.8235C14.4555 23.2054 13.5852 21.698 12.1839 20.8888L8.99818 19.0496C8.57988 18.8081 8.09198 18.7438 7.62545 18.8688C7.15884 18.9938 6.76847 19.2934 6.52702 19.7117C6.44729 19.8497 6.46535 19.9815 6.48286 20.0469C6.50036 20.1123 6.55059 20.2354 6.68869 20.3151L9.69121 22.0486C10.1338 22.3041 10.2854 22.8701 10.0299 23.3127C9.77436 23.7553 9.20839 23.907 8.76584 23.6514L8.76582 23.6514L5.68965 21.8754C4.7719 21.3455 4.20156 20.3577 4.20156 19.298V10.7285C4.20156 9.73095 3.39014 8.91953 2.39258 8.91953C2.14888 8.91953 1.95078 9.11763 1.95078 9.36133V19.8197C1.95078 22.0085 2.94195 24.0351 4.66969 25.3789L4.73108 25.3L4.66969 25.3789L5.63458 26.1294C7.20355 27.3497 8.10312 29.189 8.10312 31.1766V32.9453Z"
                              fill="#F6821F"
                              stroke="white"
                              stroke-width="0.2"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_328_20712">
                              <rect width="35" height="35" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4>Empowering the Next Generation</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    </div>
                    <div className="point">
                      <div className="imgs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <path
                            d="M9.50359 13.7109C8.95999 13.7109 8.51921 14.1517 8.51921 14.6953C8.51921 15.2389 8.95999 15.6797 9.50359 15.6797H20.0583C20.6019 15.6797 21.0426 15.2389 21.0426 14.6953C21.0426 14.1517 20.6019 13.7109 20.0583 13.7109H9.50359Z"
                            fill="#F6821F"
                          />
                          <path
                            d="M14.2494 19.2969H9.50359C8.95999 19.2969 8.51921 19.7377 8.51921 20.2813C8.51921 20.8248 8.95999 21.2656 9.50359 21.2656H14.2494C14.793 21.2656 15.2337 20.8248 15.2337 20.2813C15.2337 19.7377 14.793 19.2969 14.2494 19.2969Z"
                            fill="#F6821F"
                          />
                          <path
                            d="M14.1039 31.8281H6.61171C5.00062 31.8281 3.6914 30.5134 3.6914 28.8969V8.95781C3.6914 7.34125 5.00062 6.02656 6.61171 6.02656H8.645V6.27375C8.645 7.70984 9.81312 8.87688 11.2492 8.87688H20.6555C22.0916 8.87688 23.2597 7.70984 23.2597 6.27375V6.02656H25.2831C26.9205 6.02656 28.2023 7.31391 28.2023 8.95781V14.5687C28.2023 15.1123 28.6431 15.5531 29.1867 15.5531C29.7303 15.5531 30.1711 15.1123 30.1711 14.5687V8.95781C30.1711 6.25625 27.9781 4.05781 25.282 4.05781H23.2586V3.80625C23.2586 2.37016 22.0905 1.20312 20.6544 1.20312H11.2481C9.81203 1.20312 8.6439 2.37016 8.6439 3.80625V4.05781H6.61171C3.91562 4.05781 1.72156 6.25625 1.72156 8.95781V28.8969C1.72156 31.5984 3.91562 33.7969 6.61171 33.7969H14.1039C14.6475 33.7969 15.0883 33.3561 15.0883 32.8125C15.0883 32.2689 14.6475 31.8281 14.1039 31.8281ZM10.6148 3.80625C10.6148 3.45625 10.8992 3.17188 11.2492 3.17188H20.6555C21.0055 3.17188 21.2898 3.45625 21.2898 3.80625V6.27266C21.2898 6.62266 21.0055 6.90703 20.6555 6.90703H11.2492C10.8992 6.90703 10.6148 6.62266 10.6148 6.27266V3.80625Z"
                            fill="#F6821F"
                          />
                          <path
                            d="M32.2328 18.9884C30.8853 17.6398 28.5326 17.6387 27.1841 18.9884L18.457 27.7154C18.1759 27.9965 17.9922 28.3531 17.9255 28.7458L17.4464 31.5775C17.3447 32.1845 17.5448 32.8079 17.9801 33.2422C18.34 33.602 18.8267 33.7989 19.3266 33.7989C19.4326 33.7989 19.5376 33.7901 19.6426 33.7726L22.4733 33.2947C22.8659 33.2279 23.2225 33.0442 23.5036 32.7631L32.2306 24.0361C33.623 22.6448 33.623 20.3808 32.2328 18.9884ZM22.1462 31.3544L19.3889 31.9045L19.8505 29.1078L26.1056 22.8526L28.3708 25.1178L22.1462 31.3544ZM30.8394 22.6437L29.7609 23.7244L27.4969 21.4603L28.5764 20.3808C28.8783 20.0789 29.2808 19.9115 29.7073 19.9115C30.1361 19.9115 30.5375 20.0778 30.8394 20.3808C31.4639 21.0053 31.4639 22.0192 30.8394 22.6437Z"
                            fill="#F6821F"
                          />
                        </svg>
                      </div>
                      <h4>भारत SAT: A Path to Success</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    </div>

                    <div className="bnr-btn btn-box">
                      <button type="button" className="btn">
                        learn More
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
          </div>
        </div>
        <div className="usps">
          <div className="container">
            <div className="title text-center">
              <span>USPs</span>
              <h2>What makes us Unique</h2>
            </div>
            <div className="box">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="boxex box1"  data-aos="fade-up"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <div className="cont">
                      <div className="imgs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="67"
                          height="67"
                          viewBox="0 0 67 67"
                          fill="none"
                        >
                          <path
                            d="M64.7743 21.9182L38.0664 8.87121C35.764 7.72001 31.8499 7.72001 29.5475 8.87121L2.22566 21.9182C0.306987 22.8391 0 24.1438 0 24.8346C0 25.5253 0.306987 26.7532 2.22566 27.7509L4.45132 28.8254V41.1049C3.06987 41.6421 2.07216 43.0236 2.07216 44.5585C2.07216 46.0934 3.06987 47.4749 4.37457 48.0121L0.920962 58.9869H10.5911L7.13746 48.0121C8.5189 47.4749 9.43986 46.0934 9.43986 44.5585C9.43986 42.9468 8.44215 41.6421 7.06071 41.1049V30.1301L11.1283 32.1255V48.0889C11.1283 48.3191 11.205 48.5493 11.3585 48.7796C11.7423 49.2401 18.8797 58.9869 33.4616 58.9869C48.0435 58.9869 55.181 49.1633 55.488 48.7796C55.6415 48.5493 55.7182 48.3191 55.7182 48.0889V32.2023L64.7743 27.7509C66.693 26.83 67 25.5253 67 24.8346C66.9232 24.1438 66.693 22.8391 64.7743 21.9182ZM53.2623 47.7051C52.0344 49.2401 45.4341 56.6077 33.4616 56.6077C21.4891 56.6077 14.8889 49.2401 13.6609 47.7051V33.2L29.5475 40.7979C30.6987 41.3351 32.2337 41.6421 33.7686 41.6421C35.3803 41.6421 36.9152 41.3351 38.0664 40.7212L53.2623 33.2767V47.7051ZM63.6999 25.602L54.4903 30.1301C54.1065 30.1301 53.7995 30.2836 53.646 30.5906L36.992 38.649C35.3803 39.4932 32.2337 39.4932 30.5452 38.649L10.0538 28.8254L33.6151 26.0625C34.3058 25.9858 34.7663 25.3718 34.6896 24.7578C34.6128 24.0671 33.9989 23.6066 33.3849 23.6834L6.063 26.9067L3.30011 25.602C2.60939 25.295 2.4559 24.9113 2.4559 24.9113C2.4559 24.8346 2.60939 24.5276 3.30011 24.2206L30.622 11.0969C31.4662 10.7131 32.6174 10.4829 33.7686 10.4829C34.9966 10.4829 36.2245 10.7131 36.992 11.0969L63.6999 24.1438C64.3906 24.4508 64.5441 24.7578 64.5441 24.9113C64.5441 24.9113 64.3139 25.295 63.6999 25.602Z"
                            fill="#00458A"
                          />
                        </svg>
                      </div>
                      <h4>Empowering Students</h4>
                      <p>
                        At Learn and Achieve is dedicated to enhancing the
                        educational experience of students across India.
                      </p>
                    </div>
                    <div className="count">
                      <span>1</span>
                    </div>
                    <div className="side-pop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="43"
                        viewBox="0 0 45 43"
                        fill="none"
                      >
                        <path
                          d="M27.6338 16.3868C28.4568 28.6723 38.8978 39.2479 44.0154 43L0.0154445 43.0158L-4.22401e-06 0.0158106C8.1899 10.7629 22.0055 15.365 27.6338 16.3868Z"
                          fill="#00458A"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="boxex box2"  data-aos="fade-up"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
                    <div className="cont">
                      <div className="imgs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="67"
                          height="67"
                          viewBox="0 0 67 67"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_328_20147)">
                            <path
                              d="M62.0606 15.7378L61.9709 15.8379L62.0606 15.938L66.5543 20.9534C66.8593 21.2939 66.9356 21.7817 66.7493 22.199C66.5628 22.6165 66.1485 22.8852 65.6914 22.8852H50.6427H50.4927V23.0352V34.8125V34.9625H50.6427H58.9283C59.3216 34.9625 59.688 35.162 59.9014 35.4923L66.6644 45.9611C66.9116 46.3439 66.9116 46.8358 66.6644 47.2186L59.9014 57.6874C59.6881 58.0176 59.3217 58.2172 58.9283 58.2172H1.30859C0.668831 58.2172 0.15 57.6984 0.15 57.0586V36.1211C0.15 35.4813 0.668831 34.9625 1.30859 34.9625H9.61214H9.76214V34.8125V30.19V30.081L9.65839 30.0473C8.01149 29.5136 6.81781 27.9647 6.81781 26.1431C6.81781 23.8808 8.65845 22.0401 10.9207 22.0401C13.183 22.0401 15.0238 23.8808 15.0238 26.1431C15.0238 27.9647 13.83 29.5136 12.1831 30.0473L12.0793 30.081V30.19V34.8125V34.9625H12.2293H28.8189H28.9689V34.8125V26.4278V26.3187L28.8651 26.2851C27.2182 25.7514 26.0246 24.2025 26.0246 22.3809C26.0246 20.1186 27.8652 18.2779 30.1275 18.2779C32.3898 18.2779 34.2304 20.1186 34.2304 22.3809C34.2304 24.2025 33.0368 25.7513 31.3898 26.2851L31.2861 26.3188V26.4278V34.8125V34.9625H31.4361H48.0255H48.1755V34.8125V9.94922C48.1755 9.30946 48.6944 8.79063 49.3341 8.79063H65.6914C66.1484 8.79063 66.5628 9.05927 66.7493 9.47672C66.9356 9.89407 66.8593 10.382 66.5543 10.7223L62.0606 15.7378ZM50.6427 11.1078H50.4927V11.2578V20.418V20.568H50.6427H62.7619H63.0977L62.8736 20.3179L59.5524 16.611C59.1582 16.171 59.1582 15.5048 59.5524 15.0648L62.8736 11.3579L63.0977 11.1078H62.7619H50.6427ZM22.7925 55.6686L22.643 55.9H22.9184H39.0092H39.0909L39.1352 55.8314L45.0528 46.6712L45.1054 46.5898L45.0528 46.5084L39.1352 37.3483L39.0909 37.2797H39.0092H22.9184H22.643L22.7925 37.5111L28.2512 45.9611C28.4985 46.3439 28.4985 46.8358 28.2513 47.2186L22.7925 55.6686ZM2.61719 37.2797H2.46719V37.4297V55.75V55.9H2.61719H19.8027H19.8844L19.9287 55.8314L25.8463 46.6712L25.8989 46.5898L25.8463 46.5084L19.9287 37.3483L19.8844 37.2797H19.8027H2.61719ZM64.2594 46.6712L64.312 46.5898L64.2594 46.5084L58.3418 37.3483L58.2975 37.2797H58.2158H42.1249H41.8495L41.9989 37.5111L47.4579 45.9611C47.7051 46.3439 47.7051 46.8358 47.4579 47.2186L41.9991 55.6686L41.8496 55.9H42.1251H58.2158H58.2975L58.3418 55.8314L64.2594 46.6712ZM31.9132 22.3809C31.9132 21.396 31.1123 20.5951 30.1275 20.5951C29.1426 20.5951 28.3417 21.396 28.3417 22.3809C28.3417 23.3657 29.1426 24.1666 30.1275 24.1666C31.1123 24.1666 31.9132 23.3657 31.9132 22.3809ZM12.7066 26.1431C12.7066 25.1582 11.9056 24.3573 10.9207 24.3573C9.93602 24.3573 9.135 25.1582 9.135 26.1431C9.135 27.1279 9.93588 27.9288 10.9207 27.9288C11.9056 27.9288 12.7066 27.1279 12.7066 26.1431Z"
                              fill="#004080"
                              stroke="white"
                              stroke-width="0.3"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_328_20147">
                              <rect width="67" height="67" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4>Charting Your Path</h4>
                      <p>
                        At Learn and Achieve is dedicated to enhancing the
                        educational experience of students across India.
                      </p>
                    </div>
                    <div className="count">
                      <span>2</span>
                    </div>
                    <div className="side-pop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="43"
                        viewBox="0 0 45 43"
                        fill="none"
                      >
                        <path
                          d="M27.6338 16.3868C28.4568 28.6723 38.8978 39.2479 44.0154 43L0.0154445 43.0158L-4.22401e-06 0.0158106C8.1899 10.7629 22.0055 15.365 27.6338 16.3868Z"
                          fill="#F6821F"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="boxex box3"  data-aos="fade-up"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                    <div className="cont">
                      <div className="imgs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="67"
                          height="67"
                          viewBox="0 0 67 67"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_328_20156)">
                            <path
                              d="M50.559 7.32273C50.9895 7.32273 51.3844 7.03719 51.5044 6.60222C51.6486 6.07969 51.342 5.53925 50.8195 5.39504C49.1572 4.93625 47.213 4.65123 45.0411 4.54812C44.4979 4.52103 44.0399 4.94043 44.0142 5.48193C43.9885 6.02342 44.4066 6.48313 44.948 6.50891C48.711 6.68741 50.1424 7.32273 50.559 7.32273Z"
                              fill="#004080"
                            />
                            <path
                              d="M44.948 10.3915C48.711 10.5701 50.1424 11.2054 50.559 11.2054C50.9895 11.2054 51.3844 10.9199 51.5044 10.4849C51.6486 9.96241 51.342 9.42196 50.8195 9.27775C49.1572 8.81896 47.213 8.53395 45.0411 8.43083C44.4979 8.40492 44.0399 8.82328 44.0142 9.36464C43.9885 9.90601 44.4066 10.3657 44.948 10.3915Z"
                              fill="#004080"
                            />
                            <path
                              d="M44.948 14.6649C48.7115 14.8438 50.1423 15.4789 50.559 15.4789C50.9895 15.4789 51.3844 15.1934 51.5044 14.7584C51.6486 14.2359 51.342 13.6954 50.8195 13.5512C49.1576 13.0925 47.2134 12.8075 45.0411 12.7043C44.4979 12.6782 44.0399 13.0967 44.0142 13.6381C43.9885 14.1795 44.4065 14.6393 44.948 14.6649Z"
                              fill="#004080"
                            />
                            <path
                              d="M62.7336 4.54787C60.5616 4.65112 58.6175 4.936 56.9551 5.39479C56.4326 5.539 56.126 6.07945 56.2702 6.60197C56.3902 7.03708 56.7852 7.32248 57.2156 7.32248C57.6394 7.32248 59.0771 6.6865 62.8266 6.50853C63.368 6.48276 63.7861 6.02305 63.7604 5.48155C63.7348 4.94018 63.2753 4.52379 62.7336 4.54787Z"
                              fill="#004080"
                            />
                            <path
                              d="M62.7336 8.43071C60.5616 8.53396 58.6175 8.81884 56.9551 9.27763C56.4326 9.42184 56.126 9.96229 56.2702 10.4848C56.3902 10.9199 56.7852 11.2053 57.2156 11.2053C57.6394 11.2053 59.0771 10.5693 62.8266 10.3914C63.368 10.3656 63.7861 9.90589 63.7604 9.36439C63.7348 8.82316 63.2753 8.40624 62.7336 8.43071Z"
                              fill="#004080"
                            />
                            <path
                              d="M59.6089 13.0029C58.6594 13.1436 57.7666 13.3284 56.9552 13.5523C56.4327 13.6965 56.1261 14.2369 56.2702 14.7594C56.3903 15.1945 56.7852 15.4801 57.2158 15.4801C57.5637 15.4801 57.9738 15.2295 59.8967 14.9446C60.4328 14.8652 60.8032 14.3662 60.7237 13.8299C60.6442 13.2938 60.146 12.9235 59.6089 13.0029Z"
                              fill="#004080"
                            />
                            <path
                              d="M47.4852 61.2252V54.2376C47.4852 50.6171 46.2694 47.0711 44.0546 44.2116V40.7306C44.0546 38.8526 42.5267 37.3246 40.6486 37.3246H31.3992C29.9341 36.2752 30.1474 34.6736 30.1291 34.5912C30.7103 34.2432 31.2703 33.8359 31.8058 33.365C33.5522 31.8299 34.6609 29.6363 34.9256 27.2416C36.2372 27.0884 37.2563 25.9594 37.2507 24.6002L37.243 21.0442C37.2417 20.7498 37.1906 20.4588 37.0944 20.1825C37.1908 19.9086 37.2441 19.6165 37.2441 19.315V13.0467C37.2441 11.3249 35.8436 9.90141 34.122 9.87341C33.9496 9.87066 33.8125 9.73339 33.8097 9.56105C33.7825 7.81722 32.3416 6.39844 30.5975 6.39844H20.7C16.1963 6.39844 12.5324 10.0625 12.5324 14.5662V19.3152C12.5324 19.4599 12.5448 19.6025 12.568 19.742C12.0938 20.3323 11.8299 21.0683 11.8305 21.8408L11.832 23.9905C11.8334 25.7357 13.1749 27.1729 14.8805 27.3265C15.1652 29.7191 16.292 31.9036 18.0514 33.4238C18.3447 33.6773 18.6455 33.9102 18.9521 34.1273C18.9066 34.3766 19.2738 36.1844 17.682 37.3247H8.43245C6.55448 37.3247 5.02644 38.8526 5.02644 40.7307V44.2117C2.81164 47.0711 1.59583 50.6174 1.59583 54.2377V61.2252C0.654297 61.7538 0.0163574 62.7614 0.0163574 63.9158C0.0164883 65.6162 1.3998 66.9995 3.10019 66.9995H45.9808C47.6812 66.9995 49.0645 65.6161 49.0645 63.9157C49.0647 62.7614 48.4267 61.7538 47.4852 61.2252ZM44.0546 47.9145C45.0105 49.8735 45.5223 52.0394 45.5223 54.2376V60.832H44.0546V47.9145ZM14.4952 14.566C14.4952 11.1447 17.2785 8.3612 20.7 8.3612H30.5975C31.276 8.3612 31.8366 8.91303 31.8471 9.59141C31.8665 10.8299 32.8517 11.8158 34.09 11.8359C34.7468 11.8466 35.2813 12.3897 35.2813 13.0466V19.3152C35.2813 20.1562 33.8965 20.2805 33.4372 19.3688C33.4363 19.3671 33.4355 19.3654 33.4346 19.3636C32.9896 18.4714 31.997 18.013 31.0202 18.2489C26.8913 19.2465 23.8423 16.6768 22.3925 15.0562C20.454 12.8895 16.8095 14.1047 16.6673 17.0234C16.6587 17.2018 16.6639 17.0647 16.6664 20.5386L14.9367 19.9364C14.6726 19.8444 14.4952 19.5948 14.4952 19.315V14.566ZM16.7749 26.3334C16.7614 25.8012 16.326 25.377 15.7938 25.377C15.7937 25.377 15.7935 25.377 15.7934 25.377L15.1847 25.3772C15.1844 25.3772 15.1843 25.3772 15.184 25.3772C14.4185 25.3772 13.7955 24.7546 13.7949 23.9891C13.8033 21.7575 13.7716 21.8202 13.821 21.5698C14.2162 21.8035 14.3525 21.7946 16.0615 22.4065C17.3068 22.84 18.6316 21.9182 18.6295 20.5788C18.6273 18.2186 18.6242 17.1997 18.6281 17.1186C18.6842 15.9673 20.1533 15.4971 20.9298 16.3652C22.3945 18.0025 25.234 20.442 29.1454 20.4419C29.8863 20.4419 30.666 20.3543 31.4815 20.1573C31.5622 20.1376 31.6423 20.1709 31.6771 20.2377C31.6777 20.2388 31.6782 20.2398 31.6787 20.2409C32.3433 21.5734 33.8637 22.2384 35.282 21.8507L35.2881 24.6067C35.2896 24.9856 34.9917 25.2952 34.6238 25.2968L34.0004 25.2994C33.4665 25.3016 33.0324 25.7303 33.0233 26.2641C32.9857 28.4693 32.0697 30.5203 30.5101 31.8912C27.1676 34.8293 22.64 34.7949 19.3349 31.9388C17.7639 30.5812 16.8309 28.5383 16.7749 26.3334ZM28.8207 37.3247H20.2604C20.6232 36.6866 20.8455 35.9698 20.9006 35.2253C23.1579 36.1941 25.7131 36.352 28.2071 35.4906C28.2906 36.1398 28.5013 36.7628 28.8207 37.3247ZM3.55885 54.2377C3.55885 52.0396 4.07064 49.8737 5.02657 47.9146V52.6835C5.02657 53.2256 5.466 53.665 6.00802 53.665C6.55003 53.665 6.98946 53.2256 6.98946 52.6835V40.7307C6.98946 39.9349 7.63682 39.2876 8.43258 39.2876H40.6487C41.4445 39.2876 42.0918 39.9349 42.0918 40.7307V60.8321H6.98946V57.273C6.98946 56.731 6.55003 56.2916 6.00802 56.2916C5.466 56.2916 5.02657 56.731 5.02657 57.273V60.8321H3.55885V54.2377ZM45.9808 65.0367H3.10019C2.48214 65.0367 1.97938 64.5338 1.97938 63.9157C1.97938 63.2884 2.4951 62.7949 3.10019 62.7949H45.9808C46.5846 62.7949 47.1017 63.2872 47.1017 63.9158C47.1018 64.5339 46.599 65.0367 45.9808 65.0367Z"
                              fill="#004080"
                            />
                            <path
                              d="M24.5406 55.9567C27.3459 55.9567 29.6284 53.6744 29.6284 50.8691C29.6284 48.0637 27.3461 45.7812 24.5406 45.7812C21.7351 45.7812 19.4528 48.0636 19.4528 50.8691C19.4528 53.6744 21.7352 55.9567 24.5406 55.9567ZM24.5406 47.7441C26.2636 47.7441 27.6655 49.1459 27.6655 50.8691C27.6655 52.5921 26.2637 53.9939 24.5406 53.9939C22.8176 53.9939 21.4157 52.5921 21.4157 50.8691C21.4157 49.146 22.8176 47.7441 24.5406 47.7441Z"
                              fill="#004080"
                            />
                            <path
                              d="M65.0045 0.0046296C58.5159 -0.0941692 55.0981 1.44644 53.9299 2.1129C53.9226 2.11709 53.9135 2.11879 53.9039 2.11814H53.9037C53.894 2.11749 53.884 2.11434 53.8744 2.10885C52.7062 1.44369 49.2902 -0.0937767 42.8074 0.00449874C41.7157 0.020987 40.8276 0.923262 40.8276 2.01581V5.52847C40.8276 6.07049 41.267 6.50991 41.8091 6.50991C42.3511 6.50991 42.7905 6.07049 42.7905 5.52847V2.01581C42.7905 1.98885 42.8109 1.96752 42.837 1.96713C44.8354 1.93742 49.8166 2.05703 52.903 3.8146C52.91 3.81853 52.9172 3.8218 52.9241 3.82572V19.3485C52.9155 19.3449 52.9065 19.3424 52.8978 19.3386C49.5596 17.8579 45.1621 17.6915 42.8377 17.7247C42.8093 17.7239 42.7905 17.7022 42.7905 17.676V10.1178C42.7905 9.57582 42.3511 9.13639 41.8091 9.13639C41.267 9.13639 40.8276 9.57582 40.8276 10.1178V17.676C40.8276 18.8176 41.7685 19.7083 42.8655 19.6872C44.6079 19.6632 48.9943 19.7543 52.1019 21.1328C53.2481 21.6412 54.5775 21.6295 55.7448 21.1171C58.8125 19.7702 63.1256 19.6682 64.8383 19.6859C66.0318 19.6922 66.9835 18.7412 66.9835 17.5653V2.01581C66.9835 0.923262 66.0956 0.020987 65.0045 0.0046296ZM65.0206 17.5654C65.0206 17.6485 64.9593 17.7178 64.8593 17.7233C62.5746 17.6986 58.25 17.8735 54.9557 19.32C54.9331 19.3299 54.9098 19.3369 54.887 19.3462V3.82598C54.8921 3.82311 54.8975 3.82075 54.9026 3.81774C57.9888 2.05703 62.9741 1.93768 64.975 1.96726C65.0001 1.96765 65.0206 1.98937 65.0206 2.01594V17.5654Z"
                              fill="#004080"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_328_20156">
                              <rect width="67" height="67" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h4>Supporting Every Learner</h4>
                      <p>
                        At Learn and Achieve is dedicated to enhancing the
                        educational experience of students across India.
                      </p>
                    </div>
                    <div className="count">
                      <span>3</span>
                    </div>
                    <div className="side-pop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="43"
                        viewBox="0 0 45 43"
                        fill="none"
                      >
                        <path
                          d="M27.6338 16.3868C28.4568 28.6723 38.8978 39.2479 44.0154 43L0.0154445 43.0158L-4.22401e-06 0.0158106C8.1899 10.7629 22.0055 15.365 27.6338 16.3868Z"
                          fill="#8519D9"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="boxex box4"  data-aos="fade-up"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1200">
                    <div className="cont">
                      <div className="imgs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="67"
                          height="67"
                          viewBox="0 0 67 67"
                          fill="none"
                        >
                          <path
                            d="M33.4984 18.6412H33.4974C33.2489 18.6397 33.0125 18.5216 32.8661 18.3173C32.866 18.3172 32.8659 18.317 32.8658 18.3168L32.6957 18.0826L33.4984 18.6412ZM33.4984 18.6412H33.4998C33.7482 18.6412 33.9843 18.5225 34.1316 18.3204L34.1317 18.3203M33.4984 18.6412L34.1317 18.3203M34.1317 18.3203L34.3036 18.0839L34.3037 18.0838M34.1317 18.3203L34.3037 18.0838M34.3037 18.0838C35.6204 16.2707 37.7459 15.1876 39.9886 15.1876H45.2526C45.6841 15.1876 46.0346 14.8387 46.0346 14.4055C46.0346 13.9738 45.6843 13.6234 45.2526 13.6234H39.9886C37.4954 13.6234 35.1218 14.718 33.4998 16.5835C31.8788 14.718 29.5052 13.6234 27.012 13.6234H13.5349C12.0881 13.6234 10.9111 14.8005 10.9111 16.2474V16.8533M34.3037 18.0838L10.9111 16.8533M10.9111 16.8533H7.0853C5.26788 16.8533 3.79005 18.3326 3.79005 20.1498V53.0468C3.79005 54.864 5.26788 56.3433 7.0853 56.3433H12.1405C12.5723 56.3433 12.9226 55.993 12.9226 55.5612C12.9226 55.1295 12.5723 54.7791 12.1405 54.7791H7.0853C6.13152 54.7791 5.3542 54.0019 5.3542 53.0468V20.1498C5.3542 19.1947 6.13152 18.4175 7.0853 18.4175H10.9111V30.2554C10.9111 30.6872 11.2614 31.0375 11.6932 31.0375C12.1247 31.0375 12.4752 30.6872 12.4752 30.2554V16.2474C12.4752 15.6628 12.9515 15.1876 13.5349 15.1876H27.012C29.2546 15.1876 31.3789 16.2707 32.6957 18.0825L10.9111 16.8533Z"
                            fill="#004080"
                            stroke="#004080"
                            stroke-width="0.3"
                          />
                          <path
                            d="M37.5056 56.9948L37.5056 56.9949C36.905 58.6768 35.2957 59.808 33.4978 59.808C31.7038 59.808 30.0944 58.6769 29.494 56.9949C29.0195 55.6648 27.6951 54.7791 26.2062 54.7791H17.5303C17.0971 54.7791 16.7482 55.1297 16.7482 55.5612C16.7482 55.9928 17.0971 56.3433 17.5303 56.3433H26.2062C27.0492 56.3433 27.773 56.8247 28.0218 57.5206C28.8448 59.8244 31.0441 61.3721 33.5016 61.3721C35.9553 61.3721 38.1548 59.8243 38.9775 57.5218C39.2278 56.8245 39.9516 56.3433 40.7933 56.3433H59.9136C61.7321 56.3433 63.2099 54.8641 63.2099 53.0468V20.1498C63.2099 18.3326 61.7321 16.8534 59.9136 16.8534H56.0954V16.2474C56.0954 14.8005 54.9182 13.6234 53.4714 13.6234H50.8141C50.3809 13.6234 50.032 13.974 50.032 14.4055C50.032 14.8385 50.3811 15.1876 50.8141 15.1876H53.4714C54.0559 15.1876 54.5312 15.664 54.5312 16.2474V48.2675H38.165C36.1734 48.2675 34.4511 49.3552 33.5029 50.955C32.5557 49.3552 30.8323 48.2675 28.8419 48.2675H12.4746V34.9808C12.4746 34.5478 12.1255 34.1988 11.6925 34.1988C11.261 34.1988 10.9105 34.5477 10.9105 34.9808V49.0496C10.9105 49.4813 11.2608 49.8317 11.6925 49.8317H28.8419C30.9811 49.8317 32.7208 51.5769 32.7208 53.7219C32.7208 54.1536 33.0711 54.504 33.5028 54.504C33.936 54.504 34.2849 54.1535 34.2849 53.7219C34.2849 51.5769 36.0259 49.8317 38.165 49.8317H55.3133C55.7465 49.8317 56.0954 49.4811 56.0954 49.0496V18.4175H59.9136C60.8685 18.4175 61.6458 19.1948 61.6458 20.1498V53.0468C61.6458 54.0019 60.8685 54.7791 59.9136 54.7791H40.7933C39.3054 54.7791 37.9811 55.6649 37.5056 56.9948Z"
                            fill="#004080"
                            stroke="#004080"
                            stroke-width="0.3"
                          />
                          <path
                            d="M34.2855 45.8725C40.2001 45.4853 44.9319 40.756 45.3254 34.8439H46.7365C47.1682 34.8439 47.5185 34.4935 47.5185 34.0618C47.5185 33.6286 47.168 33.2797 46.7365 33.2797H45.3256C44.9407 27.3686 40.2049 22.6382 34.2855 22.2511V20.8274C34.2855 20.3956 33.935 20.0453 33.5035 20.0453C33.0717 20.0453 32.7214 20.3956 32.7214 20.8274V22.2511C26.8056 22.6407 22.0724 27.3698 21.6875 33.2797H20.2703C19.8388 33.2797 19.4882 33.6286 19.4882 34.0618C19.4882 34.4935 19.8386 34.8439 20.2703 34.8439H21.6877C22.08 40.7535 26.8104 45.4828 32.7214 45.8724V47.2949C32.7214 47.7266 33.0717 48.077 33.5035 48.077C33.935 48.077 34.2855 47.7267 34.2855 47.2949V45.8725ZM43.7594 34.8439C43.3725 39.8922 39.3363 43.9246 34.2855 44.3065V43.4089C34.2855 42.9757 33.9348 42.6268 33.5035 42.6268C33.0719 42.6268 32.7214 42.9757 32.7214 43.4089V44.3064C27.6743 43.9233 23.6406 39.8898 23.2537 34.8439H24.1563C24.5895 34.8439 24.9384 34.4933 24.9384 34.0618C24.9384 33.6287 24.5893 33.2797 24.1563 33.2797H23.2535C23.6331 28.2339 27.6691 24.2002 32.7214 23.8171V24.7146C32.7214 25.1464 33.0717 25.4967 33.5035 25.4967C33.935 25.4967 34.2855 25.1464 34.2855 24.7146V23.817C39.3414 24.1976 43.38 28.2315 43.7596 33.2797H42.8505C42.4175 33.2797 42.0684 33.6287 42.0684 34.0618C42.0684 34.4933 42.4173 34.8439 42.8505 34.8439H43.7594Z"
                            fill="#004080"
                            stroke="#004080"
                            stroke-width="0.3"
                          />
                          <path
                            d="M33.5059 27.7172C30.0049 27.7172 27.1577 30.5602 27.1577 34.0565C27.1577 37.5576 30.0047 40.4046 33.5059 40.4046C37.007 40.4046 39.854 37.5576 39.854 34.0565C39.854 30.5602 37.0068 27.7172 33.5059 27.7172ZM33.5059 38.8404C30.8682 38.8404 28.7219 36.6941 28.7219 34.0565C28.7219 31.4242 30.8679 29.2813 33.5059 29.2813C36.1438 29.2813 38.2899 31.4241 38.2899 34.0565C38.2899 36.6941 36.1435 38.8404 33.5059 38.8404Z"
                            fill="#004080"
                            stroke="#004080"
                            stroke-width="0.3"
                          />
                        </svg>
                      </div>
                      <h4>Aim High</h4>
                      <p>
                        At Learn and Achieve is dedicated to enhancing the
                        educational experience of students across India.
                      </p>
                    </div>
                    <div className="count">
                      <span>4</span>
                    </div>
                    <div className="side-pop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="43"
                        viewBox="0 0 45 43"
                        fill="none"
                      >
                        <path
                          d="M27.6338 16.3868C28.4568 28.6723 38.8978 39.2479 44.0154 43L0.0154445 43.0158L-4.22401e-06 0.0158106C8.1899 10.7629 22.0055 15.365 27.6338 16.3868Z"
                          fill="#007C27"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="package">
          <div className="container">
            <div className="title text-center">
              <h2>Featured Packages</h2>
              <span>
                Learn and Achieve is dedicated to enhancing the educational
                experience of students across India.
              </span>
            </div>
            <div className="box">
              <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3 tab-container"
              >
                <Tab eventKey="home" title="Class 1" className="tabs">
                  <OwlCarousel
                    className="owl-theme"
                    {...options1}
                    loop
                    margin={40}
                  >
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                  </OwlCarousel>
                </Tab>
                <Tab eventKey="class2" title="Class 2" className="tabs">
                  <OwlCarousel
                    className="owl-theme"
                    {...options1}
                    loop
                    margin={40}
                  >
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                  </OwlCarousel>
                </Tab>
                <Tab eventKey="class3" title="Class 3" className="tabs">
                  <OwlCarousel
                    className="owl-theme"
                    {...options1}
                    loop
                    margin={40}
                  >
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                  </OwlCarousel>
                </Tab>
                <Tab eventKey="class4" title="Class 4" className="tabs">
                  <OwlCarousel
                    className="owl-theme"
                    {...options1}
                    loop
                    margin={40}
                  >
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="packbox">
                            <figure>
                              <img src={pre1} alt="" />
                            </figure>
                            <div className="packcontent">
                              <span className="catagary">History</span>
                              <h3>All the skills you need in one place</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. 
                              </p>
                              <ul>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                  >
                                    <g clip-path="url(#clip0_328_20985)">
                                      <path
                                        d="M9 18C13.962 18 18 13.962 18 9C18 4.03801 13.962 0 9 0C4.03796 0 0 4.03801 0 9C0 13.962 4.03801 18 9 18ZM9 1.19998C13.302 1.19998 16.8 4.69797 16.8 9C16.8 13.302 13.302 16.8 9 16.8C4.69797 16.8 1.19998 13.302 1.19998 9C1.19998 4.69797 4.69802 1.19998 9 1.19998Z"
                                        fill="#F6821F"
                                      />
                                      <path
                                        d="M11.6254 11.8696C11.7364 11.9595 11.8684 12.0016 12.0004 12.0016C12.1774 12.0016 12.3514 11.9236 12.4684 11.7766C12.6754 11.5186 12.6333 11.1406 12.3754 10.9336L9.60037 8.71355V4.20155C9.60037 3.87155 9.33038 3.60156 9.00038 3.60156C8.67038 3.60156 8.40039 3.87155 8.40039 4.20155V9.00157C8.40039 9.18459 8.48441 9.35557 8.62539 9.46955L11.6254 11.8696Z"
                                        fill="#F6821F"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_328_20985">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  1hr 15 mins
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.0627 2.48935H13.3438V1.72037C13.3438 1.47158 13.0724 1.35851 12.8236 1.35851H11.4892C11.1726 0.453811 10.381 0.00146443 9.4763 0.00146443C8.58157 -0.0321726 7.76774 0.516453 7.46336 1.35851H6.15156C5.90277 1.35851 5.65398 1.47158 5.65398 1.72037V2.48935H3.93502C2.91639 2.50022 2.08304 3.30378 2.03516 4.32134V17.281C2.03516 18.2762 2.93985 18.9999 3.93502 18.9999H15.0627C16.0579 18.9999 16.9626 18.2762 16.9626 17.281V4.32138C16.9147 3.30378 16.0814 2.50022 15.0627 2.48935ZM6.55862 2.2632H7.80259C8.01974 2.2367 8.19416 2.07151 8.23234 1.85609C8.36628 1.27279 8.87802 0.854079 9.4763 0.838321C10.069 0.856287 10.5731 1.2763 10.6976 1.85609C10.7382 2.07895 10.9241 2.24627 11.15 2.2632H12.4392V4.07259H6.55862V2.2632ZM16.0579 17.2811C16.0579 17.7787 15.5603 18.0953 15.0627 18.0953H3.93502C3.43744 18.0953 2.93985 17.7787 2.93985 17.2811V4.32138C2.986 3.80345 3.4151 3.40357 3.93502 3.39409H5.65393V4.54757C5.67783 4.801 5.89731 4.99057 6.15152 4.97732H12.8236C13.0825 4.99148 13.3088 4.80451 13.3438 4.54757V3.39404H15.0627C15.5826 3.40357 16.0117 3.8034 16.0579 4.32134V17.2811H16.0579Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 10.1098C7.58719 9.93094 7.30554 9.92085 7.12354 10.0872L5.67602 11.4668L5.06536 10.8335C4.8957 10.6547 4.61405 10.6446 4.43206 10.8109C4.25686 10.9945 4.25686 11.2833 4.43206 11.4668L5.35935 12.4167C5.43961 12.5066 5.55554 12.5563 5.67598 12.5525C5.79529 12.5508 5.9091 12.502 5.99261 12.4167L7.75676 10.7431C7.93165 10.5826 7.94334 10.3108 7.78286 10.1359C7.77464 10.1268 7.76594 10.1181 7.75684 10.1098Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 11.0859H9.0461C8.79626 11.0859 8.59375 11.2885 8.59375 11.5383C8.59375 11.7881 8.79626 11.9906 9.0461 11.9906H14.2481C14.4979 11.9906 14.7004 11.7881 14.7004 11.5383C14.7004 11.2885 14.4979 11.0859 14.2481 11.0859Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 6.49259C7.58719 6.31375 7.30554 6.30366 7.12354 6.46999L5.67602 7.84963L5.06536 7.21632C4.8957 7.03749 4.61405 7.0274 4.43206 7.19373C4.25686 7.37728 4.25686 7.66607 4.43206 7.84963L5.35935 8.79956C5.43961 8.88943 5.55554 8.93913 5.67598 8.93528C5.79529 8.93359 5.9091 8.8848 5.99261 8.79956L7.75676 7.12589C7.93165 6.96545 7.94334 6.69359 7.78286 6.51873C7.77464 6.5096 7.76594 6.5009 7.75684 6.49259Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 7.46875H9.0461C8.79626 7.46875 8.59375 7.67127 8.59375 7.9211C8.59375 8.17093 8.79626 8.37344 9.0461 8.37344H14.2481C14.4979 8.37344 14.7004 8.17093 14.7004 7.9211C14.7004 7.67127 14.4979 7.46875 14.2481 7.46875Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M7.75684 13.7269C7.58719 13.5481 7.30554 13.5381 7.12354 13.7043L5.67602 15.084L5.06536 14.4507C4.8957 14.2718 4.61405 14.2618 4.43206 14.4281C4.25686 14.6116 4.25686 14.9004 4.43206 15.084L5.35935 16.0339C5.43961 16.1238 5.55554 16.1735 5.67598 16.1696C5.79529 16.1679 5.9091 16.1192 5.99261 16.0339L7.75676 14.3602C7.93165 14.1998 7.94334 13.9279 7.78286 13.7531C7.77464 13.744 7.76594 13.7353 7.75684 13.7269Z"
                                      fill="#F6821F"
                                    />
                                    <path
                                      d="M14.2481 14.7031H9.0461C8.79626 14.7031 8.59375 14.9056 8.59375 15.1555C8.59375 15.4053 8.79626 15.6078 9.0461 15.6078H14.2481C14.4979 15.6078 14.7004 15.4053 14.7004 15.1555C14.7004 14.9056 14.4979 14.7031 14.2481 14.7031Z"
                                      fill="#F6821F"
                                    />
                                  </svg>
                                  10 Topics
                                </li>
                              </ul>
                              <div className="prise">
                                <div className="rupees">
                                  <span className="r-logo">₹</span>
                                  <h5>299</h5>
                                  <del>₹599</del>
                                </div>
                                <div className=" btn-box">
                                  <button type="button" className="btn">
                                    Buy Now
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
                      </div>
                    </div>
                  </OwlCarousel>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="cta">
          <div className="ctabanner container">
            <div className="row justify-content-center">
              <div className="col-lg-6"  data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h2>Lorem ipsum dolor </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="btn-box text-center">
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
            </div>
          </div>
          <div className="backcta">
            <div className="img1">
              <img src={cat1} alt="" />
            </div>
            <div className="img2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="438"
                height="386"
                viewBox="0 0 40 42"
                fill="none"
              >
                <path
                  d="M16 26C15.2 14 5 3.66667 0 0H43.5L43 42C35 31.5 21.5 27 16 26Z"
                  fill="#F6821F"
                />
              </svg>
            </div>
            <div className="img3">
              <img src={cta3} alt="" />
            </div>
            <div className="img4">
              <svg xmlns="http://www.w3.org/2000/svg" width="199" height="209" viewBox="0 0 199 209" fill="none">
                <path d="M79.2558 79.619C75.293 139.333 24.7674 190.754 0 209H213V0C173.372 52.25 106.5 74.6429 79.2558 79.619Z" fill="#F6821F"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="about-app">
          <div className="container">
            <div className="title text-center">
              <span>Learn about us</span>
              <h2>We can Add a Section for Downloading Our App</h2>
              <p>
                Learn and Achieve is dedicated to enhancing the educational
                experience of <br /> students across India.
              </p>
            </div>
            <div className="bg">
              <div className="row">
                <div className="col-lg-6">
                  <div className="d-flex align-items-center justify-content-around">
                    <div className="img5"  data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                      <img src={mobile} alt="" />
                    </div>
                    <div className="qeimg2" >
                      <h4>Scan The QR to download app</h4>
                      <img src={qr} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="content"  data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <h4>Learn free on the App</h4>
                    <p>
                      Download free lessons and leam any-lime, anywhere from the
                      free courses available on our app
                    </p>
                    <div className="qr">
                      <div className="qeimg">
                        <img src={qr} alt="" />
                      </div>
                      <span>OR</span>
                      <div className="add1 add">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_328_20196)">
                            <path
                              d="M4.08567 9.33594C3.11941 9.33594 2.33608 10.1193 2.33608 11.0855V19.2503C2.33608 20.2165 3.11941 20.9999 4.08567 20.9999C5.05194 20.9999 5.83526 20.2165 5.83526 19.2503V11.0855C5.83526 10.1193 5.05194 9.33594 4.08567 9.33594Z"
                              fill="#4CAF50"
                            />
                            <path
                              d="M23.9138 9.33594C22.9475 9.33594 22.1642 10.1193 22.1642 11.0855V19.2503C22.1642 20.2165 22.9475 20.9999 23.9138 20.9999C24.8801 20.9999 25.6634 20.2165 25.6634 19.2503V11.0855C25.6634 10.1193 24.8801 9.33594 23.9138 9.33594Z"
                              fill="#4CAF50"
                            />
                            <path
                              d="M20.4156 9.33594H7.58531C7.26322 9.33594 7.0021 9.59706 7.0021 9.91915V19.2503C7.00182 20.6362 7.977 21.8307 9.3349 22.1079V26.2486C9.3349 27.2149 10.1182 27.9982 11.0845 27.9982C12.0508 27.9982 12.8341 27.2149 12.8341 26.2486V22.1662H15.1669V26.2486C15.1669 27.2149 15.9502 27.9982 16.9165 27.9982C17.8827 27.9982 18.6661 27.2149 18.6661 26.2486V22.1079C20.024 21.8307 20.9991 20.6362 20.9989 19.2503V9.91915C20.9988 9.59706 20.7377 9.33594 20.4156 9.33594Z"
                              fill="#4CAF50"
                            />
                            <path
                              d="M18.2404 2.42335L19.6622 1.00268C19.8939 0.778895 19.9003 0.409732 19.6765 0.17802C19.4528 -0.0536363 19.0836 -0.0600333 18.8519 0.163696C18.847 0.168398 18.8423 0.173154 18.8376 0.17802L17.1813 1.83434C15.1528 0.953143 12.8495 0.953143 10.8209 1.83434L9.16467 0.176872C8.93302 -0.0469113 8.5638 -0.0404597 8.34002 0.191197C8.12175 0.417222 8.12175 0.775505 8.34002 1.00148L9.76068 2.42329C8.02875 3.56927 6.99146 5.51137 7.00218 7.58808C7.00218 7.91017 7.26331 8.1713 7.5854 8.1713H20.4157C20.7378 8.1713 20.999 7.91017 20.999 7.58808C21.0096 5.51143 19.9723 3.56933 18.2404 2.42335Z"
                              fill="#4CAF50"
                            />
                            <path
                              d="M11.0832 5.8383C11.4053 5.8383 11.6664 5.57719 11.6664 5.25509C11.6664 4.93299 11.4053 4.67188 11.0832 4.67188C10.7611 4.67188 10.5 4.93299 10.5 5.25509C10.5 5.57719 10.7611 5.8383 11.0832 5.8383Z"
                              fill="#FAFAFA"
                            />
                            <path
                              d="M16.9151 5.8383C17.2372 5.8383 17.4984 5.57719 17.4984 5.25509C17.4984 4.93299 17.2372 4.67188 16.9151 4.67188C16.593 4.67188 16.3319 4.93299 16.3319 5.25509C16.3319 5.57719 16.593 5.8383 16.9151 5.8383Z"
                              fill="#FAFAFA"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_328_20196">
                              <rect width="28" height="28" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <div className="play">
                          <p>Get It on</p>
                          <h5>Play Store</h5>
                        </div>
                      </div>
                      <div className="add2 add">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <path
                            d="M18.0918 4.25545C19.1454 3.12752 19.858 1.56155 19.6629 0C18.1451 0.0541679 16.3055 0.890985 15.216 2.01881C14.2393 3.01727 13.3843 4.61301 13.6125 6.14393C15.3062 6.25851 17.0365 5.38154 18.0918 4.25545ZM21.3243 15.0396C21.2919 11.5387 24.096 9.85731 24.2202 9.77606C22.6437 7.39872 20.1886 7.07342 19.3142 7.03674C17.2237 6.81728 15.238 8.30277 14.1766 8.30277C13.1196 8.30277 11.4846 7.06555 9.7507 7.09878C7.47133 7.13633 5.37107 8.46364 4.20041 10.5673C1.83258 14.7992 3.59352 21.0681 5.90084 24.5008C7.02876 26.1812 8.37172 28.0664 10.1353 27.9982C11.8376 27.93 12.4794 26.8659 14.5332 26.8659C16.588 26.8659 17.1632 27.9982 18.9609 27.9641C20.79 27.93 21.9476 26.2513 23.0659 24.5655C24.3599 22.6166 24.8933 20.7298 24.9239 20.6345C24.8846 20.6117 21.3618 19.226 21.3243 15.0396Z"
                            fill="#B7B7B7"
                          />
                        </svg>
                        <div className="play">
                          <p>Get It on</p>
                          <h5>Play Store</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;