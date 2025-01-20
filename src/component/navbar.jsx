import { Link } from "react-router-dom";
import logo from "../assets/logo-white.png";
import navLine from "../assets/navLine.svg";

const Navbar = () => {
  return (
    <nav className="p-4 sticky z-50">
      <div className="container mx-auto flex justify-between mb-3">
        <Link to="/">
          <img src={logo} alt="logo" className="max-h-10 mt-3" />
        </Link>
        <div className="flex justify-between w-2/3 items-center font-jockey text-xl font-normal">
          <Link to="/home" className="mr-4 hover:drop-shadow-[0_0px_10px_rgba(255,255,255,1)]">
            HOME
          </Link>
          <Link to="/apod" className="mr-4 hover:drop-shadow-[0_0px_10px_rgba(255,255,255,1)]">
            APOD
          </Link>
          <Link to="/marsrover" className="mr-4 hover:drop-shadow-[0_0px_10px_rgba(255,255,255,1)]">
            MARS GALLERY
          </Link>
          <Link to="/epic" className="mr-4 hover:drop-shadow-[0_0px_10px_rgba(255,255,255,1)]">
            EPIC
          </Link>
          <Link to="/about" className="hover:drop-shadow-[0_0px_10px_rgba(255,255,255,1)]">
            ABOUT
          </Link>
        </div>
      </div>
      <img src={navLine} alt="navLine" />
    </nav>
  );
};

export default Navbar;
