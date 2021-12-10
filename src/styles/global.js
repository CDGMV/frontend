import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html{
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }

  ::-webkit-scrollbar-track{
    background: #141414;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background: #1E1E1E;
  }

  ::-webkit-scrollbar-thumb{
    background: #E0E0DE;
  }

  ::-webkit-scrollbar-thumb:hover{
    background: #DF4729;
  }

  * {
    box-sizing: border-box;
    color: #E0E0DE;
  }

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Anton', sans-serif;
    background-color: #141414;
  }

  span{
    margin-left: 250px;
    color: #DF4729;
    font-size: 34px;

    @media screen and (max-width: 900px) {
      margin-left: 180px;
      font-size: 28px;
    }

    @media screen and (max-width: 700px) {
      margin-left: 90px;
      font-size: 25px;
    }
    
    @media screen and (max-width: 500px) {
      margin-left: 20px;
      font-size: 20px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  b {
    color: #DF4729;
  }  
`;
