import "./Acquirements.css";

import Carousel from "../carousel/Carousel.jsx";

const Acquirements = () => {
  return (
    <div className="acquirements">
      <h1 className="title">Conhecimentos</h1>
      <Carousel />
      <p className="text">
        Tenho conhecimento aprofundado em <span>JavaScript</span>,{" "}
        <span>React</span>, <span>Redux</span> e <span>Node.js</span>, criando
        aplicações web dinâmicas e eficientes. Possuo amplo conhecimento em
        banco de dados <span>MongoDB</span> para armazenamento de dados flexível
        e escalável. Além disso, estou familiarizado com <span>Git</span> e{" "}
        <span>GitHub</span> para controle de versão e colaboração em equipe.
        Tenho habilidades básicas em <span>Python</span>, <span>C</span> e{" "}
        <span>C#</span>, adquiridas durante minha formação acadêmica.
      </p>
    </div>
  );
};

export default Acquirements;
