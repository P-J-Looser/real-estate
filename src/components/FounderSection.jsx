import React from "react";
import founderImage from "../assets/frontend_assets/founder.jpeg"; // Replace with actual image

const FounderSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left - Founder Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Meet Our Founder
          </h2>
          <p className="text-gray-600 text-lg">
            A <b>trusted property investment adviser</b> with over <b>10+ years of experience</b> 
            in real estate, guiding individuals towards the best property investments.
          </p>
          <p className="text-gray-600 text-lg mt-4">
            With a <b>proven track record</b> of successful transactions, strategic insights, 
            and client satisfaction, he ensures a <b>hassle-free property journey</b>.
          </p>
        </div>

        {/* Right - Founder Image & Title */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src={founderImage}
            alt="Founder & CEO"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            Founder & CEO
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
