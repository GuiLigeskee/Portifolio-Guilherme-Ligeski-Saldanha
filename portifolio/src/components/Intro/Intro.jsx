import "./Intro.css";
import TypingEffect from "react-typing-effect";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import cv from "../../assets/CV-Guilherme_Ligeski_Saldanha.pdf";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="intro-content">
        <h1 className="title">
          <TypingEffect
            text={["Olá eu sou o Guilherme!"]}
            speed={100}
            eraseSpeed={50}
          />
        </h1>

        <p className="subtitle">Desenvolvedor Fullstack</p>

        <p className="description">
          Sou desenvolvedor fullstack, especializado na criação de APIs
          escaláveis e sistemas robustos. Tenho experiência no desenvolvimento
          de soluções personalizadas para empresas.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn-primary">
            Meus Projetos
          </a>
          <a href={cv} download className="btn-secondary">
            <FaDownload /> Baixar CV
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/GuiLigeskee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-ligeski-saldanha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
