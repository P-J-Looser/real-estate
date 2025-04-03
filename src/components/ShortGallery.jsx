import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import img1 from "../assets/frontend_assets/gallery1.jpg";
import img2 from "../assets/frontend_assets/gallery2.jpg";
import img3 from "../assets/frontend_assets/gallery3.jpg";
import img4 from "../assets/frontend_assets/gallery4.jpg";
import img5 from "../assets/frontend_assets/gallery5.jpg";

const images = [img1, img2, img3, img4, img5];

const ShortGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover cursor-pointer rounded-lg shadow-md"
                onClick={() => setSelectedIndex(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal with Slider */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full px-4">
            <button
              className="absolute z-10 top-2 right-2 bg-white p-2 rounded-full text-black"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>
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

export default ShortGallery;
