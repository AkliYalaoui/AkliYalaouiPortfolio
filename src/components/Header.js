import Nav from "./Nav";
import Overlay from "./Overlay";
import HireMe from "./HireMe";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Header = ({ mainColor, lang }) => {
  const bg = {
    backgroundImage: "url('./assets/bg.jpg')",
    backgroundAttachment: "fixed",
    backgroundPosition: "left",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <header id="home" className="min-h-screen relative text-white" style={bg}>
      <Nav mainColor={mainColor} lang={lang} />
      <Overlay />
      <div className="absolute top-0 left-0 w-full h-full z-10 py-10 px-6">
        <h1
          className="text-2xl sm:text-6xl font-semibold p-2 mt-28 animate-header"
          style={{ lineHeight: 1.4 }}
        >
          Hello, I am a full stack mern developer and a computer science student
        </h1>
        <div className="space-x-4 my-16 flex justify-center items-center">
          <a
            href="mailto:ia_yalaoui.esi.dz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center space-x-2 animate-contactMe1"
          >
            <FaEnvelope />
            <span>ia_yalaoui@esi.dz</span>
          </a>
          <a
            href="tel:0673347704"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center space-x-2 animate-contactMe2"
          >
            <FaPhone />
            <span>0673347704</span>
          </a>
        </div>
        <HireMe />
      </div>
    </header>
  );
};

export default Header;
