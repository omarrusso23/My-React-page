import React from "react";
import { Typewriter } from "../../Animations/Typewriter";
import "./ExperiencePage.css";

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Elastacloud",
      duration: "April 2023 - April 2024",
      location: "Remote",
      responsibilities: [
        "Developed and maintained web applications using C#, .NET, React, Blazor, and Azure.",
        "Improved the overall performance of applications by optimizing backend processes and frontend components.",
        "Developed user-centric features in React, reducing load time by 15%.",
        "Improved performance through database optimization and efficient API integration.",
        "Collaborated with cross-functional teams to ensure timely project delivery.",
      ],
    },
    {
      title: "React and Java Developer",
      company: "Solera",
      duration: "August 2022 - November 2022",
      location: "On-Site",
      responsibilities: [
        "Built responsive and dynamic web applications using JavaScript, HTML, and CSS.",
        "Collaborated with the UI/UX team to enhance user interfaces and experiences.",
        "Built dynamic components using Java and React, ensuring seamless integration.",
        "Collaborated with front-end and back-end teams to ensure consistency in development.",
        "Enhanced application performance through clean code and best practices.",
      ],
    },
    {
      title: "Developer Intern",
      company: "Mulhacen Software",
      duration: "November 2021 - June 2022",
      location: "Remote",
      responsibilities: [
        "Assisted in the development of a fully functional website using HTML, CSS, PHP, and MySQL.",
        "Worked with senior developers to deliver solutions while learning industry best practices.",
        "Developed and maintained front-end features using HTML and CSS.",
        "Assisted in building backend logic with PHP, improving website efficiency.",
        "Contributed to database design and management with MySQL.",
      ],
    },
    {
      title: "Developer Intern",
      company: "Trevenque",
      duration: "March 2021 - June 2021",
      location: "Remote",
      responsibilities: [
        "Contributed to internal software development projects using 'Multibase.'",
        "Gained experience in real-world software development workflows.",
        "Developed and maintained small-scale applications using Multibase.",
        "Worked with senior developers to debug and optimize existing systems.",
        "Improved internal tools, increasing team productivity.",
      ],
    },
  ];

  return (
    <div className="experience-page">
      <div className="experience-container">
        <h1 className="experience-header">
          <Typewriter text={"EXPERIENCE"} speed={200} />
        </h1>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.duration}</p>
                <p>{exp.location}</p>
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
