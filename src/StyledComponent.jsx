import React from "react";
import { Container } from "./style";

import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   body{
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.cl};
   }
`;

class StyledComponent extends React.Component {
  state = {
    light: true,
  };
  render() {
    const theme = {
      bg: this.state.light ? "white" : "#0d3f48",
      cl: this.state.light ? "#0d3f48" : "white",
    };

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          Styled component
          <h1>hello world</h1>
          <button onClick={() => this.setState({ light: !this.state.light })}>
            Tungi rejim
          </button>
        </Container>
      </ThemeProvider>
    );
  }
}

export default StyledComponent;
