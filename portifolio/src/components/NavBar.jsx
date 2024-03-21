import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <div className="navBarLeft">
          <h1 className="navBarLogo">
            <a href="#intro">Guilherme L. Saldanha</a>
          </h1>
        </div>
        <div className="navBarRight">
          <ul className="navBarOptions">
            <li className="navBarOption">
              <a href="#aboutMe">Sobre mim</a>
            </li>
            <li className="navBarOption">
              <a href="#acquirements">Conhecimentos</a>
            </li>
            <li className="navBarOption">
              <a href="#projects">Projetos</a>
            </li>
            <li className="navBarOption">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
