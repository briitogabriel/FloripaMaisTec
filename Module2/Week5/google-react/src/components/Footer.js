import React from "react";
import "../styles/Footer.css";

function Footer() {
  const nome = "Roberto Garcia";
  return (
    <div className="footer">
      <div className="footer1">
        <span>Brasil</span>
      </div>
      <div className="footer2">
        <ul className="firstList">
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Publicidade</a>
          </li>
          <li>
            <a href="#">Negócios</a>
          </li>
          <li>
            <a href="#">Como funciona a Pesquisa</a>
          </li>
        </ul>
        <ul className="secondList">
          <li>
            <a href="#">Privacidade</a>
          </li>
          <li>
            <a href="#">Termos</a>
          </li>
          <li>
            <a href="#">Configuração</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
