import React, { useState } from "react";
import cardbg from '../Assets/Hero.jpg'; // Correct import for the image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faBalanceScale, faHandshake, faChartLine, faLightbulb } from '@fortawesome/free-solid-svg-icons'; // Import solid icons

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: faBalanceScale, // Icon for Legal Business Activity
      title: "Legal Business Activity",
      description: "We bring the right people together to challenge established thinking and drive transformation.",
      image: cardbg, // Background image for this card on hover
    },
    {
      icon: faHandshake, // Icon for Corporation Partner
      title: "Corporation Partner",
      description: "We bring the right people together to challenge established thinking and drive transformation.",
      image: cardbg, // Background image for this card on hover
    },
    {
      icon: faChartLine, // Icon for Tax Consultant Service
      title: "Tax Consultant Service",
      description: "We bring the right people together to challenge established thinking and drive transformation.",
      image: cardbg, // Background image for this card on hover
    },
    {
      icon: faLightbulb, // Icon for Business Strategy
      title: "Business Strategy",
      description: "We bring the right people together to challenge established thinking and drive transformation.",
      image: cardbg, // Background image for this card on hover
    },
    
  ];

  return (
    <section className="bg-gray-900 py-16">
      {/* Horizontal Line above the title */}
      <div className="text-center mb-6 flex items-center justify-center">
        <hr className="w-32 border-t-4 border-red-600 mx-2" />
        <h1 className="font-extrabold text-red-600 text-xl px-2">SERVICES</h1>
        <hr className="w-32 border-t-4 border-red-600 mx-2" />
      </div>


      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-200">
        Our Business Legal & Tax Consultant Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ backgroundColor: "white" }}
          >
            {/* Background Image with Slower Top-to-Bottom Animation */}
            <div
              className={`absolute inset-0 transition-transform duration-1000 ${
                hoveredIndex === index ? "transform translate-y-0" : "transform -translate-y-full"
              }`}
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Orange Overlay with Slower Bottom-to-Top Animation */}
            <div
              className={`absolute inset-0 bg-orange-500 transition-transform duration-1000 ${
                hoveredIndex === index ? "transform translate-y-0 opacity-90" : "transform translate-y-full opacity-0"
              }`}
            ></div>

            {/* Line (fixed position to the top) */}
            <div className="absolute inset-x-0 top-0 h-1 bg-red-600 z-20"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className={`text-5xl mb-4 transition-colors duration-1000 ${hoveredIndex === index ? "text-white" : "text-red-600"}`}>
                <FontAwesomeIcon icon={service.icon} />
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-semibold mb-4 transition-colors duration-1000 ${
                  hoveredIndex === index ? "text-white" : "text-gray-800"
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`mb-6 transition-colors duration-1000 ${
                  hoveredIndex === index ? "text-white" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>

              {/* Button */}
              <a
                href="#"
                className={`inline-block px-6 py-2 rounded-full transition-colors duration-1000 ${
                  hoveredIndex === index ? "bg-white text-red-600 hover:bg-gray-100" : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
