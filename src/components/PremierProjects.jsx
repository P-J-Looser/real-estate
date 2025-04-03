import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaMapMarkerAlt, FaRegStar, FaCheckCircle } from "react-icons/fa";
import image_1 from "../assets/frontend_assets/hero-image-1.png";
import image_2 from "../assets/frontend_assets/hero-image.jpeg";

const projects = [
  {
    id: 1,
    type: "premier",
    name: "Royal Heights",
    image: image_1,
    description:
      "A luxurious gated community with top-notch amenities and security.",
    features: [
      { icon: <FaRegStar />, text: "Starts From $500,000" },
      { icon: <FaMapMarkerAlt />, text: "Prime Location" },
      { icon: <FaCheckCircle />, text: "Exclusive Investment" },
    ],
  },
  {
    id: 2,
    type: "premier",
    name: "Elite Residency",
    image: image_2,
    description: "Ultra-modern apartments with premium facilities.",
    features: [
      { icon: <FaRegStar />, text: "Starts From $700,000" },
      { icon: <FaMapMarkerAlt />, text: "Heart of the City" },
      { icon: <FaCheckCircle />, text: "Trusted Developer" },
    ],
  },
];

const PremierProjects = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gold-500">
          Premier Projects
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ el: ".custom-pagination", clickable: true }} // Custom Pagination
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="!flex flex-col md:flex-row items-center bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              {/* Left - Project Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Right - Project Info */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
                    {project.name}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
                <div className="mt-4">
                  {project.features.map((feature, index) => (
                    <p
                      key={index}
                      className="flex items-center gap-2 text-gray-200 mb-1"
                    >
                      {feature.icon} {feature.text}
                    </p>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
           <div className="custom-pagination mt-4 flex justify-center"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default PremierProjects;
