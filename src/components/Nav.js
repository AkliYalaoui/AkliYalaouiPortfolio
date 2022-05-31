import { useState, useEffect } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaTimes, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiBrain, GiEnvelope } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
// import Overlay from "./Overlay";
import NavLi from "./NavLi";

const Nav = ({ mainColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => setMenuOpen(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bg ={
    backgroundColor : "rgba(23, 23, 23, .4)",
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-2xl" style={bg}>
      {/* <Overlay /> */}
      <div className="max-w-5xl m-auto p-4 flex justify-between relative z-50">
        <h2 className="text-xl font-semibold" style={{ color: mainColor }}>
          <a href="#home">Akli YALAOUI</a>
        </h2>
        <div className="flex space-x-4">
          <div className="relative">
            <a
              className="text-black px-2 py-1 font-semibold rounded"
              style={{ backgroundColor: mainColor }}
              href="./Akli's Resume.pdf"
              download="Akli's Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
          <div className="relative">
            <button
              className="text-xl"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((prev) => !prev);
              }}
            >
              {!menuOpen ? <HiMenuAlt4 /> : <FaTimes />}
            </button>
            {menuOpen && (
              <ul
                className="flex flex-col shadow-lg w-48 absolute top-10 right-0"
                style={{ backgroundColor: "rgb(33,33,33)" }}
              >
                <NavLi id="#home">
                  <FaHome />
                  <span>Home</span>
                </NavLi>
                <NavLi id="#about">
                  <CgProfile />
                  <span>About</span>
                </NavLi>
                <NavLi id="#Skills">
                  <GiBrain />
                  <span>Skills</span>
                </NavLi>
                <NavLi id="#Projects">
                  <RiComputerLine />
                  <span>Projects</span>
                </NavLi>
                <NavLi id="#contactMe">
                  <GiEnvelope />
                  <span>Contact me</span>
                </NavLi>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
