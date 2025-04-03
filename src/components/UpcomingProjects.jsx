import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaMapMarkerAlt, FaRegStar, FaCheckCircle } from "react-icons/fa";
import image_1 from "../assets/frontend_assets/hero-image.jpeg";
import image_2 from "../assets/frontend_assets/hero-image-2.png";

const projects = [
  {
    id: 1,
    type: "upcoming",
    name: "Skyline Towers",
    image: image_1,
    description:
      "A luxury apartment complex with modern amenities and a great city view.",
    features: [
      { icon: <FaRegStar />, text: "Starts From $250,000" },
      { icon: <FaMapMarkerAlt />, text: "Near Downtown" },
      { icon: <FaCheckCircle />, text: "Best for Future Investment" },
    ],
  },
  {
    id: 2,
    type: "upcoming",
    name: "Greenwood Residency",
    image: image_2,
    description: "An eco-friendly community surrounded by nature and parks.",
    features: [
      { icon: <FaRegStar />, text: "Starts From $180,000" },
      { icon: <FaMapMarkerAlt />, text: "Close to Schools" },
      { icon: <FaCheckCircle />, text: "Trusted Developer" },
    ],
  },
];

const UpcomingProjects = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Upcoming Projects
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} // Custom Arrows
          pagination={{ el: ".custom-pagination", clickable: true }} // Custom Pagination
          className="relative w-full"
        >
          {/* Navigation Arrows */}
          {/* Left Arrow */}
          <button className="custom-prev cursor-pointer absolute left-4 top-[46%] -translate-y-1/2 z-10 p-4 bg-gray-800 text-white rounded-full shadow-lg text-2xl">
            &#10094;
          </button>

          {/* Right Arrow */}
          <button className="custom-next cursor-pointer absolute right-4 top-[46%] -translate-y-1/2 z-10 p-4 bg-gray-800 text-white rounded-full shadow-lg text-2xl">
            &#10095;
          </button>
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="!flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden h-[600px]"
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
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <div className="mt-4">
                  {project.features.map((feature, index) => (
                    <p
                      key={index}
                      className="flex items-center gap-2 text-gray-700 mb-1"
                    >
                      {feature.icon} {feature.text}
                    </p>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Pagination Dots - Place this Outside the Swiper */}
          <div className="custom-pagination mt-4 flex justify-center"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default UpcomingProjects;
