import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout/Layout";
import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { theme } from "./shared/styles/theme/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
