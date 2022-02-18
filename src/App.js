import { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  const [mainColor] = useState("#3ab795");

  return (
    <>
      <Header mainColor={mainColor} />
      <div className="max-w-7xl m-auto">
        <About />
        <Skills />
        <Projects mainColor={mainColor} />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
};

export default App;
