import React, { useEffect, useRef } from 'react';
import backgroundImg from '../../Assets/carousel/3.jpg'; // Replace with your actual image path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';

const AboutHero = () => {
  const canvasRef = useRef(null);

  const createParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 80; // Fewer particles for a subtle effect

    // Create particles with softer movement and color
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1, // Smaller size (1-4px)
        speedX: Math.random() * 0.5 - 0.25, // Slower, subtle movement
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.5, // Semi-transparent
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      particles.forEach((particle) => {
        // Draw soft white particles
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`; // Soft white particles with varying opacity
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap particles around when they leave the canvas
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  }, []);

  return (
    <section className="relative w-full h-[600px] flex items-center justify-between bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Stronger Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>

      {/* Breadcrumbs and Text Section */}
      <div className="relative z-10 flex flex-col max-w-[50%] ml-[10%] sm:ml-[50%] 2xl:ml-[10%] md:ml-50% mx-auto">
        <h1 className="text-6xl font-extrabold text-white mb-6 drop-shadow-lg">About Us</h1>
        <div className="text-white mb-4">
          <a href="/" className="text-gray-300 hover:text-gray-100 transition-all duration-300">
            Homepage
          </a>
          <span className="text-red-600 mx-2"> &gt; </span>
          <span>About Us</span>
        </div>
      </div>

      {/* Stats Section (hidden on mobile) */}
      <div className="relative z-10 hidden md:flex items-center mr-[-20%]">
        <div className="bg-gradient-to-br from-red-500 to-red-700 p-8 rounded-full flex items-center justify-center text-white text-6xl shadow-lg">
          <FontAwesomeIcon icon={faBalanceScale} />
        </div>
        <div className="ml-6 text-white">
          <h2 className="text-6xl font-bold mb-2 drop-shadow-lg">500+</h2>
          <p className="text-xl mb-2">Satisfied Clients</p>
          <p className="text-lg text-gray-300 text-justify w-[50%]">We’ve helped hundreds of businesses and individuals navigate their tax and financial obligations with confidence.</p>
        </div>
      </div>

      {/* Mobile View Adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: 400px; /* Reduced height for mobile */
          }
          .max-w-[50%] {
            max-width: 90%; /* Wider text area */
            margin: 0; /* Centering the content */
          }
          h1 {
            font-size: 3rem; /* Smaller heading size */
          }
          .text-6xl {
            font-size: 2rem; /* Smaller stats number */
          }
          .text-xl {
            font-size: 1.25rem; /* Smaller subheading */
          }
          .ml-6 {
            margin-left: 0; /* No margin for mobile */
            margin-top: 1rem; /* Margin for spacing */
          }
          .mr-[-20%] {
            margin-right: 0; /* Adjusted for mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
