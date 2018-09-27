import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

function News() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="about-us">Notícias: fake ou não</div>
      <Footer />
    </div>
  );
}

export default News;
