import { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Papers from "./components/Papers";
import OpenSource from "./components/OpenSource";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  const [mainColor] = useState("#82589F");

  return (
    <>
      <Header mainColor={mainColor} />
      <div className="max-w-7xl m-auto">
        <About />
        <Skills />
        <Papers mainColor={mainColor} />
        <OpenSource mainColor={mainColor} />
        <Projects mainColor={mainColor} />
      </div>
      <Footer />
    </>
  );
};

export default App;
