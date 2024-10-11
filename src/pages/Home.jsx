import React, { useState } from 'react';
import NavMenu from '../components/Navmenu';
import Hero from '../components/Hero';
import HeroCard from '../components/HeroCard';
import AboutSection from '../components/HomeAbout';
import HomeService from '../components/HomeService';
import Hometeam from '../components/Hometeam';
import Footer from '../components/Footer';

// ServiceCard component for displaying individual services
const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="font-bold text-xl mb-4">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// HomePage component containing the hero section and service cards
const HomePage = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className=' overflow-hidden '>
      <div className='bg-gray-800 z-10 relative w-[90%] ml-[5%]'>
        <NavMenu activeLink={activeLink} handleLinkClick={handleLinkClick} />
      </div>

      <div className='mt-[-3.3%]'>
        <Hero />
        <HeroCard />
        <AboutSection />
        <HomeService />
        <Hometeam />
        <Footer />
      </div> 
    </div>
  );
};

export default HomePage;
