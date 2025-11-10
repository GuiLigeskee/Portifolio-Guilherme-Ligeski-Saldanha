import "./Acquirements.css";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiDotnet,
  SiGithub,
  SiPython,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";

const skills = [
  {
    category: "Linguagens",
    icon: <FaCode />,
    technologies: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "C#", icon: <i className="devicon-csharp-plain"></i> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
  {
    category: "Frontend & Mobile",
    icon: <FaReact />,
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "React Native", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "HTML/CSS", icon: <i className="devicon-html5-plain"></i> },
      {
        name: "Tailwind CSS",
        icon: <i className="devicon-tailwindcss-plain"></i>,
      },
    ],
  },
  {
    category: "Backend & Frameworks",
    icon: <FaServer />,
    technologies: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "NestJs", icon: <i className="devicon-nestjs-plain"></i> },
      { name: "Express", icon: <i className="devicon-express-original"></i> },
      { name: ".NET", icon: <SiDotnet /> },
      { name: "ASP.NET", icon: <SiDotnet /> },
      { name: "Django", icon: <i className="devicon-django-plain"></i> },
    ],
  },
  {
    category: "Banco de Dados",
    icon: <FaDatabase />,
    technologies: [
      {
        name: "SQL (PostgreSQL)",
        icon: <i className="devicon-postgresql-plain"></i>,
      },
      { name: "MySQL", icon: <SiMysql /> },
      {
        name: "SQL Server",
        icon: <i className="devicon-microsoftsqlserver-plain"></i>,
      },
      { name: "SQLite", icon: <i className="devicon-sqlite-plain"></i> },
      { name: "NoSQL (MongoDB)", icon: <SiMongodb /> },
    ],
  },
  {
    category: "DevOps & Metodologias",
    icon: <FaTools />,
    technologies: [
      { name: "Docker", icon: <FaDocker /> },
      {
        name: "Azure DevOps",
        icon: <i className="devicon-azuredevops-plain"></i>,
      },
      { name: "SCRUM", icon: <FaTools /> },
      { name: "SOLID", icon: <FaCode /> },
      { name: "Git/GitHub Flow", icon: <BsGit /> },
    ],
  },
  {
    category: "Ferramentas",
    icon: <FaTools />,
    technologies: [
      { name: "Git", icon: <BsGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Figma", icon: <i className="devicon-figma-plain"></i> },
    ],
  },
];

const Acquirements = () => {
  return (
    <div className="acquirements" id="acquirements">
      <h1 className="title">Conhecimentos</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <h2>
              {skill.icon} {skill.category}
            </h2>
            <div className="skill-grid">
              {skill.technologies.map((tech, i) => (
                <div key={i} className="skill-item">
                  <span className="icon">{tech.icon}</span>
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acquirements;
