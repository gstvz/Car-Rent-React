import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
  
  li {
    list-style-type: none;
  }

  .Toastify__toast-container {
    font-size: 1.5rem;
  }
`;