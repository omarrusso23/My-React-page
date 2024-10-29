import React from "react";
import codeSharingImage from "../../Assets/code-sharing-web.png";
import toDoListImage from "../../Assets/TodoList.png";
import portafoliImage from "../../Assets/portafolio.png";
import "./ProjectPage.css";
import { Typewriter } from "../../Animations/Typewriter";

const projects = [
  {
    id: 1,
    title: "Code Sharing Web",
    description: "This is a web that allows you to write and compile code from different languages and then let's you share it with your friends or foes.",
    technologies: "React, .Net, PostgreSQL, CSS",
    link: "https://code-snippet-sharing-web.vercel.app/",
    background: codeSharingImage,
    completed: true, // Project is completed
  },
  {
    id: 2,
    title: "To Do List",
    description: "This is a simple To Do list where you can add tasks and cross them when you finish.",
    technologies: "React, CSS, JavaScript",
    link: "https://omarrusso23.github.io/React-ToDo-List/",
    background: toDoListImage,
    completed: true, // Project is completed
  },
  {
    id: 3,
    title: "Is this Inception?",
    description: "This is my portfolio, the same as you are reading this from, just in case you want to take a peek under the hood.",
    technologies: "React, CSS, JavaScript",
    link: "#",
    background: portafoliImage,
    completed: true, // Project is completed
  },
  {
    id: 4,
    title: "Upcoming Project",
    description: "This is a top-secret project that is being worked on.",
    technologies: "shhhhh don't say anything",
    link: "#",
    background: "",
    completed: false, // Project is not completed
  },
];

const ProjectCard = ({ project }) => (
  <div
    className="project-card"
    style={{ backgroundImage: `url(${project.background})` }}
  >
    <h3 className="project-title">{project.title}</h3>
    <p className="project-description">{project.description}</p>
    <p className="project-technologies">{project.technologies}</p>
    {project.completed ? (
      <a href={project.link} className="project-link">
        View Project
      </a>
    ) : null}
  </div>
);

const ProjectPage = () => {
  return (
    <div className="project-page">
      <div className="project-container">
        <h1 className="project-header">
          <Typewriter text="PROJECTS" speed={200}></Typewriter>
        </h1>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
