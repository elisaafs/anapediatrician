import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="about-us">Crônicas de uma UTI</div>
      <Footer />
    </div>
  );
}

export default About;
