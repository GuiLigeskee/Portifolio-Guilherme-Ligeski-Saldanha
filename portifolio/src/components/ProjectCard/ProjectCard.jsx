// ProjectCard.js
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ imgSrc, title, technologies, githubLink, siteLink }) => {
  return (
    <div className="project">
      <img id="project-img" src={imgSrc} alt={`${title} Project`} />
      <div className="project-info">
        <h3 id="project-title">{title}</h3>
        <label>
          <span>Tecnologias utilizadas no projeto:</span>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>
                <img src={tech.logo} alt={`${tech.name} Logo`} />
              </li>
            ))}
          </ul>
        </label>
        <div id="buttons">
          <a
            id="project-link"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório GitHub
          </a>
          {siteLink && (
            <a
              id="project-link"
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
