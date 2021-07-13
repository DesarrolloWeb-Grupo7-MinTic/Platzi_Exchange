import styled from "styled-components";

export const DetailPageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  
`;

export const TopSectionWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin: 2% 0;
`;

export const CoinWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  img {
    height: 128px;
    width: auto;
  }
`;

export const NameSymbolWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  p {
    margin: 20px 2px 0 0px;
  }
  .nameSymbolWrapper__name {
    font-size: 24px;
  }
  .nameSymbolWrapper__symbol {
    font-size: 16px;
    color: grey;
    position: relative;
    bottom: 2px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  justify-content: center;
  align-items: center;
  min-width: 20%;
  p {
    font-size: 14px;
    margin: 7.5px 0;
  }
  .align-right {
    margin-left: auto;
  }
  .bold {
    font-weight: 700;
    color: #000000a2;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  margin-top: 30px;
  * {
    margin: 10px 0;
  }
  button {
    height: 30px;
    background-color: #2f855a;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: all 0.4s ease-in-out;
  }

  button:hover {
    color: #2f855a;
    background-color: #fff;
    border: 1px solid #2f855a;
    cursor: pointer;
  }

  .ButtonsWrapper__input_buscar {
    border: none;
    border-bottom: 1px solid grey;
    width: 100%;
  }

  .ButtonsWrapper__input_buscar:focus-visible {
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
  }
  .ButtonsWrapper__input_buscar::placeholder {
    text-align: center;
  }

  .ButtonsWrapper__p{
    text-align: center;

  }
`;

export const GraphDiv = styled.div`
  display: flex;
  width: 60%;
  height: auto;
  justify-content: center;
  align-items: center;
`;
