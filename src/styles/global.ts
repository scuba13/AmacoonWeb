import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background: #F5F5FC;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
