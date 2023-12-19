import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
  *{
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    user-select: none;
    letter-spacing: 1px;
    a {
      text-decoration: none;
    }
    input{
      &:disabled{
        opacity: 0.7;
        cursor: progress;
      }
    }
    button{
      &:disabled{
        opacity: 0.7;
        cursor: progress;
      }
    }
  }
`;

export default GlobalStyle;
