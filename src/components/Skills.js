import Title from "./Title";
import LangItem from "./LangItem";
import Cardskill from "./Cardskill";
import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";

const Skills = () => {
  return (
    <>
      <div id="Skills" className="p-10"></div>
      <div className="py-4 px-10 text-white">
        <Title title="skills" />
        <section className="p-3 flex flex-wrap justify-center items-stretch">
          <Cardskill>
            <h4 className="text-center mb-4">Languages</h4>
            <ul className="space-y-3">
              <LangItem lang="English" icon="./assets/en.png" val="fluent" />
              <LangItem lang="French" icon="./assets/fr.png" val="fluent" />
              <LangItem lang="Arabic" icon="./assets/dz.png" val="native" />
              <LangItem lang="Kabyle ⵣ" val="native" />
            </ul>
          </Cardskill>
          <Cardskill>
            <h4 className="text-center mb-4">Frontend stack</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span>React Js</span>
                <FaReact />
              </li>
              <li className="flex items-center space-x-2">
                <span>Tailwindcss</span>
                <SiTailwindcss />
              </li>
              <li className="flex items-center space-x-2">
                <span>Html</span>
                <FaHtml5 />
              </li>
              <li className="flex items-center space-x-2">
                <span>Css</span>
                <SiCss3 />
              </li>
              <li className="flex items-center space-x-2">
                <span>Javascript</span>
                <SiJavascript />
              </li>
            </ul>
          </Cardskill>
          <Cardskill>
            <h4 className="text-center mb-4">Backend stack</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span>NodeJs</span>
                <FaNodeJs />
              </li>
              <li className="flex items-center space-x-2">
                <span>ExpressJs</span>
                <FaNodeJs />
              </li>
              <li className="flex items-center space-x-2">
                <span>Mongodb</span>
                <SiMongodb />
              </li>
              <li className="flex items-center space-x-2">
                <span>Mysql</span>
                <SiMysql />
              </li>
            </ul>
          </Cardskill>
          <Cardskill>
            <h4 className="text-center mb-4">Others</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span>Git</span>
                <FaGitAlt />
              </li>
              <li className="flex items-center space-x-2">
                <span>Github</span>
                <FaGithub />
              </li>
              <li className="flex items-center space-x-2">
                <span>Npm</span>
                <FaNpm />
              </li>
              <li className="flex items-center space-x-2">
                <span>Problem solving</span>
                <GiBrain />
              </li>
              <li className="flex items-center space-x-2">
                <span>Team work</span>
                <AiOutlineTeam />
              </li>
            </ul>
          </Cardskill>
        </section>
        <Title title="skills" end="true" />
      </div>
    </>
  );
};

export default Skills;
