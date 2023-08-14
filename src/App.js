import React from "react";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Section from "./Component/Section";
import "./style.css";
import sectionData from "./datas/sectionData";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      {sectionData.map((value) => (
        <Section title={value.title} des={value.des} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
