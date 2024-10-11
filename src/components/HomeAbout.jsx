import React from "react";
import Particle from './Particle'; // Import the Particle component
import LogoImage from '../Assets/logo-icon.jpeg'; // Your logo image
import sShapeImage from '../Assets/vector/Vector1.png'; // Local image for S-shaped particle

const AboutSection = () => {
  const dotSize = 4; // Size of the dotted particles

  return (
    <section className="bg-white py-12 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between w-4/5 mx-auto relative mb-[6%]">
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
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <div className="text-center mb-6 flex items-center justify-center">
          <hr className="w-32 border-t-4 border-red-600 mx-2" />
          <h1 className="font-extrabold text-red-600 text-xl px-2">ABOUT US</h1>
          <hr className="w-32 border-t-4 border-red-600 mx-2" />
        </div>
        <h2 className="text-4xl font-bold text-green-900 mb-6">
          We’re not your typical CPA firm, we’re an outsourced accounting service
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Tax services that are customized to enhance your financial strategy and minimize tax liabilities. Trust us for tax preparation, planning, and filing needs to thrive in today's competitive market.
        </p>
        <ul className="list-none text-lg text-gray-700 space-y-3">
          <li>
            <span className="text-green-700 font-bold">✔</span> We create a Comprehensive Tax Reduction Plan
          </li>
          <li>
            <span className="text-green-700 font-bold">✔</span> We clean up your Bookkeeping, Payroll, Accounting & Operations
          </li>
          <li>
            <span className="text-green-700 font-bold">✔</span> We proactively manage your S-Corp or LLC salary decisions & tax payments
          </li>
          <li>
            <span className="text-green-700 font-bold">✔</span> We keep your Bookkeeping up-to-date & accurate
          </li>
        </ul>
        <div className="mt-6">
          <a
            href="#"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            More About Us
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div className="lg:w-1/2 relative flex items-center justify-center mt-10 lg:mt-0">
        {/* Reference the video from the public folder */}
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
            {/* Logo in the center */}
            <img src={LogoImage} alt="Logo" className="w-36 h-26 z-20" /> {/* Higher z-index */}
            {/* Outer circle for the text */}
            <div className="absolute">
              <svg width="250" height="250" className="spinning-text" viewBox="0 0 300 300">
                {/* Circle path for the text */}
                <defs>
                  <path id="circlePath" d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0" />
                </defs>
                {/* Circular Text */}
                <text fill="orange" fontSize="16" fontWeight="bold">
                  <textPath href="#circlePath" startOffset="0">
                    Tax Preparation & Accounting Services Since 1991 * Tax Preparation & Accounting Services Since 1991 *
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Keyframes for the spinning effect */
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Applying the spin animation to the specific circular text */
        .spinning-text {
          animation: spin 10s linear infinite; /* Adjust duration for speed */
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
