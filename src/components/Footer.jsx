import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); // Prevent navigation if already on home
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-100 py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img src="/favLogo3.png" alt="Logo" className="w-14 h-12" />
            <span className="text-2xl font-bold">TourAvels</span>
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex space-x-6 mt-2">
          <a href="#" title="Facebook">
            <img src="/fb.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" title="Twitter">
            <img src="/xx.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" title="Instagram">
            <img src="/inst.png" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm mt-4 text-center">
          © 2025 TourAvels. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
