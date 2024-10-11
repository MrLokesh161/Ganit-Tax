import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Assets/logo-darked.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      {/* Wrapper div to center the content and make it 80% of the screen width */}
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Company Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-red-600 inline-block pb-1">About Company</h3>
          <p className="text-gray-400 mb-4">
            Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-500 hover:text-red-600">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div className='pl-[40%]'>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-red-600 inline-block pb-1">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-red-600">Business Consulting</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-600">Financial Investment</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-600">Corporate Business</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-600">IT Consulting</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-600">Web Strategy</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-600">Business Development</a>
            </li>
          </ul>
        </div>

        {/* Main and Branch Office Section */}
        <div className='pl-[40%]'>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-red-600 inline-block pb-1">Main Office</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-600 w-4 h-4 mr-2" />
              Delaware: 8 The Green,
            </li>
            <li className="flex items-center">
              Dover, DE 19901,
            </li>
            <li className="flex items-center">
              GA: 6065 Roswell Road, #450,
            </li>
            <li className="flex items-center">
              Atlanta, GA 30328-4011.
            </li>
          </ul>
        </div>

        {/* Contact Section with Logo */}
        <div className="flex flex-col items-start pl-[40%]">
          <img src={Logo} alt="Company Logo" className="w-40 mb-4" />
          <h3 className="text-xl font-bold mb-4 border-b-2 border-red-600 inline-block pb-1">Contact Us</h3>
          <p className="flex items-center text-gray-400 mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-red-600 w-4 h-4 mr-2" />
            hotline@gmail.com
          </p>
          <p className="flex items-center text-gray-400">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-red-600 w-4 h-4 mr-2" />
            +1 (234) 567-8900
          </p>
        </div>
      </div>

      {/* Bottom Section: Line and Copyright Information */}
      <div className="w-4/5 mx-auto border-t border-gray-600 mt-8 pt-4">
        <div className="container mx-auto px-5 flex justify-between items-center">
          <p className="text-gray-400">&copy; 2024 Ganit Tax. All rights reserved.</p>
          <p className="text-gray-400">Developed by Mobifish</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
