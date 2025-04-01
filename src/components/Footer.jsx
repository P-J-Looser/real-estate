import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/frontend_assets/logo.jpg"; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      {/* Subscribe Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Get Latest Info</h2>
        <p className="text-gray-400 mb-6">Stay updated with the latest property listings and offers.</p>
        <form className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none md:col-span-2"
          />
          <textarea
            placeholder="Interested Location or Description"
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-6 py-3 rounded-md md:col-span-2"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom Section */}
      <div className="grid md:grid-cols-3 gap-12 mt-12 border-t border-gray-700 pt-8 px-6">
        {/* Left - Company Info */}
        <div>
          <img src={logo} alt="Company Logo" className="w-16 mb-4" />
          <p className="text-gray-400">
            We provide the best real estate services. Find your dream home with us!
          </p>
        </div>

        {/* Middle - Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/properties" className="hover:text-blue-400">Properties</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-400">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right - Get in Touch */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-400">Phone: <span className="text-white">+123 456 7890</span></p>
          <p className="text-gray-400">Email: <span className="text-white">info@example.com</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
