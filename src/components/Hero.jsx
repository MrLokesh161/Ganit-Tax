import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <ul className="custom-dots" style={{ margin: '0px', padding: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="relative w-full h-screen">
      <Slider {...settings}>
        {/* First Slide */}
        <div className="relative w-full h-screen bg-cover bg-center slide1">
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center text-left pl-20">
            <div className="max-w-4xl mx-auto ml-[15%] ">
              <h4 className="text-white text-xl md:text-2xl font-light border-b-2 border-red-600 inline-block mb-4">
                Welcome to Save Tax LLC
              </h4>
              <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
                Planning and Advisory Services
              </h1>
              <p className="text-white text-md md:text-lg mb-8 max-w-2xl">
                Save Tax LLC makes it easy to help clients reach their financial goals. With over 8 years of experience, we provide comprehensive tax planning and advisory services for individuals and businesses.
              </p>
              <button className="mt-6 px-6 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="relative w-full h-screen bg-cover bg-center slide2">
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center text-left pl-20">
            <div className="max-w-4xl mx-auto ml-[15%]">
              <h4 className="text-white text-xl md:text-2xl font-light border-b-2 border-red-600 inline-block mb-4">
                Welcome to Our Expertise
              </h4>
              <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
                Expert Financial Team
              </h1>
              <p className="text-white text-md md:text-lg mb-8 max-w-2xl">
                Our team of experienced financial experts is dedicated to providing exceptional service in tax planning and advisory.
              </p>
              <button className="mt-6 px-6 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

/* Custom Arrow Components */
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[20%] bottom-[21%] bg-orange-300 rounded-full p-2 cursor-pointer z-10"
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
      className="absolute right-[23%] bottom-[21%] bg-orange-300 rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
      </svg>
    </div>
  );
};

export default HomeCarousel;
