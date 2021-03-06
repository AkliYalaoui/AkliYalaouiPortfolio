import { FaReact } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
const Footer = () => {
  return (
    <footer
      className="p-10 text-white"
      style={{ backgroundColor: "rgb(10, 10, 10)" }}
    >
      <p className="flex items-center justify-center flex-wrap space-x-1">
        Made by Akli YALAOUI with{" "}
        <span className="text-red-600 px-1"> &hearts; </span> and{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaReact color="#42d0fd" />
        </a>
        . Hosted on{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiNetlify />
        </a>
        , &copy; {new Date().getFullYear()}{" "}
      </p>
    </footer>
  );
};

export default Footer;
