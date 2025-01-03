import Title from "./Title";
import LangItem from "./LangItem";
import Cardskill from "./Cardskill";
import { FaReact, FaHtml5, FaNodeJs, FaLanguage } from "react-icons/fa";
import {
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiElasticsearch,
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { DiPython } from "react-icons/di";
import { IoStatsChart } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { AiOutlineConsoleSql } from "react-icons/ai";

const Skills = () => {
  return (
    <>
      <div id="Skills"></div>
      <div className="py-10 px-4 text-white">
        <Title title="skills" />
        <section className="p-3 flex flex-wrap justify-center items-stretch">
          <Cardskill>
            <h4 className="text-center mb-4">Languages</h4>
            <ul className="space-y-3">
              <LangItem lang="English" icon="./assets/en.png" val="fluent" />
              <LangItem lang="French" icon="./assets/fr.png" val="fluent" />
              <LangItem lang="Arabic" icon="./assets/dz.png" val="bilingual" />
              <LangItem lang="Kabyle ⵣ" val="native" />
            </ul>
          </Cardskill>
          <Cardskill>
            <h4 className="text-center mb-4">Frontend stack</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span>ReactJs/NextJs</span>
                <FaReact />
              </li>
              <li className="flex items-center space-x-2">
                <span>TailwindCss/MaterialUi</span>
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
                <span>Flask</span>
                <DiPython />
              </li>
              <li className="flex items-center space-x-2">
                <span>Mongodb</span>
                <SiMongodb />
              </li>
              <li className="flex items-center space-x-2">
                <span>Sql</span>
                <AiOutlineConsoleSql />
              </li>
              <li className="flex items-center space-x-2">
                <span>Elastic Search</span>
                <SiElasticsearch />
              </li>
            </ul>
          </Cardskill>
          <Cardskill>
            <h4 className="text-center mb-4">Data science</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span>Python</span>
                <DiPython />
              </li>
              <li className="flex items-center space-x-2">
                <span>R</span>
                <IoStatsChart />
              </li>
              <li className="flex items-center space-x-2">
                <span>Machine Learning</span>
                <MdComputer />
              </li>
              <li className="flex items-center space-x-2">
                <span>NLP</span>
                <FaLanguage />
              </li>
              <li className="flex items-center space-x-2">
                <span>Deep Learning</span>
                <GiBrain />
              </li>
              <li className="flex items-center space-x-2">
                <span>Data Analysis</span>
                <IoStatsChart />
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
