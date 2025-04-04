import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaTimes } from "react-icons/fa";
import image1 from "../assets/frontend_assets/gallery1.jpg";
import image2 from "../assets/frontend_assets/gallery2.jpg";
import image3 from "../assets/frontend_assets/gallery3.jpg";
import image4 from "../assets/frontend_assets/gallery4.jpg";
import image5 from "../assets/frontend_assets/gallery5.jpg";

const images = [image1, image2, image3, image4, image5];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="py-26 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-40 md:h-56 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition"
                onClick={() => setSelectedIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal with Swiper for Sliding Images */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-6 text-white z-10 cursor-pointer text-2xl"
              onClick={() => setSelectedIndex(null)}
            >
              <FaTimes />
            </button>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              initialSlide={selectedIndex}
              className="w-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full max-h-[80vh] object-contain rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
