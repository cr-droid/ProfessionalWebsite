import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  nav ul li {
    display: inline;
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  section {
    padding: 20px;
  }
  footer ul {
    list-style-type: none;
    padding: 0;
  }
  footer ul li {
    display: inline;
    margin-right: 10px;
  }
`;

export default GlobalStyles;
