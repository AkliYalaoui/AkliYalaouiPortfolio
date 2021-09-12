import { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  const [mainColor] = useState("#ff9800");

  return (
    <>
      <Header mainColor={mainColor} />
      <About />
      <Skills />
      <Projects mainColor={mainColor} />
      <ContactMe />
      <Footer />
    </>
  );
};

export default App;
