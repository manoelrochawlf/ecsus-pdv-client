import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  body{
    background: linear-gradient(90deg, rgba(225,225,225,1) 42%, rgba(82,87,98,1) 100%);
  }
  `
