import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #efefef;
  }
`