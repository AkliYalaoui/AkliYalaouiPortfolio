import {
  FaGithub,
  FaTwitter,
  FaCodepen,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import Title from "./Title";
const ContactMe = () => {
  return (
    <>
      <div id="contactMe" className="p-10"></div>
      <section className="text-white py-4 px-10">
        <Title title="contactme" />
        <div className="my-4">
          <figure className="max-w-xs text-center mx-auto my-4">
            <img
              loading="lazy"
              src="./assets/me.jpg"
              alt="akli yalaoui"
              className="object-contain h-full w-full animate-setup"
            />
            <figcaption className="p-2 border-b border-gray-600">
              Summer Internship at <strong>ADSIL</strong> - Algiers
            </figcaption>
          </figure>
          <ul
            className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-2 text-sm  shadow-md border border-gray-600"
            style={{ backgroundColor: "rgb(14, 14, 14)" }}
          >
            <li>
              <a
                href="mailto:ia_yalaoui.esi.dz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <FaEnvelope />
                <span>ia_yalaoui@esi.dz</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://codepen.io/AkliYalaoui/"
              >
                <FaCodepen />
                <span>Akli</span>
              </a>
            </li>
            <li>
              <a
                href="tel:0673347704"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <FaPhone />
                <span>0673347704</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AkliYalaoui"
              >
                <FaGithub />
                <span>AkliYalaoui</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/KoukiYalaoui"
              >
                <FaTwitter />
                <span>KoukiYalaoui</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/akli-yalaoui-077b56174"
              >
                <FaLinkedin />
                <span>Akli Yalaoui</span>
              </a>
            </li>
          </ul>
        </div>
        <Title title="contactme" end="true" />
      </section>
    </>
  );
};

export default ContactMe;
