import React from "react";
import "./SkillPage.css"; // Your CSS file for styles
import { Typewriter } from "../../Animations/Typewriter";

const skills = [
    {
      category: "LANGUAGES",
      items: [
        { name: "C#", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Java", level: 50 },
      ],
    },
    {
      category: "FRAMEWORKS",
      items: [
        { name: "React", level: 85 },
        { name: "Blazor", level: 60 },
        { name: ".NET", level: 80 },
      ],
    },
    {
      category: "TECHNOLOGIES",
      items: [
        { name: "Azure", level: 70 },
        { name: "Git", level: 80 },
      ],
    },
    {
      category: "SOFT SKILLS",
      items: [
        { name: "Critical Thinking", level: 85 },
        { name: "Problem-Solving", level: 90 },
        { name: "Teamwork & Collaboration", level: 90 },
        { name: "Adaptability", level: 80 },
        { name: "Communication Skills", level: 85 },
      ],
    },
  ];
  
  
const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <h3 className="skill-name">{skill.name}</h3>
    <div className="skill-bar">
      <div
        className="skill-progress"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
    <p className="skill-level">{skill.level}%</p>
  </div>
);

const SkillCategory = ({ category }) => (
  <div className="skill-category">
    <h2 className="category-title">{category.category}</h2>
    <div className="skill-grid">
      {category.items.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const SkillPage = () => {
  return (
    <div className="skill-page">
      <div className="skill-page-container">
        <h1 className="skill-header">
          <Typewriter text={"SKILLS"} speed={200} />
        </h1>
        <div className="skill-container">
          {skills.map((category) => (
            <SkillCategory key={category.category} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
