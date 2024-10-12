import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <header>
      <div className="bg-orange-300 pb-[3%] mb-[-4%] z-20 ">
        <div className="text-gray-900 px-4 py-2 flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-8 text-sm w-full">
            <div className="flex items-center space-x-2">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} className="text-gray-900" /> +1 844-636-7692
              </span>
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-900" /> 123 Main St, City, Country
              </span>
            </div>

            <span className="flex items-center">
              <FontAwesomeIcon icon={faSearch} className="text-gray-900" /> hello@fint.com
            </span>
          </div>

          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <h5>//</h5>
            <a href="https://facebook.com" className="text-gray-900" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" className="text-gray-900" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" className="text-gray-900" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://whatsapp.com" className="text-gray-900" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
