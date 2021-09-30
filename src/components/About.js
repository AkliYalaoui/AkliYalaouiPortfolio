import Title from "./Title";
import { FaHome } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div id="about" className="p-10"></div>
      <div className="py-4 px-10 text-white">
        <Title title="about" />
        <section className="mt-4 mb-8 pl-3">
          <div className={styles.hello}>Hello!</div>
          <p className={`${styles.paragraph} max-w-5xl m-auto`}>
            I am <strong>Akli YALAOUI</strong>, I am a 21 years old, I am a self
            taught full stack <strong>MERN developer</strong> . I am an
            ambitious person with a fast learning curve, I like creativity and
            solving complex problems both in web development and everyday life.
            <br />
            <br />I am a fourth year student at Higher National School of
            Computer Science Algiers ( field of intelligent systems and data),
            so a future data scientist
          </p>
        </section>
        <section className="flex flex-wrap justify-center items-center my-4 pl-3">
          <div className={`w-56 h-40 ${styles.aboutImageContainer}`}>
            <img
              loading="lazy"
              className={`transform -rotate-3 ${styles.aboutImage}`}
              src="./assets/akli.jpg"
              alt="akli yalaoui"
            />
          </div>
          <article>
            <ul className="space-y-4 p-4 min-w-max">
              <li className="flex items-start space-x-3">
                <FaHome color="#42d0fd" fontSize="22px" />
                <span>
                  Lives in <strong>Bejaia, Algeria</strong>.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <IoSchool color="#42d0fd" fontSize="22px" />
                <span>
                  Fourth year student at <strong>ESI ex INI</strong>.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MdComputer color="#42d0fd" fontSize="22px" />
                <span>Web development since</span>
                <strong>May 2020</strong>.
              </li>
            </ul>
          </article>
        </section>
        <Title title="about" end="true" />
      </div>
    </>
  );
};

export default About;
