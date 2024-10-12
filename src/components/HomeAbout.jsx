import React, { useEffect, useState, useRef } from "react";
import Particle from './Particle'; // Import the Particle component
import LogoImage from '../Assets/logo-icon.jpeg'; // Your logo image
import sShapeImage from '../Assets/vector/Vector3.png'; // Local image for S-shaped particle
import roundvec from '../Assets/vector/Vector2.png';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const dotSize = 4; // Size of the dotted particles

  const handleScroll = () => {
    const rect = sectionRef.current.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
    setIsVisible(isInView);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-white py-12 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between w-4/5 mx-auto relative mb-[8%] transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Dotted Particles (8x8 Grid) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(8)].map((_, rowIndex) => (
          [...Array(8)].map((_, colIndex) => (
            <Particle
              key={`${rowIndex}-${colIndex}`}
              type="dot"
              size={dotSize}
              position={{ left: `${colIndex * 16}px`, top: `${rowIndex * 16}px` }} // Adjusting position
            />
          ))
        )).flat()} {/* Flattening the array here */}
        
        {/* S-Shaped Particles */}
        <Particle
          type="sShape"
          src={sShapeImage} // Use the S-shaped particle image
          size='50'
          position={{ left: '95%', top: '40%', transform: 'translateX(-50%)' }} // Positioned to the right
        />
        <Particle
          type="sShape"
          src={sShapeImage} // Use the S-shaped particle image
          size='50'
          position={{ left: '95%', top: '38%', transform: 'translateX(-50%)' }} // Positioned to the right
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <div className="text-center mb-6 flex items-center justify-center">
          <hr className="w-32 border-t-4 border-red-600 mx-2" />
          <h1 className="font-extrabold text-red-600 text-xl px-2">ABOUT US</h1>
          <hr className="w-32 border-t-4 border-red-600 mx-2" />
        </div>
        <h2 className="text-4xl font-bold text-green-900 mb-6">
          Your Partner in Tax Solutions and Financial Success
        </h2>
        <p className="text-lg text-gray-600 mb-4 text-justify">
          Ganit Tax Inc is dedicated to providing personalized tax services that enhance your financial strategy and minimize liabilities. Trust us for your tax preparation, planning, and filing needs in today's competitive market.
        </p>
        <ul className="list-none text-lg text-gray-700 space-y-3">
          <li>
            <span className="text-green-700 font-bold text-justify">✔</span> Comprehensive Tax Planning and Preparation
          </li>
          <li>
            <span className="text-green-700 font-bold text-justify">✔</span> Customized Bookkeeping, Payroll, and Accounting Solutions
          </li>
          <li>
            <span className="text-green-700 font-bold text-justify">✔</span> Strategic Management of S-Corp or LLC Tax Decisions
          </li>
          <li>
            <span className="text-green-700 font-bold text-justify">✔</span> Timely and Accurate Financial Reporting
          </li>
        </ul>
        <div className="mt-6">
          <a
            href="#"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div className="lg:w-1/2 relative flex items-center justify-center mt-10 lg:mt-0">
        <video
          src="/aboutvideo.mp4" // Correctly referencing the video
          autoPlay
          muted
          loop
          controls // Adding controls for accessibility
          className="w-[100%] h-[30%] max-w-md rounded-md" // Adjusting width and height of video
        />
        <div className="absolute inset-0 flex ml-[80%] mt-[35%] ">
          {/* Circle with Logo and Circular Text */}
          <div className="relative flex items-center justify-center">
            <img src={LogoImage} alt="Logo" className="w-36 h-26 z-20 sm:w-32 sm:h-26 md:w-36 md:h-26 lg:w-32 lg:h-26" />
            <div className="absolute">
              <svg width="250" height="250" className="spinning-text" viewBox="0 0 300 300">
                <defs>
                  <path id="circlePath" d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0" />
                </defs>
                <text fill="orange" fontSize="16" fontWeight="bold">
                  <textPath href="#circlePath" startOffset="0">
                    Expert Tax Preparation & Accounting Services Since 1991 * Expert Tax Preparation & Accounting Services Since 1991 *
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .spinning-text {
          animation: spin 10s linear infinite; /* Adjust duration for speed */
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
