import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <div className="navBarLeft">
          <h1 className="navBarLogo">Guilherme L. Saldanha</h1>
        </div>
        <div className="navBarRight">
          <ul className="navBarOptions">
            <li className="navBarOption">Sobre mim</li>
            <li className="navBarOption">Conhecimentos</li>
            <li className="navBarOption">Projetos</li>
            <li className="navBarOption">Contato</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
