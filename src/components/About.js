import Title from "./Title";
import ContactMe from "./ContactMe";
import { FaHome } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div id="about" className="p-10"></div>
      <div className="py-4 px-10 text-white">
        <Title title="about" />
        <section className="mt-4 mb-8 pl-3">
          {/* <div className={styles.hello}>Hello!</div> */}
          <p className={`${styles.paragraph} max-w-5xl m-auto`}>
            I am <strong>Akli YALAOUI</strong>, I am a <strong>web developer</strong> and a <strong>data scientist</strong>. I am an
            ambitious person with a fast learning curve, I like creativity and
            solving complex problems both in computer science and everyday life.
            <br/>Currently, I am seeking for new opportunities, I am open to work as a web developer freelancer or as a data scientist.
          </p>
        </section>
        <section className="flex flex-wrap justify-center items-center my-4 pl-2">
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
                <FaHome color="#82589F" fontSize="22px" />
                <span>
                  Lives in <strong>Paris, France</strong>.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <IoSchool color="#82589F" fontSize="22px" />
                <span>
                  Studied at <strong>ESI Algiers ex INI</strong>.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <IoSchool color="#82589F" fontSize="22px" />
                <span>
                  Currently following a Master's degree at <strong>Université Paris Cité</strong>.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <IoSchool color="#82589F" fontSize="22px" />
                <span>
                  Web development and data science
                </span>
              </li>
            </ul>
          </article>
          <ContactMe />
        </section>
        <Title title="about" end="true" />
      </div>
    </>
  );
};

export default About;
