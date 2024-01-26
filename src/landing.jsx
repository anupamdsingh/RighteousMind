// import logo from './logo.svg';
import './App.css';
// import { Inter } from "next/font/google";
import React from 'react';
import WhyUs from './whyUs';
import Service from './service';
import Start from './start';
import Blog from './blog';
import { useRef } from "react";

// import { Link } from 'react-router-dom';


export default function Landing() {
    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();
  
    const scrollHandeler = (elmref) => {
      if (!elmref || !elmref.current) {
        console.error("Invalid element reference");
        return;
      }
  
      console.log(elmref);
      const { offsetTop } = elmref.current;
      console.log(offsetTop);
      if (offsetTop === undefined || offsetTop === null) {
        console.error("Invalid offsetTop");
        return;
      }
  
      try {
        window.scroll({ y: offsetTop });
        console.log("Scrolled");
      } catch (error) {
        console.error(`Error scrolling to ${offsetTop}: ${error.message}`);
      }
    };
  
    return (
        <div>
            <div className="p-10 w-screen h-screen">
                <div className="bg-cover bg-center rounded-2xl w-full h-full" style={{ backgroundImage: 'url("  /back.png")' }}>
                    <nav className="py-6 px-2">
                        <div className="mx-auto px-4">
                            <div className="flex justify-between items-center">
                                <div className="flex-shrink-0">
                                    <a href="/" className="flex items-center text-white text-2xl tracking-widest font-extrabold">
                                        <svg className="mr-2" width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group 33724">
                                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M6.59567e-05 14.1348C0.0224929 7.37183 5.86469 2.54982 12.2657 0.630527C18.1057 -1.12052 24.3042 0.837074 28.0043 5.73805C32.0271 11.0664 33.6753 18.414 29.796 23.8505C25.894 29.3189 18.5153 29.9887 12.1752 27.9213C5.76972 25.8327 -0.022541 20.9522 6.59567e-05 14.1348Z" fill="#1777F7" />
                                                <g id="Group 33723">
                                                    <path id="Ellipse 70" d="M11.6067 9.11316C11.4698 8.54965 10.8976 8.19659 10.3608 8.41616C9.5545 8.74603 8.81388 9.22474 8.1791 9.83038C7.29008 10.6786 6.63999 11.7459 6.29418 12.925C5.94837 14.1041 5.91902 15.3534 6.20908 16.5474C6.49915 17.7415 7.0984 18.8381 7.94662 19.7271C8.79484 20.6162 9.86213 21.2663 11.0412 21.6121C12.2203 21.9579 13.4697 21.9872 14.6637 21.6972C15.8577 21.4071 16.9544 20.8078 17.8434 19.9596C18.4782 19.354 18.9911 18.6367 19.3585 17.8467C19.603 17.3209 19.2772 16.7327 18.7208 16.5695C18.1643 16.4063 17.5902 16.7333 17.3124 17.2424C17.0709 17.6849 16.7615 18.0893 16.3937 18.4402C15.7714 19.034 15.0038 19.4535 14.168 19.6565C13.3321 19.8596 12.4576 19.839 11.6322 19.5969C10.8069 19.3549 10.0598 18.8998 9.46601 18.2775C8.87226 17.6552 8.45278 16.8875 8.24973 16.0517C8.04669 15.2159 8.06723 14.3414 8.3093 13.516C8.55137 12.6906 9.00643 11.9435 9.62875 11.3498C9.99653 10.9989 10.4151 10.7088 10.8684 10.4884C11.39 10.2348 11.7436 9.67667 11.6067 9.11316Z" fill="white" />
                                                    <path id="Ellipse 71" d="M20 20.95C20 21.5299 20.4727 22.0081 21.046 21.9214C22.0589 21.7683 23.0302 21.3941 23.8889 20.8203C25.0401 20.0511 25.9373 18.9579 26.4671 17.6788C26.9969 16.3997 27.1355 14.9922 26.8655 13.6344C26.5954 12.2765 25.9287 11.0292 24.9497 10.0503C23.9707 9.07128 22.7235 8.4046 21.3656 8.1345C20.0077 7.86441 18.6003 8.00303 17.3212 8.53284C16.0421 9.06266 14.9488 9.95986 14.1797 11.111C13.6059 11.9698 13.2316 12.9411 13.0786 13.9539C12.9919 14.5273 13.4701 15 14.05 15C14.6299 15 15.0887 14.5246 15.212 13.958C15.3419 13.3611 15.583 12.7907 15.9258 12.2777C16.4642 11.4719 17.2294 10.8439 18.1248 10.473C19.0202 10.1021 20.0054 10.0051 20.9559 10.1942C21.9064 10.3832 22.7795 10.8499 23.4648 11.5352C24.1501 12.2205 24.6167 13.0936 24.8058 14.0441C24.9949 14.9946 24.8978 15.9798 24.527 16.8751C24.1561 17.7705 23.528 18.5358 22.7222 19.0742C22.2092 19.417 21.6388 19.658 21.042 19.7879C20.4753 19.9112 20 20.3701 20 20.95Z" fill="white" />
                                                    <circle id="Ellipse 74" cx="20.2758" cy="14.4182" r="1" transform="rotate(12.1956 20.2758 14.4182)" fill="white" />
                                                </g>
                                            </g>
                                        </svg>
                                        RighteousMind
                                    </a>
                                </div>
                                <div className="text-base font-bold">
                                    <a
                                        className="text-white hover:text-gray-300 px-3 py-2 rounded-md pr-8"
                                        onClick={() => scrollHandeler(section1)}
                                        href="#why-us"
                                    >
                                        WhyUs
                                    </a>
                                    <a
                                        className="text-white hover:text-gray-300 px-3 py-2 rounded-md pr-8"
                                        onClick={() => scrollHandeler(section2)}
                                        href="#services"
                                    >
                                        Services
                                    </a>
                                    <a
                                        className="text-white hover:text-gray-300 px-3 py-2 rounded-md pr-8"
                                        onClick={() => scrollHandeler(section3)}
                                        href="#start-now"
                                    >
                                        LetsStart
                                    </a>
                                    <a
                                        className="text-white hover:text-gray-300 px-3 py-2 rounded-md pr-8"
                                        onClick={() => scrollHandeler(section4)}
                                        href="#blogs"
                                    >
                                        <b>Blog</b>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </nav>
                    <div>
                        <div className="pt-24 w-780 text-white text-center font-plus-jakarta-sans font-bold text-6xl leading-9">
                            The mind elevating <br /> <br />
                            your digital presence
                        </div>
                        <div className="text-white pt-6 text-center font-plus-jakarta-sans text-lg font-normal leading-9 tracking-tight text-secondary-300">
                            Your one-stop platform for digital needs. <br />
                            Manage all your digital presence with our digital bundle.
                        </div>
                        <div className="text-lg pt-10 flex justify-center">
                            <div className="px-9 mx-auto w-max text-white border border-blue-500 bg-blue-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 focus:ring-4 rounded-full text-primary-0 text-center font-plus-jakarta-sans text-base font-semibold leading-9 py-2">
                                Get Started
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="why-us" ref={section1}><WhyUs /></div>
            <div id="services" ref={section2}><Service /> </div>
            <div id="start-now" ref={section3}><Start /></div>
            <div id="blogs" ref={section4}><Blog /></div>
        </div>
    );
}
