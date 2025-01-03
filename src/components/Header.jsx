import Nav from "./Nav";
import Overlay from "./Overlay";

const Header = ({ mainColor, lang }) => {
  const bg = {
    backgroundImage: "url('./assets/bg2.jpg')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    minHeight: "75vh",
  };

  return (
    <header id="home" className="relative text-white" style={bg}>
      <Nav mainColor={mainColor} lang={lang} />
      <Overlay />
      <div className="absolute top-0 left-0 w-full h-full z-10 py-10 px-5 flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-semibold mt-24 animate-header text-center mb-6">
          I am a data scientist and a full-stack web developer.
        </h1>
        <h2 className="text-xs sm:text-sm md:text-base font-medium text-center mb-6 max-w-5xl">
          With expertise in Artificial Intelligence, Data Science , and Web Development, I help businesses unlock insights, automate processes, and build scalable digital solutions.
        </h2>

        <a
          href="#about"
          style={{ backgroundColor: mainColor }}
          className="text-white px-4 py-2 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </header>
  );
};

export default Header;
