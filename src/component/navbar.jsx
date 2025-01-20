import { Link } from "react-router-dom";
import logo from "../assets/logo-white.png";
import navLine from "../assets/navLine.svg";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between mb-3">
        <Link to="/">
          <img src={logo} alt="logo" className="max-h-10 mt-3" />
        </Link>
        <div className="flex justify-between w-2/3 items-center font-jockey text-xl font-normal">
          <Link to="/home" className="mr-4 hover:underline">
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
          <Link to="/about" className="hover:underline">
            ABOUT
          </Link>
        </div>
      </div>
      <img src={navLine} alt="navLine" />
    </nav>
  );
};

export default Navbar;
