import "./Projects.css";

// img projects
import CasaLuz from "../../assets/CasaLuz.webp";
import Mademape from "../../assets/MademapeStore.webp";
import GreenSocial from "../../assets/GreenSocial.webp";
import AdivinheAPalavra from "../../assets/AdivinheAPalavra.webp";

// Icons
import JavaScript from "../../assets/javascript-logo.svg";
import ReactLogo from "../../assets/react-logo.svg";
import ReduxLogo from "../../assets/redux-logo.svg";
import NodejsLogo from "../../assets/nodejs-logo.svg";
import MongodbLogo from "../../assets/mongodb-logo.svg";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="title">Principais projetos</h1>
      <div className="project">
        <img id="project-img" src={CasaLuz} alt="CasaLuz Project" />
        <div className="project-info">
          <h3 id="project-title">Projeto freelancer CasaLuz</h3>
          <label>
            <span>Tecnologias utilizadas no projeto:</span>
            <ul>
              <li>
                <img src={JavaScript} alt="JavaScript Logo" />
              </li>
              <li>
                <img src={ReactLogo} alt="React Logo" />
              </li>
              <li>
                <img src={ReduxLogo} alt="Redux Logo" />
              </li>
              <li>
                <img src={NodejsLogo} alt="Node.js Logo" />
              </li>
              <li>
                <img src={MongodbLogo} alt="MongoDB Logo" />
              </li>
            </ul>
          </label>
          <a
            id="project-link"
            href="https://github.com/GuiLigeskee/CasaLuz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório GitHub
          </a>
        </div>
      </div>
      <div className="project">
        <img id="project-img" src={Mademape} alt="CasaLuz Project" />
        <div className="project-info">
          <h3 id="project-title">Projeto freelancer Mademape</h3>
          <label>
            <span>Tecnologias utilizadas no projeto:</span>
            <ul>
              <li>
                <img src={JavaScript} alt="JavaScript Logo" />
              </li>
              <li>
                <img src={ReactLogo} alt="React Logo" />
              </li>
              <li>
                <img src={ReduxLogo} alt="Redux Logo" />
              </li>
              <li>
                <img src={NodejsLogo} alt="Node.js Logo" />
              </li>
              <li>
                <img src={MongodbLogo} alt="MongoDB Logo" />
              </li>
            </ul>
          </label>
          <a
            id="project-link"
            href="https://github.com/GuiLigeskee/MademapeStore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório GitHub
          </a>
        </div>
      </div>
      <div className="project">
        <img id="project-img" src={GreenSocial} alt="CasaLuz Project" />
        <div className="project-info">
          <h3 id="project-title">Projeto pessoal GreenSocial</h3>
          <label>
            <span>Tecnologias utilizadas no projeto:</span>
            <ul>
              <li>
                <img src={JavaScript} alt="JavaScript Logo" />
              </li>
              <li>
                <img src={ReactLogo} alt="React Logo" />
              </li>
              <li>
                <img src={ReduxLogo} alt="Redux Logo" />
              </li>
              <li>
                <img src={NodejsLogo} alt="Node.js Logo" />
              </li>
              <li>
                <img src={MongodbLogo} alt="MongoDB Logo" />
              </li>
            </ul>
          </label>
          <a
            id="project-link"
            href="https://github.com/GuiLigeskee/MademapeStore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório GitHub
          </a>
        </div>
      </div>
      <div className="project">
        <img id="project-img" src={AdivinheAPalavra} alt="CasaLuz Project" />
        <div className="project-info">
          <h3 id="project-title">Projeto pessoal Adivinhe a palavra</h3>
          <label>
            <span>Tecnologias utilizadas no projeto:</span>
            <ul>
              <li>
                <img src={JavaScript} alt="JavaScript Logo" />
              </li>
              <li>
                <img src={ReactLogo} alt="React Logo" />
              </li>
            </ul>
          </label>
          <div id="buttons">
            <a
              id="project-link"
              href="https://github.com/GuiLigeskee/Adivinhe-a-palavra"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositório GitHub
            </a>
            <a
              id="project-link"
              href="https://GuiLigeskee.github.io/adivinhe-a-palavra"
              target="_blank"
            >
              Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
