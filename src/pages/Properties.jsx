import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { FaBuilding, FaRocket, FaTools, FaCheckCircle } from "react-icons/fa";
import project1 from "../assets/frontend_assets/image1.jpg";
import project2 from "../assets/frontend_assets/image2.jpg";
import project3 from "../assets/frontend_assets/image3.jpg";
import project4 from "../assets/frontend_assets/image4.jpg";
import ProjectCard from "../components/ProjectCard";

const categories = [
  { label: "All", icon: <FaBuilding /> },
  { label: "Premier", icon: <FaRocket /> },
  { label: "Ongoing", icon: <FaTools /> },
  { label: "Completed", icon: <FaCheckCircle /> },
];

const allProjects = [
  {
    id: 1,
    category: "Premier",
    image: project1,
    title: "Skyline Heights",
    address: "Downtown City",
    price: "$300,000",
  },
  {
    id: 2,
    category: "Ongoing",
    image: project2,
    title: "Greenwoods Villa",
    address: "Near Park Avenue",
    price: "$250,000",
  },
  {
    id: 3,
    category: "Completed",
    image: project3,
    title: "Oceanview Residency",
    address: "Beachside Road",
    price: "$280,000",
  },
  {
    id: 4,
    category: "Premier",
    image: project4,
    title: "The Platinum Homes",
    address: "Uptown",
    price: "$320,000",
  },
];



const Properties = () => {
  
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCategory = categories[currentIndex].label;
  const [activeCategory, setActiveCategory] = useState("All");
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };
  
  const filteredProjects =
  activeCategory === "All"
  ? allProjects
  : allProjects.filter((project) => project.category === activeCategory);
  
  useEffect(() => {
    setActiveCategory(categories[currentIndex].label);
  }, [currentIndex]);
  
  return (
    <section className="py-28 px-4 bg-gray-50">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full p-3 rounded-md shadow-sm border border-gray-300"
        />
      </div>

      {/* Filter Selector */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <button
          onClick={handlePrev}
          className="p-2 bg-white shadow rounded-full text-xl"
        >
          <FaChevronLeft />
        </button>

        <div
          className={`flex flex-col items-center p-4 bg-blue-50 text-blue-600 rounded-lg transition-all duration-300`}
          onClick={() => setActiveCategory(currentCategory)}
        >
          <div className="text-3xl mb-1">{categories[currentIndex].icon}</div>
          <p className="text-base font-semibold">
            {categories[currentIndex].label}
          </p>
        </div>

        <button
          onClick={handleNext}
          className="p-2 bg-white shadow rounded-full text-xl"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {filteredProjects.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}
      </div>
    </section>
  );
};

export default Properties;
