import React from "react";
import CountUp from "react-countup";
import aboutImage from "../assets/frontend_assets/abouthero.jpeg"; // Replace with your actual image path

const AboutHero = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        
        {/* Left Side - Text and Counters */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Real Estate</h2>
          <p className="text-gray-600 mb-6">
            We specialize in premium real estate services, helping you find your dream property with trust and efficiency.
          </p>

          {/* Counters */}
          <div className="grid grid-cols-3 gap-6">
            {/* Happy Customers */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                <CountUp start={0} end={250} duration={3} />+
              </h3>
              <p className="text-gray-700">Happy Customers</p>
            </div>

            {/* Projects Completed */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                <CountUp start={0} end={50} duration={3} />+
              </h3>
              <p className="text-gray-700">Projects Completed</p>
            </div>

            {/* Ventures */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                <CountUp start={0} end={15} duration={3} />+
              </h3>
              <p className="text-gray-700">Ventures</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
