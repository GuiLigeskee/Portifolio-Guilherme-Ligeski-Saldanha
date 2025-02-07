import "./NavBar.css";
import { FaCode } from "react-icons/fa";
const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <div className="navBarLeft">
          <h1 className="navBarLogo">
            <a href="#intro">
              <FaCode />
            </a>
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
