import { createGlobalStyle }  from 'styled-components'
import { BACKGROUND_COLOR } from '../constant'

const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${BACKGROUND_COLOR};
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    margin: 0;
  }
`

export default GlobalStyles
