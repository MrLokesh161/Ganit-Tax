import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyLoad from 'react-lazyload';


const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '22%', 
          left: '20%', 
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <ul className="custom-dots" style={{ margin: '0px', padding: '0px' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {/* First Slide */}
        <LazyLoad height={600}>
          <div className="relative w-full h-screen bg-cover bg-center slide1">
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center text-left pl-20 md:pl-20">
              <div className="max-w-4xl mx-auto ml-0 md:ml-[15%]">
                <h4 className="text-white text-xl md:text-2xl font-light border-b-2 border-red-600 inline-block mb-4">
                  Welcome to Ganit Tax Inc
                </h4>
                <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                  Tax Preparation and Advisory Services
                </h1>
                <p className="text-white text-md md:text-lg mb-8 max-w-2xl text-justify">
                  Ganit Tax Inc offers comprehensive tax preparation and planning services for businesses and individuals. With expert advice, we ensure compliance and help you focus on growing your business.
                </p>
                <button className="mt-6 px-6 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </LazyLoad>

        {/* Second Slide */}
        <LazyLoad height={600}>
          <div className="relative w-full h-screen bg-cover bg-center slide2">
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center text-left pl-20 md:pl-20">
              <div className="max-w-4xl mx-auto ml-0 md:ml-[15%]">
                <h4 className="text-white text-xl md:text-2xl font-light border-b-2 border-red-600 inline-block mb-4">
                  Your Tax Experts
                </h4>
                <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                  Expert Financial Solutions
                </h1>
                <p className="text-white text-md md:text-lg mb-8 max-w-2xl">
                  Our skilled team ensures timely and accurate tax filing and business consulting to keep your financials on track.
                </p>
                <button className="mt-6 px-6 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </LazyLoad>

        {/* Fourth Slide: Business Consulting */}
        <LazyLoad height={600}>
          <div className="relative w-full h-screen bg-cover bg-center slide3">
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center text-left pl-20 md:pl-20">
              <div className="max-w-4xl mx-auto ml-0 md:ml-[15%]">
                <h4 className="text-white text-xl md:text-2xl font-light border-b-2 border-red-600 inline-block mb-4">
                  Business Consulting
                </h4>
                <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                  Grow and Scale Your Business
                </h1>
                <p className="text-white text-md md:text-lg mb-8 max-w-2xl">
                  We offer expert business consulting services to help startups and established businesses with tax planning, accounting, and strategic growth.
                </p>
                <button className="mt-6 px-6 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </LazyLoad>
        
        {/* Fifth Slide: Tax Representation */}
        <LazyLoad height={600}>
          <div className="relative w-full h-screen bg-cover bg-center slide4">
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center text-left pl-20 md:pl-20">
              <div className="max-w-4xl mx-auto ml-0 md:ml-[15%]">
                <h4 className="text-white text-xl md:text-2xl font-light border-b-2 border-red-600 inline-block mb-4">
                  Tax Representation
                </h4>
                <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                  Assistance with Audits and Notices
                </h1>
                <p className="text-white text-md md:text-lg mb-8 max-w-2xl">
                  Our experienced team represents you in IRS audits and handles tax notices efficiently, ensuring peace of mind.
                </p>
                <button className="mt-6 px-6 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </LazyLoad>
      </Slider>
      {/* Custom Arrow Components */}
      <style jsx>{`
        @media (max-width: 768px) {
          .custom-dots {
            display: none; 
          }
          .slick-arrow {
            display: block !important; 
          }
          .absolute {
            padding-left: 1rem; 
          }
          .text-4xl {
            font-size: 2rem; 
          }
          .text-5xl {
            font-size: 2.5rem; 
          }
          .text-md {
            font-size: 0.875rem; 
          }
        }
      `}</style>
    </div>
  );
};

/* Custom Arrow Components */
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[17%] bottom-[21%] bg-orange-300 rounded-full p-[0.5%] cursor-pointer z-10"
      onClick={onClick}
    >
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[28%] bottom-[21%] bg-orange-300 rounded-full p-[0.5%] cursor-pointer z-10"
      onClick={onClick}
    >
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
      </svg>
    </div>
  );
};


export default HomeCarousel;
