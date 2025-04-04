import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${project.id}`)}
      className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-lg"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.address}</p>
        <p className="text-blue-600 font-bold">{project.price}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
