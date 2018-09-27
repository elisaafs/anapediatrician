import React from "react";

function Header() {
  return (
    <div className="grey-header">
      <div />
      <div className="right-header">
        <div className="text-header">Conheça e siga nossos perfis:</div>
        <a href="https://www.facebook.com/criandosemcrise" target="_blank">
          <i class="fab fa-facebook-f facebook icons" />
        </a>
        <a href="https://www.instagram.com/criandosemcrise/" target="_blank">
          <i class="fab fa-instagram instagram icons" />
        </a>
      </div>
    </div>
  );
}

export default Header;
