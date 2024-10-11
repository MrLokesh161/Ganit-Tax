// Navbar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import Hamburger Icon

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false); // Close t  he menu when a link is clicked
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      {/* Combined Top Bar and Navigation */}
      <div className="bg-orange-300 pb-[3%] mb-[-4%] z-20 ">
        {/* Top Bar */}
        <div className="text-gray-900 px-4 py-2 flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto">
          {/* Top Section: Phone, Location, and Email */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-8 text-sm w-full">
            {/* Contact Info */}
            <div className="flex items-center space-x-2">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} className="text-gray-900" /> +1 844-636-7692
              </span>
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-900" /> 123 Main St, City, Country
              </span>
            </div>

            {/* Email */}
            <span className="flex items-center">
              <FontAwesomeIcon icon={faSearch} className="text-gray-900" /> hello@fint.com
            </span>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="flex items-center md:hidden" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-gray-900 text-2xl" />
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <h5>//</h5>
            <a href="#" className="text-gray-900">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-gray-900">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-gray-900">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-gray-900">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="/" onClick={() => handleLinkClick("Home")}>Home</a>
            </li>
            <li>
              <a href="/about" onClick={() => handleLinkClick("About Us")}>About Us</a>
            </li>
            <li>
              <a href="/services" onClick={() => handleLinkClick("Services")}>Services</a>
            </li>
            <li>
              <a href="/contact" onClick={() => handleLinkClick("Contact")}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
