import React from 'react';
import { FaHandshake, FaUserTie, FaLifeRing, FaChartPie } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import cardcity from '../Assets/cardborder.png'; // Correct import for the image

const HeroCard = () => {
  const services = [
    {
      title: "Trusted Service",
      description: "Tailored tax planning solutions for individuals and businesses, ensuring compliance with the latest tax regulations and peace of mind throughout the process.",
      icon: <FaHandshake className="text-4xl text-red-600 mx-auto" />,
      backgroundImage: cardcity, // Correctly assigning the image
    },
    {
      title: "Expert Guidance",
      description: "Licensed tax experts provide professional guidance to navigate even the most complex tax issues, turning tax codes into actionable insights for financial benefit.",
      icon: <FaUserTie className="text-4xl text-red-600 mx-auto" />,
      backgroundImage: cardcity, // Assigning the image to the other cards
    },
    {
      title: "Dedicated Support",
      description: "Available 24/7, we provide personalized assistance, ensuring the best possible solutions for your financial needs, from tax filing to financial planning.",
      icon: <FaLifeRing className="text-4xl text-red-600 mx-auto" />,
      backgroundImage: cardcity,
    },
    {
      title: "Strategic Insights",
      description: "Using innovative strategies and technology, we help you optimize your financial standing, from maximizing deductions to minimizing liabilities for long-term growth.",
      icon: <FaChartPie className="text-4xl text-red-600 mx-auto" />,
      backgroundImage: cardcity,
    }
  ];

  return (
    <div className="py-12 mt-[-9%]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-6 rounded-lg shadow-2xl transition-transform duration-300 ease-in-out hover:bg-orange-500 hover:text-white transform hover:scale-105 overflow-hidden"
            >
              {/* Background Image with reduced opacity */}
              <div
                className="absolute h-[40%] inset-0 opacity-20 bg-cover bg-center transition-opacity duration-300 ease-in-out group-hover:opacity-40"
                style={{
                  backgroundImage: `url(${service.backgroundImage})`
                }}
              />
              
              {/* Orange overlay on hover */}
              <div 
                className="absolute inset-0 bg-orange-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
              />
              
              {/* Flex container for content, box justified */}
              <div className="relative flex flex-col justify-between items-center h-full">
                <div className="flex-grow flex flex-col justify-between text-justify"> 
                  <div className="mb-4 transition-all duration-300 ease-in-out group-hover:text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-6 transition-all duration-300 ease-in-out group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-justify text-gray-600 transition-all duration-300 ease-in-out mb-4 group-hover:text-white">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 relative inline-flex items-center group">
                  <Link to="/about" className="text-white font-bold transition-opacity duration-300 ease-in-out group-hover:opacity-100">Read More</Link>

                  {/* Arrow Animation */}
                  <span className="absolute left-0 text-white font-bold transition-transform duration-300 ease-in-out group-hover:translate-x-20">→</span>
                  {/* Line Animation */}
                  <span className="absolute left-0 bottom-0 h-[2px] bg-white w-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
