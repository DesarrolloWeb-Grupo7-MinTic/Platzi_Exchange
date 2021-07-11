import React from "react";
import { HeaderWrapper } from "./styledComponents";
import logoSrc from "../../assets/media/logo.png";

function Header() {
  return (
    <HeaderWrapper>
      <img src={logoSrc} alt='logo Platzi Exchange' />
      <h1>PlatziExchange</h1>
      <h3>BTC</h3>
      <h3>ETH</h3>
      <h3>XRP</h3>
      <a
        href='https://github.com/DesarrolloWeb-Grupo7-MinTic/Platzi_Exchange_MarioGomez'
        target='_blank'
        rel='noreferrer'
      >
        <span>By @mariogomez96</span>
      </a>
    </HeaderWrapper>
  );
}

export default Header;
