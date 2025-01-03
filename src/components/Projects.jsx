import Title from "./Title";
import ProjectItem from "./ProjectItem";
import projects from "../projects.json";

const Projects = ({ mainColor }) => {
  return (
    <>
      <div id="Projects"></div>
      <div className="py-10 px-4 text-white">
        <Title title="projects" />
        <section className="p-3 mt-10">
          {projects.map((project, id) => (
            <ProjectItem
              key={id}
              image={project.image}
              github={project.github}
              live={project.live}
              title={project.title}
              mainColor={mainColor}
              overview={project.overview}
              tech={project.tech}
              direction={`${id % 2 ? "bottom" : "top"}`}
            />
          ))}
        </section>
        <Title title="projects" end="true" />
      </div>
    </>
  );
};

export default Projects;
