import React, { useState } from "react";
import logoDark from '../Assets/logo-darked.png'; // Adjust the import path based on your project structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavMenu = ({ activeLink, handleLinkClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="container shadow-md bg-gray-800 w-full overflow-visible mx-auto mt-1 sm:mt-1 md:mt-3  lg:mt-5  xl:mt-6  2xl:mt-7 ">
      <div className="flex items-center py-4 justify-between z-40 bg-gray-800">
        {/* Left side: Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logoDark}
            alt="Logo"
            className="h-20 w-25"
          />
          <div className="flex flex-col">
            <h1 className="font-extrabold text-2xl sm:text-3xl text-white pr-4">GANIT TAX</h1>
            <span className="text-xs sm:text-sm underline text-gray-200">Excellence in Tax Services</span>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block 2xl:hidden flex items-center" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-white text-2xl" />
        </div>

        {/* Center: Navigation Links */}
        <ul className={`hidden 2xl:flex space-x-4 md:space-x-6 lg:space-x-8 font-semibold text-gray-200`}>
          {/* Home Link */}
          <li>
            <a
              href="/"
              className={`relative transition duration-300 ${activeLink === "Home" ? "text-white" : "text-sm sm:text-base"}`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
              <span className="absolute bottom-0 h-0.5 w-0 bg-white transition-all duration-300 transform scale-x-0 hover:w-full hover:scale-x-100"></span>
            </a>
          </li>
          {/* About Us Link */}
          <li>
            <a
              href="/about"
              className={`relative transition duration-300 ${activeLink === "About Us" ? "text-white" : "text-sm sm:text-base"}`}
              onClick={() => handleLinkClick("About Us")}
            >
              About Us
              <span className="absolute bottom-0 h-0.5 w-0 bg-white transition-all duration-300 transform scale-x-0 hover:w-full hover:scale-x-100"></span>
            </a>
          </li>

          {/* Individual Taxes Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen("individual")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <a
              href="/individual-taxes"
              className={`relative transition duration-300 ${activeLink === "Individual Taxes" ? "text-white" : "text-sm sm:text-base"}`}
            >
              Individual Taxes
              <span className="absolute bottom-0 h-0.5 w-0 bg-white transition-all duration-300 transform scale-x-0 hover:w-full hover:scale-x-100"></span>
            </a>
            <ul
              className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
                dropdownOpen === "individual" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <li><a href="/tax-planning" className="block px-4 py-2 hover:bg-gray-200">Tax Planning</a></li>
              <li><a href="/tax-preparation" className="block px-4 py-2 hover:bg-gray-200">Tax Preparation</a></li>
              <li><a href="/itin-assistance" className="block px-4 py-2 hover:bg-gray-200">ITIN Assistance</a></li>
              <li><a href="/fbar-fatca-filing" className="block px-4 py-2 hover:bg-gray-200">FBAR & FATCA Filing</a></li>
              <li><a href="/amendment-filing" className="block px-4 py-2 hover:bg-gray-200">Amendment Filing</a></li>
            </ul>
          </li>

          {/* Business Taxes Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen("business")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <a
              href="/Business-Taxes"
              className={`relative transition duration-300 ${activeLink === "Business Taxes" ? "text-white" : "text-sm sm:text-base"}`}
            >
              Business Taxes
              <span className="absolute bottom-0 h-0.5 w-0 bg-white transition-all duration-300 transform scale-x-0 hover:w-full hover:scale-x-100"></span>
            </a>
            <ul
              className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
                dropdownOpen === "business" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <li><a href="/start-business" className="block px-4 py-2 hover:bg-gray-200">Start a New Business</a></li>
              <li><a href="/audit-assistance" className="block px-4 py-2 hover:bg-gray-200">Audit Assistance</a></li>
              <li><a href="/business-tax-preparation" className="block px-4 py-2 hover:bg-gray-200">Business Tax Preparation</a></li>
              <li><a href="/boir-filing" className="block px-4 py-2 hover:bg-gray-200">BOIR Filing</a></li>
              <li><a href="/other-compliance" className="block px-4 py-2 hover:bg-gray-200">Other Compliance</a></li>
            </ul>
          </li>

          {/* Other Services Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen("other")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <a
              href="/Other-Services"
              className={`relative transition duration-300 ${activeLink === "Other Services" ? "text-white" : "text-sm sm:text-base"}`}
            >
              Other Services
              <span className="absolute bottom-0 h-0.5 w-0 bg-white transition-all duration-300 transform scale-x-0 hover:w-full hover:scale-x-100"></span>
            </a>
            <ul
              className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
                dropdownOpen === "other" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <li><a href="/bookkeeping" className="block px-4 py-2 hover:bg-gray-200">Bookkeeping</a></li>
              <li><a href="/payroll" className="block px-4 py-2 hover:bg-gray-200">Payroll</a></li>
            </ul>
          </li>

          {/* Sales Tax Link */}
          <li>
            <a
              href="/sales-tax"
              className={`relative transition duration-300 ${activeLink === "Sales Tax/Use Tax" ? "text-white" : "text-sm sm:text-base"}`}
              onClick={() => handleLinkClick("Sales Tax/Use Tax")}
            >
              Sales Tax/Use Tax
              <span className="absolute bottom-0 h-0.5 w-0 bg-white transition-all duration-300 transform scale-x-0 hover:w-full hover:scale-x-100"></span>
            </a>
          </li>

          {/* Referrals Link */}
          <li>
            <a
              href="/referrals"
              className={`relative transition duration-300 ${activeLink === "Referrals" ? "text-white" : "text-sm sm:text-base"}`}
              onClick={() => handleLinkClick("Referrals")}
            >
              Referrals
              <span className="absolute bottom-0 h-0.5 w-0 bg-white transition-all duration-300 transform scale-x-0 hover:w-full hover:scale-x-100"></span>
            </a>
          </li>

        </ul>

        {/* Right side: Login/Signup Button */}
        <div className="hidden 2xl:block">
          <a href="/login" className="bg-orange-400 text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded text-gray-900 hover:bg-orange-300">
            Login/Signup
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="2xl:hidden bg-gray-800 p-4 transition-all duration-300">
          <ul className="flex flex-col space-y-4 font-semibold text-gray-200">
            <li>
              <a href="/" onClick={() => { handleLinkClick("Home"); setMobileMenuOpen(false); }} className="text-sm">Home</a>
            </li>
            <li>
              <a href="/about" onClick={() => { handleLinkClick("About Us"); setMobileMenuOpen(false); }} className="text-sm">About Us</a>
            </li>
            <li>
              <a href="/sales-tax" onClick={() => { handleLinkClick("Sales Tax/Use Tax"); setMobileMenuOpen(false); }} className="text-sm">Sales Tax/Use Tax</a>
            </li>
            <li>
              <a href="/referrals" onClick={() => { handleLinkClick("Referrals"); setMobileMenuOpen(false); }} className="text-sm">Referrals</a>
            </li>
            <li>
              <a href="/login" onClick={() => { handleLinkClick("Login/Signup"); setMobileMenuOpen(false); }} className="text-sm">Login/Signup</a>
            </li>
            {/* New Login/Signup Button in Mobile Menu */}
            <li>
              <a href="/login" className="bg-orange-400 text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded text-gray-900 hover:bg-orange-300 w-full text-center" onClick={() => setMobileMenuOpen(false)}>
                Login/Signup
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
