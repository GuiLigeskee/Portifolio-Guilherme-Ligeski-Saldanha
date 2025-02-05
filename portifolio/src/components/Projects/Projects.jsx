import React, { useState } from "react";
import Select from "react-select";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

// img projects
import CasaLuz from "../../assets/CasaLuz.webp";
import Mademape from "../../assets/MademapeStore.webp";
import GreenSocial from "../../assets/GreenSocial.webp";
import AdivinheAPalavra from "../../assets/AdivinheAPalavra.webp";
import ListaDeTarefas from "../../assets/ListaDeTarefas.webp";
import CineReview from "../../assets/CineReview.webp";
import Accounts from "../../assets/accounts.webp";

// Icons
import JavaScript from "../../assets/javascript-logo.svg";
import ReactLogo from "../../assets/react-logo.svg";
import ReduxLogo from "../../assets/redux-logo.svg";
import NodejsLogo from "../../assets/nodejs-logo.svg";
import MongodbLogo from "../../assets/mongodb-logo.svg";
import TypeScript from "../../assets/typescript.svg";

const options = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "React", label: "React" },
  { value: "Redux", label: "Redux" },
  { value: "Node.js", label: "Node.js" },
  { value: "MongoDB", label: "MongoDB" },
];

const projectsData = [
  {
    imgSrc: CasaLuz,
    title: "Projeto freelancer CasaLuz",
    technologies: [
      { logo: JavaScript, name: "JavaScript" },
      { logo: ReactLogo, name: "React" },
      { logo: ReduxLogo, name: "Redux" },
      { logo: NodejsLogo, name: "Node.js" },
      { logo: MongodbLogo, name: "MongoDB" },
    ],
    githubLink: "https://github.com/GuiLigeskee/CasaLuz",
    siteLink: "https://www.casaluzimoveis.com",
  },
  {
    imgSrc: Mademape,
    title: "Projeto freelancer Mademape",
    technologies: [
      { logo: JavaScript, name: "JavaScript" },
      { logo: ReactLogo, name: "React" },
      { logo: ReduxLogo, name: "Redux" },
      { logo: NodejsLogo, name: "Node.js" },
      { logo: MongodbLogo, name: "MongoDB" },
    ],
    githubLink: "https://github.com/GuiLigeskee/MademapeStore",
  },
  {
    imgSrc: GreenSocial,
    title: "Projeto pessoal GreenSocial",
    technologies: [
      { logo: JavaScript, name: "JavaScript" },
      { logo: ReactLogo, name: "React" },
      { logo: ReduxLogo, name: "Redux" },
      { logo: NodejsLogo, name: "Node.js" },
      { logo: MongodbLogo, name: "MongoDB" },
    ],
    githubLink: "https://github.com/GuiLigeskee/MademapeStore",
  },
  {
    imgSrc: CineReview,
    title: "Projeto pessoal CineReview",
    technologies: [
      { logo: JavaScript, name: "JavaScript" },
      { logo: ReactLogo, name: "React" },
    ],
    githubLink: "https://github.com/GuiLigeskee/Lista-de-tarefas",
    siteLink:
      "https://cinereview-guiligeskee-guiligeskees-projects.vercel.app/?_vercel_share=uFJrgDCVAsopRO1E20S1WKirpWFfiacu",
  },
  {
    imgSrc: ListaDeTarefas,
    title: "Projeto pessoal Lista de tarefas",
    technologies: [
      { logo: TypeScript, name: "TypeScript" },
      { logo: ReactLogo, name: "React" },
    ],
    githubLink: "https://github.com/GuiLigeskee/Lista-de-tarefas",
    siteLink:
      "https://lista-de-tarefas-l0femi5hw-guiligeskees-projects.vercel.app",
  },
  {
    imgSrc: AdivinheAPalavra,
    title: "Projeto pessoal Adivinhe a palavra",
    technologies: [
      { logo: JavaScript, name: "JavaScript" },
      { logo: ReactLogo, name: "React" },
    ],
    githubLink: "https://github.com/GuiLigeskee/Adivinhe-a-palavra",
    siteLink: "https://GuiLigeskee.github.io/adivinhe-a-palavra",
  },
  {
    imgSrc: Accounts,
    title: "Projeto pessoal Accounts",
    technologies: [
      { logo: JavaScript, name: "JavaScript" },
      { logo: NodejsLogo, name: "Node.js" },
    ],
    githubLink: "https://github.com/GuiLigeskee/Accounts-CLI",
  },
];

const Projects = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  // Filtragem dos projetos
  const filteredProjects =
    selectedLanguages.length === 0
      ? projectsData
      : projectsData.filter((project) =>
          selectedLanguages.every((lang) =>
            project.technologies.some((tech) => tech.name === lang.value)
          )
        );

  return (
    <>
      <h1 className="title">Principais projetos</h1>

      {/* Filtro */}
      <div className="filter-container">
        <Select
          options={options}
          isMulti
          onChange={setSelectedLanguages}
          placeholder="Filtrar por linguagens..."
        />
      </div>

      {/* Exibição dos projetos filtrados */}
      <div className="projects" id="projects">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              technologies={project.technologies}
              githubLink={project.githubLink}
              siteLink={project.siteLink}
            />
          ))
        ) : (
          <p className="no-results">Nenhum projeto encontrado.</p>
        )}
      </div>
    </>
  );
};

export default Projects;
