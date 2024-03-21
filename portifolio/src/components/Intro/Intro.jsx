import "./Intro.css";
import FotoPerfil from "../../assets/fotoGui.jpg";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <h1 className="title">Olá, eu sou o Guilherme!</h1>
      <img className="profileImg" src={FotoPerfil} alt="Foto de perfil" />
      <p>Desenvolvedor Web</p>
    </div>
  );
};

export default Intro;
