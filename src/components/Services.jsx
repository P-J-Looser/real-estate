import React from "react";
import { FaHeadset, FaCarSide, FaClipboardCheck, FaMapMarkedAlt } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaHeadset className="text-5xl text-blue-600" />,
    title: "24/7 Support",
    description: "We provide round-the-clock support to assist you at any time.",
  },
  {
    id: 2,
    icon: <FaCarSide className="text-5xl text-green-600" />,
    title: "On-Site Visit Assistance",
    description: "Vehicles are provided for on-site visits. If not available, we assist in arranging transportation.",
  },
  {
    id: 3,
    icon: <FaClipboardCheck className="text-5xl text-yellow-600" />,
    title: "Hassle-Free Registration",
    description: "We ensure a smooth and quick registration process with complete legal support.",
  },
  {
    id: 4,
    icon: <FaMapMarkedAlt className="text-5xl text-red-600" />,
    title: "Approved Layouts",
    description: "All our projects come with government-approved layouts for peace of mind.",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-center gap-6 p-6 bg-white shadow-lg border border-gray-300 rounded-lg max-w-4xl mx-auto ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">{service.icon}</div>

              {/* Text Content */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
