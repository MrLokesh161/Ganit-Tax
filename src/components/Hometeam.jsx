import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import teamMem from '../Assets/team.jpg'; // Replace with the actual image paths

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    email: 'johndoe@example.com',
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    image: teamMem,
  },
  {
    name: 'Jane Smith',
    position: 'CFO',
    email: 'janesmith@example.com',
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    image: teamMem,
  },
  {
    name: 'Michael Johnson',
    position: 'Tax Consultant',
    email: 'michaeljohnson@example.com',
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    image: teamMem,
  },
  {
    name: 'Emily Davis',
    position: 'Senior Accountant',
    email: 'emilydavis@example.com',
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    image: teamMem,
  },
  // Add more team members here as needed
];

const brandColor = '#D32F2F'; // Define your brand color

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );
  
    const currentRef = sectionRef.current; // Copy the ref value to a local variable
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the local variable in the cleanup
      }
    };
  }, []);
  

  const handleMouseEnter = (id) => {
    setHoveredMember(id);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  return (
    <div
      ref={sectionRef}
      className={`container mx-auto my-[6%] p-8 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="text-center mb-6 flex items-center justify-center">
        <hr className="w-32 border-t-4 border-red-600 mx-2" />
        <h1 className="font-extrabold text-red-600 text-xl px-2">MEET OUR TEAM</h1>
        <hr className="w-32 border-t-4 border-red-600 mx-2" />
      </div>
      <h2 className="text-5xl font-bold text-center mb-[5%]">
        Experienced Team Members
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ width: '320px', height: '450px', margin: '0 auto' }} // Increase width and height
          >
            {/* Image with diagonal split effect */}
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
              />
            </div>

            {/* Share button & Social Icons */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <button
                className="text-white p-2 rounded-full transition-colors duration-300"
                style={{ backgroundColor: brandColor }}
              >
                <FontAwesomeIcon icon={faShareAlt} />
              </button>

              {hoveredMember === index && (
                <div className="flex flex-col mt-2 bg-white p-2 rounded-lg shadow-md">
                  <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 hover:scale-110 transition-transform" style={{ color: brandColor }} />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 hover:scale-110 transition-transform" style={{ color: brandColor }} />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 hover:scale-110 transition-transform" style={{ color: brandColor }} />
                  </a>
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 hover:scale-110 transition-transform" style={{ color: brandColor }} />
                  </a>
                </div>
              )}
            </div>

            {/* Member Info */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.position}</p>
              <p className="text-gray-700 text-sm flex justify-center items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                {member.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
