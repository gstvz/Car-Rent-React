import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Layout } from "@components";
import { GlobalStyle, theme } from "@shared/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
