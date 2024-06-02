import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  // Check if the current location includes '/gogreen'
  const isGoGreenSection = location.pathname.includes('/gogreen');

  // Define classes based on the section
  const footerClasses = isGoGreenSection ? 'bg-green-700 text-gray-300' : 'bg-blue-950 text-gray-300';

  return (
    <>
      <footer className={footerClasses + ' py-4 text-center'}>
        <div className="container mx-auto">
          <p>&copy; 2024 Campus Elevate. All rights reserved.</p>
          <p>Designed and developed by Team "Incredible Corps"</p>
          <div className="mt-4">
            <Link to="/" className="text-gray-300 hover:text-gray-400 mx-2">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-gray-400 mx-2">About</Link>
            <Link to="/services" className="text-gray-300 hover:text-gray-400 mx-2">Services</Link>
            <Link to="/contact" className="text-gray-300 hover:text-gray-400 mx-2">Contact</Link>
          </div>
          <p className="mt-2 text-sm">Contact: campuselevate@gmail.com | Phone: 9123456780</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
