import React from "react";
import googleLogo from "../images/google-logo-1.png";
import "../styles/Main.css";
import Button from './Button';

function Main() {
  return (
    <div className="main">
      <img className="logo" src={googleLogo} alt="Google Logo" />
      <input className="inputMain" type="text"></input>
      <div className="main-btn">
        <Button prop='Pesquisa Google' />
        <Button prop='Estou com sorte' />
        <Button prop='Botão invisível' visible={false} />
      </div>
    </div>
  );
}

export default Main;
