import React from "react";
import { useParams } from "react-router-dom";
import { allProjects } from "../data/projects"; // create this or import from wherever
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = allProjects.find((proj) => proj.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-lg mb-6" />

      {/* Overview + Map */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-2">{project.address}</p>
          <p className="text-blue-700 font-semibold text-lg">{project.price}</p>
          <p className="mt-4 text-gray-700">{project.shortDescription || "This is a short overview of the project including the location benefits, lifestyle, etc."}</p>
        </div>

        <div>
          <MapContainer center={[17.385044, 78.486671]} zoom={13} className="h-64 w-full rounded-lg z-0">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[17.385044, 78.486671]}>
              <Popup>{project.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Description */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Project Description</h3>
        <p className="text-gray-700">
          {project.fullDescription || "This project offers luxury amenities, prime location, sustainable design, and a hassle-free buying process."}
        </p>
      </div>

      {/* Short Gallery */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Gallery</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {project.gallery?.map((img, i) => (
            <img key={i} src={img} alt="Gallery" className="w-full h-40 object-cover rounded-lg" />
          ))}
        </div>
      </div>

      {/* Video Section */}
      {project.video && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Project Video</h3>
          <video src={project.video} controls className="w-full rounded-lg" />
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
