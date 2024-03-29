import {
  FaGithub,
  FaTwitter,
  FaCodepen,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <>
      <div id="contactMe" className="p-6"></div>
      <section className="text-white">
        <div className="my-4">
          <ul
            className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:justify-items-center lg:grid-cols-6 p-2 text-sm  shadow-md border border-gray-600"
            style={{ backgroundColor: "rgb(14, 14, 14)" }}
          >
            <li>
              <a
                href="mailto:ia_yalaoui.esi.dz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
              >
                <FaEnvelope />
                <span>ia_yalaoui@esi.dz</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-1"
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
                href="tel:+33773794207"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
              >
                <FaPhone />
                <span>+33 773794207</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-1"
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
                className="flex items-center space-x-1"
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
                className="flex items-center space-x-1"
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
      </section>
    </>
  );
};

export default ContactMe;
