import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
  }
`;
 
export default GlobalStyle;