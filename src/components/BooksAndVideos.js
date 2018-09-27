import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

function BooksAndVideos() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="about-us">Livros e Vídeos</div>
      <Footer />
    </div>
  );
}

export default BooksAndVideos;
