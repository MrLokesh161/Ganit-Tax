import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faHandshake, faChartLine, faLightbulb, faFileAlt, faUsersCog, faCalculator } from '@fortawesome/free-solid-svg-icons';
import cardbg1 from '../Assets/Service Card/1.png';
import cardbg2 from '../Assets/Service Card/2.jpg';
import cardbg3 from '../Assets/Service Card/3.jpg';
import cardbg4 from '../Assets/Service Card/4.jpg';
import cardbg5 from '../Assets/Service Card/5.jpg';
import cardbg6 from '../Assets/Service Card/6.jpg';
import cardbg7 from '../Assets/Service Card/7.jpg';
import cardbg8 from '../Assets/Service Card/8.jpg';



const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const services = [
    {
      icon: faBalanceScale,
      title: "Tax Preparation",
      description: "Comprehensive tax preparation services that minimize your tax liability while ensuring compliance with all regulations.",
      backgroundImage: cardbg1, // Set your background image path here
    },
    {
      icon: faHandshake,
      title: "Business Consulting",
      description: "Expert guidance to help you navigate your business challenges and streamline operations for maximum efficiency.",
      backgroundImage: cardbg2,
    },
    {
      icon: faChartLine,
      title: "Tax Planning",
      description: "Strategic tax planning services designed to optimize your financial outcomes and promote business growth.",
      backgroundImage: cardbg3,
    },
    {
      icon: faLightbulb,
      title: "Payroll Services",
      description: "Reliable payroll processing solutions that ensure timely payment and compliance with tax obligations.",
      backgroundImage: cardbg4,
    },
    {
      icon: faFileAlt,
      title: "ITIN Processing",
      description: "Assistance with obtaining an Individual Taxpayer Identification Number (ITIN) for individuals who need to file taxes in the U.S.",
      backgroundImage: cardbg5,
    },
    {
      icon: faUsersCog,
      title: "Estate & Succession Planning",
      description: "Guidance on managing your estate and planning for the transfer of wealth to future generations.",
      backgroundImage: cardbg6,
    },
    {
      icon: faCalculator,
      title: "Sales & Use Tax Filing",
      description: "Expert services for filing sales and use taxes, ensuring compliance with state and local regulations.",
      backgroundImage: cardbg7,
    },
    {
      icon: faChartLine,
      title: "Financial Analysis & Forecasting",
      description: "In-depth financial analysis and forecasting to help businesses make informed decisions for growth and stability.",
      backgroundImage: cardbg8,
    },
  ];

  const createParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  };

  useEffect(() => {
    createParticles();

    const handleScroll = () => {
      const section = sectionRef.current;
      const { top, bottom } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the section is in view
      if (top < windowHeight && bottom > 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-gray-900 py-[8%] relative" ref={sectionRef}>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        className="absolute top-0 left-0 z-0"
        style={{ pointerEvents: "none" }} // Prevents mouse events on canvas
      />
      <div className="text-center mb-6 flex items-center justify-center">
        <hr className="w-32 border-t-4 border-red-600 mx-2" />
        <h1 className="font-extrabold text-red-600 text-xl px-2">SERVICES</h1>
        <hr className="w-32 border-t-4 border-red-600 mx-2" />
      </div>

      <h2 className="text-4xl font-bold text-center mb-12 text-gray-200">
        Our Business Legal & Tax Consultant Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 relative z-10">
  {services.map((service, index) => (
    <div
      key={index}
      className={`relative bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-opacity duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDelay: `${index * 100}ms` }} // Adjust delay for staggered effect
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `url(${service.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className={`absolute inset-0 bg-orange-500 transition-transform duration-500 ${hoveredIndex === index ? "transform translate-y-0 opacity-90" : "transform translate-y-full opacity-0"}`}></div>

      <div className="absolute inset-x-0 top-0 h-1 bg-red-600 z-20"></div>

      <div className="relative z-10">
        <div className={`text-5xl mb-4 transition-colors duration-500 ${hoveredIndex === index ? "text-white" : "text-red-600"}`}>
          <FontAwesomeIcon icon={service.icon} />
        </div>
        <h3 className={`text-xl font-semibold text-justify mb-4 transition-colors duration-500 ${hoveredIndex === index ? "text-white" : "text-gray-800"}`}>
          {service.title}
        </h3>
        <p className={`mb-6 transition-colors text-justify duration-500 ${hoveredIndex === index ? "text-white" : "text-gray-600"}`}>
          {service.description}
        </p>
        {/* Changed href to button */}
        <button
          className={`inline-block px-6 py-2 rounded-full transition-colors duration-500 ${hoveredIndex === index ? "bg-white text-red-600 hover:bg-gray-100" : "bg-red-600 text-white hover:bg-red-700"}`}
          onClick={() => {/* handle action here */}} // Implement the desired action
        >
          Learn More
        </button>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default ServicesSection;
