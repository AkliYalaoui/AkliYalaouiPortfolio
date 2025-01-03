import Title from "./Title";
import papers from "../papers.json";

const Papers = ({ mainColor }) => {
  return (
    <>
      <div id="Papers">
        <div className="py-10 px-4 text-white mt-10">
          <Title title="papers" />
          <section className="p-3 mt-10">
            {papers.map((paper) => (
              <article
                key={paper.title}
                className="max-w-5xl mx-auto mb-14 p-4"
                style={{ backgroundColor: "rgb(10, 10, 10)" }}
              >
                <h3 className="text-center font-semibold text-base sm:text-2xl">
                  {paper.title}
                </h3>
                <h6 className="font-bold my-2">Abstract</h6>
                <p className="text-justify">{paper.abstract}</p>
                <h6 className="font-bold my-2">Keywords</h6>
                <p className="text-justify">{paper.keywords}</p>
                <h6 className="font-bold my-2">Authors</h6>
                <p className="text-justify">{paper.authors}</p>
                <div className="mt-4 text-center">
                  <a
                    className=" px-2 py-1 font-semibold rounded"
                    style={{ backgroundColor: mainColor }}
                    href={paper.link}
                    download={paper.download}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download full paper
                  </a>
                </div>
              </article>
            ))}
          </section>
          <Title title="papers" end="true" />
        </div>
      </div>
    </>
  );
};

export default Papers;
