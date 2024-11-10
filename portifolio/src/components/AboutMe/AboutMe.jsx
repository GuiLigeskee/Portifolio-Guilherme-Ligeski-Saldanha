import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <h1 className="title">Sobre mim</h1>
      <p className="text">
        Olá, sou <span>Guilherme Ligeski Saldanha</span>, um{" "}
        <span>desenvolvedor web freelancer</span> de <span>20</span> anos de
        idade. Atualmente, estou cursando o 6º período de{" "}
        <span>Engenharia de Software</span> na UniBrasil, buscando
        constantemente aprimorar minhas habilidades e conhecimentos nesta área.
        <br />
        Estou ansioso para embarcar em minha primeira oportunidade de trabalho
        em uma empresa, trazendo meu <span>entusiasmo</span> e{" "}
        <span>comprometimento</span> para contribuir com o sucesso de sua
        equipe.
      </p>
    </div>
  );
};

export default AboutMe;
