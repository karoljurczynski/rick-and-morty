import { createGlobalStyle } from 'styled-components';
import COLORS from './colors/colors';


const StylesConfig = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Oswald', sans-serif;
    color: ${COLORS.PRIMARY_ANTHRACITE_100};
    font-weight: 400;
    outline: none;
    border: none;
    box-shadow: none;
  }
  body {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.PRIMARY_BLUE_LIGHT};
    overflow-x: hidden;
  }
`;

export default StylesConfig;