import React from "react";

const ProjectItem = ({
  overview,
  mainColor,
  title,
  github,
  live,
  tech,
  image,
  direction,
}) => {
  return (
    <article
      className={`flex ${
        direction === "bottom" ? "flex-wrap-reverse flex-row-reverse" : ""
      } flex-wrap items-center justify-center max-w-4xl m-auto`}
    >
      <div
        className={`max-w-md relative transform ${
          direction === "bottom" ? "-translate-y-8" : "translate-y-8"
        }`}
      >
        <img
          loading="lazy"
          className="w-full h-full object-cover"
          src={image}
          alt="app preview"
        />
        <div className="absolute -top-7 right-0 space-x-2">
          <a
            className="py-1 px-2"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#42d0fd" }}
          >
            Github
          </a>
          <a
            className="py-1 px-2"
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: mainColor }}
          >
            Live
          </a>
        </div>
      </div>
      <div className="p-2 w-80" style={{ backgroundColor: "rgb(10, 10, 10)" }}>
        <h3
          className={`font-semibold text-center mb-4 ${
            direction === "bottom" ? "" : "mt-8"
          }`}
        >
          <span className="underline capitalize">{title}</span>
        </h3>
        <h4>
          <span style={{ color: mainColor }}># </span>Overview :
        </h4>
        <p className="p-2" style={{ lineHeight: "1.7", textIndent: "16px" }}>
          {overview}
        </p>
        <div className={`p-2 ${direction === "bottom" ? "mb-10" : ""}`}>
          <h4>
            <span style={{ color: mainColor }}># </span>Tech :
          </h4>
          <ul className="flex flex-wrap mt-2">
            {tech.map((t, id) => (
              <li key={id} className="p-2 border border-gray-600 m-1">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
