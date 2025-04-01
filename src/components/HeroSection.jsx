import React from 'react'
import heroImage from "../assets/frontend_assets/hero-image-2.png";

const HeroSection = () => {
  return (
    <section className="relative flex mt-18 flex-col md:flex-row items-center justify-between py-10 px-6 md:px-12 bg-blue-50">
      {/* Left Part - Info */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          RealEstate Pro
        </h1>   
        <p className="text-lg text-gray-600 mb-6">
          "Trust Our Legacy, Your Dream Home Awaits!"
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Properties
          </button>
          <button className="bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Part - Hero Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={heroImage}
          alt="Real Estate"
          className="w-full h-[80vh] object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection