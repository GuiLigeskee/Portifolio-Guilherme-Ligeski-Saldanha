import "./Intro.css";
import DevIntro from "../../assets/dev-intro.svg";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="intro-content-left">
        <img src={DevIntro} alt="" srcset="" />
      </div>
      <div className="intro-content-right">
        <h1 className="title">Olá, eu sou o Guilherme!</h1>
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
          <a
            href="/CV-Guilherme_Ligeski_Saldanha.pdf"
            download="CV-Guilherme_Ligeski_Saldanha.pdf"
            type="application/pdf"
            className="btn-secondary"
          >
            <FaDownload /> Baixar Currículo
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
