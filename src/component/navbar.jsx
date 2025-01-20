import { Link } from "react-router-dom";
import logo from "../assets/logo-white.png";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/">
          <img src={logo} alt="logo" className="max-h-14" />
        </Link>
        <div className="flex items-center font-jockey">
          <Link to="/apod" className="mr-4 hover:underline">
            HOME
          </Link>
          <Link to="/apod" className="mr-4 hover:underline">
            APOD
          </Link>
          <Link to="/marsrover" className="mr-4 hover:underline">
            MARS GALLERY
          </Link>
          <Link to="/epic" className="mr-4 hover:underline">
            EPIC
          </Link>
          <Link to="/about" className="mr-4 hover:underline">
            ABOUT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
