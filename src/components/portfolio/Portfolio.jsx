import "./portfolio.scss";

export default function Portfolio() {
  const skills = {
    "Front-End": ["React.js", "Redux", "JavaScript", "HTML", "CSS", "SCSS", "Figma"],
    "Back-End": ["Node.js", "Express.js", "Laravel", "MySQL", "MongoDB"],
    "Tools & DevOps": ["Git", "GitHub", "Docker", "Postman", "REST APIs"],
    "Machine Learning & AI": ["Python", "Scikit-Learn", "XGBoost", "OpenAI API"],
    "Technical Support": ["Troubleshooting", "Debugging", "Performance Optimization", "User Assistance"]
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Skills</h1>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-category" key={category}>
            <h2>{category}</h2>
            <ul>
              {items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
