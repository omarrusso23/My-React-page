import React from "react";
import "./ProjectPage.css"; // Your CSS file for styles

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is a brief description of Project One.",
    technologies: "React, Node.js, MongoDB",
    link: "#", // Replace with actual link
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    technologies: "HTML, CSS, JavaScript",
    link: "#", // Replace with actual link
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    technologies: "React, Redux, Express",
    link: "#", // Replace with actual link
  },
  {
    id: 4,
    title: "Project Four",
    description: "This is a brief description of Project Four.",
    technologies: "Vue.js, Firebase",
    link: "#", // Replace with actual link
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3 className="project-title">{project.title}</h3>
    <p className="project-description">{project.description}</p>
    <p className="project-technologies">{project.technologies}</p>
    <a href={project.link} className="project-link">
      View Project
    </a>
  </div>
);

const ProjectPage = () => {
  return (
    <div className="project-page">
      <h1 className="project-header">My Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
