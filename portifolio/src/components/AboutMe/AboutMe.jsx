import "./AboutMe.css";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <h1 className="title">Sobre Mim</h1>
      <p className="text">
        Olá, sou <span>Guilherme Ligeski Saldanha</span>, um{" "}
        <span>desenvolvedor Full-Stack</span> de <span>21 anos</span>. Estudante
        de <span>Engenharia de Software</span> na UniBrasil, tenho experiência
        na criação de{" "}
        <span>aplicações Front-end/Mobile com React e React Native</span>,
        implementação de{" "}
        <span>APIs e automações de Back-end usando Node.js e n8n</span>, e
        trabalho com{" "}
        <span>metodologias ágeis (SCRUM, SOLID, Git/GitHub Flow)</span>.
        Atualmente, atuo como <span>Desenvolvedor Full-Stack</span> na Pew's
        Cavern.
      </p>

      <div className="timeline">
        <h2>Minha Jornada</h2>
        <div className="timeline-item">
          <FaGraduationCap className="icon" />
          <div className="timeline-content">
            <h3>Engenharia de Software</h3>
            <p>UniBrasil (2022 - 2025)</p>
          </div>
        </div>

        <div className="timeline-item">
          <FaBriefcase className="icon" />
          <div className="timeline-content">
            <h3>Desenvolvedor Full-Stack - Pew's Cavern</h3>
            <p>Jan 2025 - Set 2025 - Remoto</p>
            <ul>
              <li>
                Participação em equipe de desenvolvimento, atuando com time para
                o ciclo de vida completo do software
              </li>
              <li>
                Desenvolvimento de aplicações Front-end/Mobile com React, React
                Native e Tailwind CSS
              </li>
              <li>
                Implementação de APIs e automações no Back-end usando Node.js e
                n8n, acelerando a prova de conceito e time-to-market
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <FaBriefcase className="icon" />
          <div className="timeline-content">
            <h3>Freelancer - Casa Luz Imóveis</h3>
            <p>Fev 2024 - Jun 2024 - Curitiba, PR</p>
            <ul>
              <li>
                Criação de site imobiliário Full-Stack com Front-end responsivo
                e Back-end para gestão de anúncios
              </li>
              <li>
                Implementação de filtros avançados de pesquisa e área
                administrativa para gerenciar o catálogo de imóveis
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <FaBriefcase className="icon" />
          <div className="timeline-content">
            <h3>Freelancer - MadeMape Store</h3>
            <p>Ago 2023 - Dez 2023 - Curitiba, PR</p>
            <ul>
              <li>
                Desenvolvimento de plataforma de árvore de links personalizada,
                permitindo aos usuários centralizar e compartilhar múltiplos
                links em um único perfil
              </li>
              <li>
                Entrega de solução com interface personalizável, design
                responsivo e integração com redes sociais
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default AboutMe;
