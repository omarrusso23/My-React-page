import React from "react";
import "./SkillPage.css"; // Your CSS file for styles

const skills = [
    {
        category: "Languages",
        items: [
            { name: "C#", level: 80 },
            { name: "JavaScript", level: 85 },
            { name: "HTML", level: 95 },
            { name: "CSS", level: 90 },
        ],
    },
    {
        category: "Frameworks",
        items: [
            { name: "React", level: 85 },
            { name: "Blazor", level: 60 },
            { name: ".NET", level: 80 },
        ],
    },
    {
        category: "Tools & Technologies",
        items: [
            { name: "Azure", level: 70 },
            { name: "Git", level: 80 },
        ],
    },
];

const SkillCard = ({ skill }) => (
    <div className="skill-card">
        <h3 className="skill-name">{skill.name}</h3>
        <div className="skill-bar">
            <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
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
            <h1 className="skill-header">My Skills</h1>
            <div className="skill-container">
                {skills.map((category) => (
                    <SkillCategory key={category.category} category={category} />
                ))}
            </div>
        </div>
    );
};

export default SkillPage;
