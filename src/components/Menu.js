import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="wrapper-menu-left">
        <Link to="/">
          <img className="logo" alt="logo" src="/Logo.png" />
        </Link>
      </div>
      <div className="wrapper-menu-right">
        <Link className="menu-parts" to="/sobre">
          <div className="menu-part">Quem somos?</div>
        </Link>
        <Link className="menu-parts" to="/dicas">
          <div className="menu-part">Dicas de como não nos conhecer</div>
        </Link>
        <Link className="menu-parts" to="/noticias">
          <div className="menu-part">Notícias</div>
        </Link>
        <Link className="menu-parts" to="/indicacoes">
          <div className="menu-part">Indicações</div>
        </Link>
        <Link className="menu-parts" to="/cronicas">
          <div className="menu-part">Crônicas de uma UTI</div>
        </Link>
        <Link className="menu-parts" to="/contato">
          <div className="menu-part">Contato</div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
