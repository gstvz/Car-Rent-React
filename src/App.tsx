import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout/Layout";
import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { theme } from "./shared/styles/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
