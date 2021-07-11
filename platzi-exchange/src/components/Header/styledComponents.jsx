import styled from "styled-components";

export const HeaderWrapper = styled.div`

 
 width: 100%;
  height: 60px;
  background: #68d391;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  & img {
    height: 85%;
    width: auto;
    margin: 0 0 0 10px;
  }
  & a {
    margin: 10px 10px;
    margin-left: auto;
    text-decoration: none;
    color: #fff;
    font-size: 12px;
  }
  & h1 {
    margin: 0 10px 0 0;
    font-size: 18px;
    font-weight: 400;
    :hover{
        cursor: pointer;
    }
  }
  & h3 {
    margin: 0 10px;
    font-size: 12px;
    font-weight: 400;
    color:#e0e0e0;
    transition: all 0.2s ease-in-out;
    :hover{
      color: #fff; 
      cursor: pointer; 
    }
  }
`;
