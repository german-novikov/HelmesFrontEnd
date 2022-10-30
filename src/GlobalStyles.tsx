import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

  .box-shadow {
    box-shadow: 2px 2px 8px 2px rgba(100, 100, 100, 0.25);
  }

  .page {
    margin-top: 1rem;
  }
`;

export default GlobalStyles;
