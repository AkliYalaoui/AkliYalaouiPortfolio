import Title from "./Title";
const OpenSource = () => {
  return (
    <>
      <div id="OpenSource">
        <div className="py-10 px-4 text-white mt-10">
          <Title title="openSource" />
          <section className="p-3 mt-10 flex flex-wrap justify-center items-stretch">
            <article
              className="p-3 rounded shadow-inner max-w-md m-1"
              style={{ backgroundColor: "rgb(14, 14, 14)" }}
            >
              <h4 className="text-center mb-4 font-bold text-lg sm:text-3xl ">
                React-algeria-map
              </h4>
              <img
                loading="lazy"
                src="./assets/package1/main.png"
                alt="Package preview"
              />
              <p className="text-center mt-4">
                A react component that displays an interactive map of Algeria.
              </p>
              <div className="my-3">
                <a
                  className="underline"
                  href="https://github.com/AkliYalaoui/react-algeria-map"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  # Check package on GITHUB
                </a>
              </div>
              <a
                className="underline"
                href="https://www.npmjs.com/package/react-algeria-map"
                target="_blank"
                rel="noopener noreferrer"
              >
                # Check package on NPM
              </a>
            </article>
          </section>
          <Title title="openSource" end="true" />
        </div>
      </div>
    </>
  );
};

export default OpenSource;
