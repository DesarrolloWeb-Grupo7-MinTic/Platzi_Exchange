import React from "react";
import { HeaderWrapper } from "./styledComponents";
import logoSrc from "../../assets/media/logo.png";
import { Link, useHistory } from "react-router-dom";


function Header() {
  const history = useHistory()
  return (
    <HeaderWrapper>
      <Link to="/home">
        <img className='img_logo'  src={logoSrc} alt='logo Platzi Exchange' />
      </Link>
      <h1 onClick={()=> { history.push('/home')}}>PlatziExchange</h1>
      <h3>BTC</h3>
      <h3>ETH</h3>
      <h3>XRP</h3>
      <a
        href='https://github.com/DesarrolloWeb-Grupo7-MinTic/Platzi_Exchange'
        target='_blank'
        rel='noreferrer'
      >
        <span>By @mariogomez96 | @alejandra-rey</span>
      </a>
    </HeaderWrapper>
  );
}

export default Header;
