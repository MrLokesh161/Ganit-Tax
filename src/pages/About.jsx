import React, { useState } from 'react';
import NavMenu from '../components/Navmenu';
import Hero from '../components/About/Hero';



const AboutPage = () => {
  const [activeLink, setActiveLink] = useState("About Us");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="overflow-hidden">
      {/* Navigation Menu */}
      <div className="bg-gray-800 z-10 relative w-full lg:ml-[5%]  lg-w-[90%] md:ml-[0%] md:w-[90%] sm:ml-[0%] sm:w-[100%]">
        <NavMenu activeLink={activeLink} handleLinkClick={handleLinkClick} />
      </div>

      {/* Hero and Content */}
      <div className="mt-[-28.3%] sm:mt-[-12] md:mt-[-9.9%] lg:mt-[-7.6%] xl:mt-[-6%] 2xl:mt-[-3.3%]">
        <Hero />

      </div>

    </div>
  );
};

export default AboutPage;
