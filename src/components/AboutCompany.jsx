import React from "react";
import { FaSmile, FaBuilding, FaChartLine, FaHeadset } from "react-icons/fa";
import companyImage from "../assets/frontend_assets/hero-image-2.png"; // Replace with actual image

const companyDetails = [
  {
    id: 1,
    icon: <FaSmile className="text-5xl text-blue-600" />,
    title: "Happy Customers",
    description: "Over 500+ satisfied customers who have found their dream homes with us.",
  },
  {
    id: 2,
    icon: <FaBuilding className="text-5xl text-green-600" />,
    title: "Projects Completed",
    description: "Successfully delivered 50+ residential and commercial projects across the region.",
  },
  {
    id: 3,
    icon: <FaChartLine className="text-5xl text-yellow-600" />,
    title: "Growing Ventures",
    description: "Expanding into new real estate markets with a strong vision for the future.",
  },
  {
    id: 4,
    icon: <FaHeadset className="text-5xl text-red-600" />,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you.",
  },
];

const AboutCompany = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={companyImage}
            alt="Company"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right - Description Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {companyDetails.map((detail) => (
            <div
              key={detail.id}
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg border border-gray-300 rounded-lg"
            >
              {/* Icon on Top */}
              <div>{detail.icon}</div>

              {/* Title & Description Below Icon */}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {detail.title}
              </h3>
              <p className="text-gray-600 mt-1">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
